# webpack 总结

## 概念

- 本质上，webpack 是一个现代 javascript 应用程序的静态打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle

## entry

- 入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始

- 默认值为: ./src

### demo

```js
const config = {
  entry: './path/to/my/entry/file.js'
};
```

```js
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
  }
};
```

## output

- output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
- 默认值为: ./dist

### Demo

```js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

- 多个入口对应的出口写法

```js
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
```

## loader

- loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法
- webpack 只会处理 js 代码
- loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照相反的顺序执行。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript
- 常用loader： babel-loader, style-loader, css-loader, sass-loader, less-Loader, file-loader, url-loader, json-loader, row-loader

### Demo

- configuration

```js
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
```

- 内联

```js
  import Styles from 'style-loader!css-loader?modules!./styles.css';
```

- CLI

```js
  webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

## Plugins

- 插件是 webpack 的支柱功能。webpack 自身也是构建于，你在 webpack 配置中用到的相同的插件系统之上！
- 插件目的在于解决 loader 无法实现的其他事。
- HtmlWebpackPlugin, ExtractTextWebpackPlugin, DefinePlugin, ProvidePlugin, CleanWebpackPlugin, CommonsChunkPlugin, ProcessBarWebpackPlugin, StyleLintWebpackPlugin, HappyPack

### Demo

```javascript
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vender',
    fileName: 'vendor-[hash].min.js'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warning: false,
      drop_console: false
    }
  }),
  new ExtractTextPlugin({
    fileName: 'build.min.css',
    allChunks: true
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  new webpack.HotModuleReplacementPlugin()
]
```
