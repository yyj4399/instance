const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入插件-清理
// 注意，文档上的引入写法已废弃，会出bug
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    // 插件-清理
    // 新写法添加参数会报错???
    new CleanWebpackPlugin(),
    // 插件-生成html
    new HtmlWebpackPlugin({
      title: '输出管理'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};