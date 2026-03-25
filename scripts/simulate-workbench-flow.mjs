import http from 'node:http';
import { existsSync } from 'node:fs';
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const APP_PORT = Number(process.env.SIM_APP_PORT || 3040);
const MOCK_PORT = Number(process.env.SIM_MOCK_PORT || 4040);
const STATE_FILE = resolve(process.cwd(), '.sora2studio', 'state.json');
const SIM_STORAGE_ROOT = resolve(process.cwd(), '.sora2studio-sim');

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function startMockServer() {
  let imageCalls = 0;
  const videoStore = new Map();

  const server = http.createServer(async (req, res) => {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const raw = Buffer.concat(chunks).toString('utf8') || '{}';
    let body = {};
    try { body = JSON.parse(raw); } catch {}

    const send = (code, data) => {
      res.writeHead(code, { 'content-type': 'application/json' });
      res.end(JSON.stringify(data));
    };

    if (req.url === '/v1/models' && req.method === 'GET') {
      return send(200, {
        data: [
          { id: 'sora-2', provider: 'openai' },
          { id: 'sora-2-pro', provider: 'openai' },
          { id: 'gpt-image-1', provider: 'openai' },
          { id: 'dall-e-3', provider: 'openai' }
        ]
      });
    }

    if (req.url === '/v1/images' && req.method === 'POST') {
      imageCalls += 1;
      if ('response_format' in body) {
        return send(400, { error: { message: "Unknown parameter: 'response_format'.", type: 'invalid_request_error' } });
      }
      return send(200, { created: Date.now(), data: [{ b64_json: Buffer.from('image-ok').toString('base64') }] });
    }

    if (req.url === '/v1/images/generations' && req.method === 'POST') {
      return send(200, { created: Date.now(), data: [{ b64_json: Buffer.from('image-fallback-ok').toString('base64') }] });
    }

    if (req.url === '/v1/videos' && req.method === 'POST') {
      const id = `vid_${Date.now()}`;
      videoStore.set(id, { id, status: 'completed', output: { url: 'https://example.com/video.mp4' } });
      return send(201, { id, status: 'queued' });
    }

    const m = req.url.match(/^\/v1\/videos\/([^/]+)$/);
    if (m && req.method === 'GET') {
      const item = videoStore.get(m[1]);
      if (!item) return send(404, { error: { message: 'not found' } });
      return send(200, item);
    }

    const c = req.url.match(/^\/v1\/videos\/([^/]+)\/cancel$/);
    if (c && req.method === 'POST') {
      const item = videoStore.get(c[1]);
      if (!item) return send(404, { error: { message: 'not found' } });
      item.status = 'canceled';
      return send(200, { id: item.id, status: 'canceled' });
    }

    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ error: { message: `Unhandled ${req.method} ${req.url}` } }));
  });

  return new Promise((resolve) => {
    server.listen(MOCK_PORT, () => resolve({ server, getStats: () => ({ imageCalls }) }));
  });
}

async function startAppServer() {
  process.env.PORT = String(APP_PORT);
  process.env.OPENAI_BASE_URL = `http://localhost:${MOCK_PORT}`;
  process.env.SORA2_STUDIO_ROOT = '.sora2studio-sim';
  const { startServer, stopServer } = await import('../src/server.js');
  const port = await startServer();
  return {
    port,
    async close() {
      await stopServer();
    }
  };
}

async function request(path, { method = 'GET', body } = {}) {
  const res = await fetch(`http://localhost:${APP_PORT}${path}`, {
    method,
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

async function run() {
  const failures = [];
  const checks = [];
  let mock;
  let app;
  const originalState = existsSync(STATE_FILE) ? await readFile(STATE_FILE, 'utf8') : null;

  try {
    await rm(SIM_STORAGE_ROOT, { recursive: true, force: true });
    await mkdir(SIM_STORAGE_ROOT, { recursive: true });
    mock = await startMockServer();
    app = await startAppServer();
    await sleep(200);

    const health = await request('/api/v1/health');
    checks.push(['health', health.status === 200]);
    assert(health.status === 200, 'health endpoint failed');

    const config = await request('/api/v1/config', { method: 'POST', body: { sora2ApiKey: 'sk-test', baseUrl: `http://localhost:${MOCK_PORT}`, proxyUrl: '' } });
    checks.push(['config_save', config.status === 200]);
    assert(config.status === 200, 'config save failed');

    const conn = await request('/api/v1/connectivity');
    checks.push(['connectivity_ok', conn.status === 200 && conn.data?.connectivity?.ok === true]);
    assert(conn.status === 200, 'connectivity check failed');

    const imageModels = await request('/api/v1/models?taskType=text_to_image');
    checks.push(['image_models', imageModels.status === 200 && imageModels.data?.data?.some?.((item) => item.id === 'gpt-image-1')]);
    assert(imageModels.status === 200, 'image models fetch failed');

    const videoModels = await request('/api/v1/models?taskType=text_to_video');
    checks.push(['video_models', videoModels.status === 200 && videoModels.data?.data?.some?.((item) => item.id === 'sora-2')]);
    assert(videoModels.status === 200, 'video models fetch failed');

    const imageTask = await request('/api/v1/tasks', { method: 'POST', body: { type: 'text_to_image', prompt: 'cat', model: 'gpt-image-1' } });
    checks.push(['image_task_create', imageTask.status === 201]);
    assert(imageTask.status === 201, `image task failed: ${JSON.stringify(imageTask.data)}`);
    assert(imageTask.data?.output?.data?.[0]?.b64_json, 'image output missing b64_json');

    const uploadedAsset = await request('/api/v1/assets/upload', {
      method: 'POST',
      body: {
        kind: 'image',
        name: 'seed.png',
        mimeType: 'image/png',
        dataUrl: `data:image/png;base64,${Buffer.from('tiny-image').toString('base64')}`
      }
    });
    checks.push(['asset_upload', uploadedAsset.status === 201 && uploadedAsset.data?.asset?.id]);
    assert(uploadedAsset.status === 201, `asset upload failed: ${JSON.stringify(uploadedAsset.data)}`);

    const imageToVideoTask = await request('/api/v1/tasks', {
      method: 'POST',
      body: {
        type: 'image_to_video',
        model: 'sora-2',
        sourceAssetId: uploadedAsset.data.asset.id,
        duration: 8
      }
    });
    checks.push(['image_to_video_task_create', imageToVideoTask.status === 201]);
    assert(imageToVideoTask.status === 201, `image_to_video task failed: ${JSON.stringify(imageToVideoTask.data)}`);

    const videoTask = await request('/api/v1/tasks', { method: 'POST', body: { type: 'text_to_video', prompt: 'city flyover', model: 'sora-2', duration: 8 } });
    checks.push(['video_task_create', videoTask.status === 201]);
    assert(videoTask.status === 201, `video task failed: ${JSON.stringify(videoTask.data)}`);

    const list = await request('/api/v1/tasks');
    checks.push(['task_list', list.status === 200 && Number(list.data?.total || 0) >= 3]);
    assert(list.status === 200, 'task list failed');

  } catch (e) {
    failures.push(e.message);
  } finally {
    if (app) await app.close();
    if (mock?.server) await new Promise((r) => mock.server.close(() => r()));
    await rm(SIM_STORAGE_ROOT, { recursive: true, force: true });
    delete process.env.SORA2_STUDIO_ROOT;
    if (originalState !== null) {
      await writeFile(STATE_FILE, originalState, 'utf8');
    }
  }

  console.log('\n=== Simulated Flow Report ===');
  for (const [name, ok] of checks) {
    console.log(`${ok ? 'PASS' : 'FAIL'} - ${name}`);
  }

  if (failures.length) {
    console.log('\nDetected defects:');
    for (const f of failures) console.log(`- ${f}`);
    process.exit(1);
  }

  const failedChecks = checks.filter(([, ok]) => !ok);
  if (failedChecks.length) {
    console.log('\nDetected defects:');
    for (const [name] of failedChecks) {
      console.log(`- ${name} failed (check related module: src/server.js / src/sora2-client.js / public/app.js)`);
    }
    process.exit(1);
  }

  console.log('\nNo blocking defects detected in simulated full flow.');
}

run();
