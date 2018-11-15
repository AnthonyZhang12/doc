1. 用 css 实现三角形

  ```css
    .demo {
      width: 0;
      height: 0;
      border-left: 10px solid black;
      border-top: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
  ```

2. 什么是响应式布局 [参考](https://www.cnblogs.com/dreamsboy/p/5656009.html)

   - 就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的
   ```html
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <!-- user-scalable属性能够解决ipad切换横屏之后触摸才能回到具体尺寸的问题。 -->
   ```
   
   - 核心 media query
   ```css
    @media screen and (max-width:980px){
      #head { … }
      #content { … }
      #footer { … }
    }
    /* 这里面的样式会覆盖掉之前所定义的样式。*/
   ```
3. Flex 布局

- 容器属性
  - flex-direction: row|column|row-reverse|column-reverse
  - flex-warp: none|warp|warp-reverse
  - justify-content: flex-start|flex-end|center|space-between|space-around
  - align-item: stretch|flex-start|flex-end|center|baseline

- 项目属性
  - flex-grow: 0|1
  - flex: 0 
  - align-self: 
  属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。
  默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

