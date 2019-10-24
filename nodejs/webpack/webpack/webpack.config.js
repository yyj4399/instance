const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 注意，文档上的引入写法已废弃，会报错
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // app: './src/index.js'
    // 为什么用绝对路径？用相对路径会让人迷惑
    app: path.resolve(__dirname, '../src/index.js')
  },
  // 模式 1. 开发模式: development 2. 生产模式: production
  // mode: "development",
  // 开发工具，用于追踪报错堆栈，否则被打包后无法追溯源代码位置
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // 启用gzip压缩
    // compress: true,
    port: 3000,
    // 模块热替换
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // 插件-清理
    // 新写法添加参数会报错???
    new CleanWebpackPlugin(),
    // 插件-生成html
    new HtmlWebpackPlugin({
      // html属性
      title: '输出管理'
    }),
    // 插件-查看要修补(patch)的依赖
    new webpack.NamedModulesPlugin(),
    // 插件-模块热替换
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    // 生成后的js文件名称
    filename: '[name].bundle.js',
    // 生成文件路径
    path: path.resolve(__dirname, 'dist'),
    // 确保文件资源能够在webServer中正常访问
    publicPath: '/'
  }
};