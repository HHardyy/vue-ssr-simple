/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-09 23:43:08
 * @Descripttion: 
 */
const path = require('path')
const mergeWebpack = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackBaseConfig = require('./webpack.base')

module.exports = mergeWebpack.merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    server: path.resolve(__dirname, '../src/server.entry.js')
  },
  target: 'node', // 服务端打包
  output: {
    libraryTarget: 'commonjs2' // 打包后 comonjs标准导出函数
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.ssr.html'),
      filename: 'index.ssr.html',
      excludeChunks: ['server'] // 不自动引入
    })
  ]
})