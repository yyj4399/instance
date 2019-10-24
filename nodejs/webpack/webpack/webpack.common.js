const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // app: './src/index.js'
    // 为什么用绝对路径？用相对路径会让人迷惑
    app: path.resolve(__dirname, '../src/index.js'),
    another: path.resolve(__dirname, '../src/another-module.js')
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '模式'
    }),
    // 代码分离，防止重复
    // WTF?
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // 生成的js文件等变更为相对路径
    publicPath: './',
  }
};