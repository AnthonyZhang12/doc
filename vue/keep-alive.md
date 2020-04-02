# keep-alive

```HTML
<keep-alive exclude="a">
  <component></component>
</keep-alive>
```

keep-alive 提供了两个生命钩子，分别是 activated 与 deactivated。

项目主流程缓存优化，主流程页面（组件）切换时保持之前加载的状态，避免反复渲染影响页面性能，同时也可以很大程度上减少接口请求，减小服务器压力。

