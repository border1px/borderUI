# 组件 API 维护基线

borderUI 恢复维护后，将文档、单元测试和持续集成共同覆盖的接口视为当前维护基线。
现阶段该基线优先覆盖 `Button`、`Switch`、`Cell` 和 `CellItem`；其他历史组件仍可使用，
但在补齐自动化验证前，其接口应视为待确认状态。

## 稳定交互契约

### Button

- `type` 只控制 borderUI 的视觉样式。
- `nativeType` 控制原生按钮类型，可选 `button`、`submit`、`reset`，默认 `button`。
- `disabled` 或 `loading` 为 `true` 时，原生按钮会被禁用。
- `loading` 状态会通过 `aria-busy` 暴露给辅助技术。
- 点击时触发 `click`，参数为原生鼠标事件。

### Switch

- 支持 Vue 2 的 `v-model`：读取 `value`，切换后触发 `input`。
- 每次切换同时触发 `change`，两个事件的参数均为最新布尔值。
- 外部更新 `value` 后，原生复选框状态会同步更新。
- 支持 `disabled`；无可见文本时可通过 `ariaLabel` 提供无障碍名称。

```vue
<bo-switch
  v-model="enabled"
  aria-label="启用通知"
  @change="onChange"
/>
```

### Cell 与 CellItem

- `Cell` 继续作为 `CellItem` 的分组容器。
- `isLink` 或 `clickable` 为 `true` 时，`CellItem` 具有按钮语义并进入键盘焦点顺序。
- 交互式 `CellItem` 支持鼠标点击、Enter 和 Space 激活，并触发 `click`。
- 静态 `CellItem` 不会声明按钮语义。

## 兼容性与变更原则

维护基线使用 Vue 2.6.14、Node.js 22 和仓库锁文件。浏览器范围见
[Supported environments](https://github.com/border1px/borderUI#supported-environments)。

对上述契约的修复会增加回归测试。潜在破坏性变更将先记录在路线图和变更日志中；
在 Vue 3 迁移方案确定前，不承诺历史实验组件的接口保持不变。
