# Sora2 Video Studio - 开发指南

## 一、核心设计

### 模型驱动 UI 架构
```
后端返回模型能力 → 前端动态渲染表单 → 零硬编码参数
```

### 页面布局
```
┌─────────────────────────────────────────────────────────┐
│ 顶部：连接状态 | 诊断 | 模型同步 | 设置                 │
├─────────────────────────────────────────────────────────┤
│ 左侧(30%)        │ 右侧(70%)                            │
│ • 任务类型选择   │ 结果展示区                           │
│ • 模型选择       │ [图1] [图2] [图3]                   │
│ • 参数表单       │ [图4] [图5]                         │
│   - Basic        │ 下载|收藏|分享|再生成               │
│   - Advanced     │                                      │
│   - Expert       │                                      │
│ • 提交按钮       │                                      │
│ • 预设管理       │                                      │
├─────────────────────────────────────────────────────────┤
│ 底部：任务队列 [任务1] [任务2] [任务3]                  │
└─────────────────────────────────────────────────────────┘
```

---

## 二、Sora 模型参数

### 文生图 (text_to_image)
```
必填: prompt (1-4000字符)
可选: n (1-10), size, quality, style, seed, negative_prompt, reference_image
```

### 图像编辑 (image_edit)
```
必填: prompt, image
可选: n (1-10), mask, seed, negative_prompt
```

### 文生视频 (text_to_video)
```
必填: prompt
可选: duration (5-120s), size, fps, seed, negative_prompt, reference_image
```

### 图生视频 (image_to_video)
```
必填: image
可选: prompt, duration (5-120s), size, fps, seed, negative_prompt
```

---

## 三、后端实现

### 1. 模型能力接口
**端点**: `GET /api/v1/models/capabilities`

**返回格式**:
```json
{
  "taskTypes": [
    { "value": "text_to_image", "label": "文生图", "models": ["sora-2024-12-19"] }
  ],
  "models": {
    "sora-2024-12-19": {
      "id": "sora-2024-12-19",
      "taskTypes": ["text_to_image", "image_edit", "text_to_video", "image_to_video"],
      "capabilities": {
        "text_to_image": {
          "fields": [
            {
              "name": "prompt",
              "type": "string",
              "label": "提示词",
              "required": true,
              "maxLength": 4000,
              "category": "basic",
              "visible": true
            },
            {
              "name": "n",
              "type": "integer",
              "label": "生成数量",
              "required": false,
              "min": 1,
              "max": 10,
              "default": 1,
              "category": "basic",
              "visible": true
            },
            {
              "name": "size",
              "type": "enum",
              "label": "图片尺寸",
              "options": [
                { "value": "1024x1024", "label": "1024×1024" },
                { "value": "1792x1024", "label": "1792×1024" },
                { "value": "1024x1792", "label": "1024×1792" }
              ],
              "default": "1024x1024",
              "category": "basic",
              "visible": true
            },
            {
              "name": "quality",
              "type": "enum",
              "label": "质量",
              "options": [
                { "value": "standard", "label": "标准" },
                { "value": "hd", "label": "高清" }
              ],
              "default": "standard",
              "category": "advanced",
              "visible": true
            },
            {
              "name": "seed",
              "type": "integer",
              "label": "随机种子",
              "required": false,
              "min": 0,
              "max": 2147483647,
              "category": "expert",
              "visible": false
            }
          ]
        }
      }
    }
  }
}
```

### 2. 创建任务接口
**端点**: `POST /api/v1/tasks`

**请求**:
```json
{
  "taskType": "text_to_image",
  "model": "sora-2024-12-19",
  "params": {
    "prompt": "professional portrait",
    "n": 3,
    "size": "1024x1024"
  }
}
```

**响应**:
```json
{
  "id": "task-001",
  "status": "pending",
  "results": []
}
```

### 3. 查询任务接口
**端点**: `GET /api/v1/tasks/:id`

**响应**:
```json
{
  "id": "task-001",
  "status": "completed",
  "results": [
    { "url": "https://...", "index": 0 },
    { "url": "https://...", "index": 1 },
    { "url": "https://...", "index": 2 }
  ]
}
```

### 4. 参数验证
- 后端验证所有参数
- 返回清晰的错误信息
- 支持参数类型、范围、必填检查

---

## 四、前端实现

### 1. 动态表单生成
```javascript
// 根据模型能力生成表单
class FormEngine {
  generateForm(taskType, modelId, capabilities) {
    const fields = capabilities.models[modelId].capabilities[taskType].fields;

    // 按 category 分组
    const basic = fields.filter(f => f.category === 'basic');
    const advanced = fields.filter(f => f.category === 'advanced');
    const expert = fields.filter(f => f.category === 'expert');

    // 渲染 HTML
    // basic: 默认展开
    // advanced: 默认折叠
    // expert: 需要手动展开
  }
}
```

### 2. 参数验证
```javascript
// 实时验证用户输入
class FormValidator {
  validateField(field, value) {
    // 检查必填
    // 检查类型
    // 检查范围
    // 返回错误信息
  }
}
```

### 3. 多张图片展示
```javascript
// 网格显示多张图片
class ResultManager {
  displayMultipleImages(results) {
    // 创建网格容器
    // 每张图片一个卡片
    // 卡片包含：下载、收藏、复制URL、再生成
  }
}
```

### 4. 参数快照
```javascript
// 保存每次生成的参数
{
  taskId: "task-001",
  taskType: "text_to_image",
  params: { /* 参数 */ },
  results: [ /* 结果 */ ],
  createdAt: "2024-01-01T00:00:00Z"
}
```

---

## 五、UI 样式规范

| 项目 | 规范 |
|------|------|
| 主色 | 橙色 (#d05b2c) |
| 辅色 | 蓝色 (#2b5876) |
| 成功 | 绿色 (#1d8b5a) |
| 危险 | 红色 (#bc3f31) |
| 间距 | 卡片 18px、元素 12px、内边距 24px |
| 圆角 | 大 32px、中 24px、小 18px |
| 动画 | 0.2-0.3s 平滑过渡 |

---

## 六、实现步骤

### Phase 1（核心闭环）
1. 后端：创建模型能力接口
2. 前端：动态表单生成引擎
3. 前端：参数验证逻辑
4. 修复：多选图实现（n 参数）
5. 前端：多张图片网格展示
6. 后端：参数快照存储

### Phase 2（易用性）
1. 参数预设保存/加载
2. 参数历史记录
3. 快捷键支持
4. 拖拽上传

### Phase 3（高级）
1. Seed 复现
2. Negative Prompt
3. 参考图/风格图
4. 参数对比

---

## 七、关键问题确认

1. **模型能力信息来源** - 手工整理 / 动态获取 / 本地缓存？
2. **多选图交互** - 全部下载 / 逐张下载 / 选择性下载？
3. **参数预设** - 全局预设 / 个人预设 / 两者都要？
4. **任务队列** - 支持同时提交多个任务吗？
5. **参考图上传** - 本地上传 / URL / 两者都支持？

