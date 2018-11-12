# Virtual DOM 

1. 用 javaScript 对象模拟 Virtual DOM 树
  用 JavaScript 对象模拟 Virtual DOM 树很简单，只需要记录 TagName, Props, 以及 Children 就可以了
    ```js
    function Element (tagName, props, children) {
      this.tagName = tagName
      this.props = props
      this.children = children
    }

    module.exports = function (tagName, props, children) {
      return new Element(tagName, props, children)
    }
    ```
1. render 方法会根据 TagName 构建一个真正的 dom 结构，然后把 Props 设置上去，然后递归的把自己的子节点也构建出来
1. 当 setState 触发以后，会再次构建一个新的 Virtual DOM 树，然后与旧的进行 diff，生成对应的 patches
   1. 两个 Virtual DOM 树完全的 diff 是一个时间复杂度为 O(n^3) 的问题，但是很少会有将一个节点进行跨级的移动 dom，所以 react 只会对同一级别的 Virtual DOM 进行对比，这样时间复杂度就变成了 O(n)
   2. 在 diff 操作时，react 会遵循 `深度优先` 的原则，先从顶部开始进行对比，然后第一个子节点，然后再子节点的子节点，依次执行
   ![images](./Images/c4ba535164d29fd46383d19512c37349_hd.png)
