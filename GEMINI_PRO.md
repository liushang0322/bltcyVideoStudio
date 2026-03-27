# bltcyVideoStudio 核心架构优化方案 (Gemini Pro)

针对当前项目的深度审计，本方案旨在提升系统在**模型驱动灵活性**、**参数适配健壮性**、**存储并发安全**及**前端可维护性**四个维度的表现。

---

## 1. 模型适配器模式 (Model Adapter Pattern)
**现状**：`sora2-client.js` 中存在大量针对 `kling`、`veo` 等模型的 `if/else` 硬编码逻辑。
**改进**：引入适配器注册机制，将不同厂商的 Payload 构建逻辑解耦。

### 核心设计：
- **Registry**: 统一注册表，根据 `modelId` 或 `provider` 路由至特定适配器。
- **BaseAdapter**: 定义标准接口（`buildVideoPayload`, `parseStatus`, `validateParams`）。
- **Implementation**:
  - `KlingAdapter`: 处理 `multipart/form-data` 的展平逻辑。
  - `VeoAdapter`: 处理 `[FRAME_BINDING_STRICT]` 的 Prompt 自动注入及宽高比校验。
  - `StandardAdapter`: 兜底处理符合 OpenAI 规范的 JSON 请求。

---

## 2. 增强型参数验证与类型安全
**现状**：参数传递主要依靠字符串拼接和松散的类型转换。
**改进**：
- **Schema 定义**：在 `app-config.js` 中为每个任务类型（TaskType）定义严格的 JSON Schema。
- **自动强制转换**：在进入 `sora2-client.js` 前，根据 Schema 强制将字符串转换为数字（如 `duration`）、布尔值或特定的枚举值。
- **动态 UI 反馈**：前端 `app.js` 增加参数范围实时验证（例如：可灵模型当选定 10s 长度时，自动检测是否支持高帧率模式）。

---

## 3. 存储并发与原子性保护
**现状**：`storage.js` 直接读写 `state.json`，无锁定机制，高并发下存在数据覆盖风险。
**改进**：
- **原子化写入**：使用 `fs.rename` 实现原子化更新（先写临时文件再替换），防止写入中断导致文件损坏。
- **引入文件锁**：集成 `proper-lockfile` 或简单的基于 Promise 的队列，确保同一时间只有一个进程在修改状态库。
- **推荐方向**：对于任务量超过 1000 条的场景，建议将 `storage.js` 切换为 **SQLite**，利用其原生事务特性解决任务状态竞争问题。

---

## 4. 全局安全与脱敏增强
**现状**：后端日志可能记录敏感 API Key；路径校验仍有绕过风险。
**改进**：
- **Zero-Log Policy**：在后端日志拦截器中，对 `Authorization` 头部及 `payload.apiKey` 字段进行全局正则表达式脱敏。
- **路径强制隔离**：在 `server.js` 的 `isSafeWorkspacePath` 中，除了 `resolve` 检查，增加 `path.normalize` 后的前缀硬性匹配，严禁 `..` 字符出现在任何写入路径中。

---

## 5. 前端模块化与性能优化
**现状**：`app.js` 为 300KB+ 的单体脚本，状态管理混乱。
**改进**：
- **ESM 拆分**：将 `app.js` 拆分为：
  - `ui-renderer.js`: 处理 DOM 动态生成。
  - `task-manager.js`: 维护任务队列与轮询状态。
  - `api-service.js`: 封装底层 `fetch` 调用与错误重试。
- **防抖与节流**：对 UI 刷新逻辑（尤其是任务进度条和日志滚动）增加 `requestAnimationFrame` 调度，避免在任务密集时造成浏览器主线程阻塞。

---

## 6. 实施路线图 (Implementation Roadmap)

1. **Phase 1 (Immediate)**: 修复 `storage.js` 的原子写入问题，防止任务数据丢失。
2. **Phase 2 (Architectural)**: 重构 `sora2-client.js`，实现 `ModelAdapter` 机制。
3. **Phase 3 (Robustness)**: 引入后端参数类型校验与全局脱敏。
4. **Phase 4 (UI/UX)**: 逐步推进前端代码的 ESM 模块化拆分。
