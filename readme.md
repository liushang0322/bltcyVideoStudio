# Sora2 Workbench

一个基于 openai-sora-sample-app 交互思路改造的 Sora2 应用骨架，目标是让图像/视频生成更高效。

## 当前已覆盖能力

- 1 文生图
- 2 图像编辑
- 3 文生视频
- 4 图生视频
- 5 创建任务
- 6 查询任务状态
- 7 取消任务
- 8 任务列表/分页
- 9 重试任务
- 15 Seed
- 16 Negative Prompt
- 17 参考图
- 20 模型列表/能力探测
- 23 Webhook 回调

## 运行

1. 复制环境变量

```bash
cp .env.example .env
```

2. 启动

```bash
npm run dev
```

如果你想固定端口，可显式指定：

```bash
PORT=3100 npm run dev
```

开发联调可运行完整模拟流程测试（启动 mock 上游 + 应用端到端检查）：

```bash
npm run test:simulate
```

3. 打开 `http://localhost:3000`（若 3000 端口被占用，服务会自动尝试 3001、3002...）

4. 在页面顶部的 **Sora2 连接配置** 中填写：
   - Sora2 API Key（必填，等价于 OPENAI_API_KEY）
   - API Base URL（高级，可选；默认 `https://api.openai.com`）
   - 系统代理地址（可选；例如 `http://127.0.0.1:7890`）

> 说明：如果你在界面里不填代理地址，应用将直连；填写后仅服务端请求走该代理。也可以用环境变量方式。

例如（macOS/Linux）：

```bash
HTTPS_PROXY=http://127.0.0.1:7890 HTTP_PROXY=http://127.0.0.1:7890 npm run dev
```


5. 在“创建任务”里点击 **加载模型**（或切换任务类型时自动加载），模型会按 `taskType` 从 OpenAI `GET /v1/models` 动态过滤后返回。
   - 严格模式：当前任务类型模型加载失败时，不允许提交任务。

6. 页面提供“连接状态”区域，可直接查看当前链路模式（proxy/direct）与 OpenAI 连通性结果，并支持“运行完整诊断”。连通性检测会同时探测 `/v1/models`、`/v1/images`、`/v1/videos`，避免“模型可达但生图/生视频不可达”的误判。
7. 研发调试：页面底部有“调试栏”，会记录最近请求/响应/错误，便于排查“无法生成”等问题。
8. 不同任务类型会动态展示参数：
   - 文生图：隐藏视频参数与源图必填
   - 图像编辑/图生视频：源图 URL 自动必填
   - 文生视频/图生视频：Duration/FPS 自动必填

## 接口

### 推荐新接口（视频/图片分离）
- `POST /api/videos` 创建视频任务（映射 `POST /v1/videos`）
- `GET /api/videos/:id` 查询视频状态（映射 `GET /v1/videos/{id}`）
- `GET /api/videos/:id/content` 下载视频内容（映射 `GET /v1/videos/{id}/content`）
- `POST /api/images` 生成图片（映射 `POST /v1/images`）

### 兼容接口（旧版）
- `GET /api/v1/health`
- `GET /api/v1/meta`（任务类型与运行时元信息）
- `GET /api/v1/config`
- `POST /api/v1/config`
- `GET /api/v1/models?taskType=text_to_image|image_edit|text_to_video|image_to_video`
- `GET /api/v1/connectivity`（返回当前链路模式 + OpenAI 连通性检测，含 models/images/videos 端点探测）
- `GET /api/v1/diagnostics`（配置、连通性、图片模型、视频模型的一键诊断）
- `POST /api/v1/tasks`
- `GET /api/v1/tasks`
- `GET /api/v1/tasks/:id`
- `POST /api/v1/tasks/:id/cancel`
- `POST /api/v1/webhooks/sora2`

## 说明

- 当前已按官方视频接口对齐：`POST /v1/videos`、`GET /v1/videos/{id}`。
- 默认使用内存保存任务（重启进程会丢失）。
- `src/sora2-client.js` 使用通用 REST 形式调用，请按你的 Sora2 实际接口路径/字段调整。
- 图片生成会优先调用 `/v1/images`；若出现 `Unknown parameter: response_format` 会自动去掉该参数重试；若仍不兼容（400/404/422）再回退到 `/v1/images/generations`。
- 支持通过 UI 的代理地址或 `OPENAI_PROXY_URL/HTTPS_PROXY/HTTP_PROXY` 环境变量实现“仅应用走代理”。
- 模型前缀与默认生成参数可通过环境变量配置：`VIDEO_MODEL_PREFIXES`、`IMAGE_MODEL_PREFIXES`、`DEFAULT_VIDEO_SIZE`、`DEFAULT_IMAGE_SIZE`、`DEFAULT_VIDEO_SECONDS`。
- 代理连通性失败时会在错误中返回具体代理地址/端口连接信息（基于 curl 错误），便于定位代理是否真正生效。
- 当 UI 代理地址留空时，客户端会强制直连（`--noproxy *`），避免被宿主机默认代理误劫持。

- 不再提供 mock 图片兜底；网络不可达时会直接返回真实上游错误，便于定位连通性问题。
- 图片模型（gpt-image/dall-e）与视频模型（sora）按任务类型严格分离展示，避免混用。
- 当某任务类型无可用模型时，后端返回 `NO_MODELS_FOR_TASK_TYPE`，前端阻止提交。
