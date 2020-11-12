/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-09 23:42:58
 * @Descripttion: 
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const mergeWebpack = require('webpack-merge')
const VueSSRClientplugin = require('vue-server-renderer/client-plugin')

const webpackBaseConfig = require('./webpack.base')

module.exports = mergeWebpack.merge(webpackBaseConfig, {
  entry: {
    client: path.resolve(__dirname, '../src/client.entry.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.client.html'),
      filename: 'index.client.html',
      minify: false
    }),
    new VueSSRClientplugin()
  ]
})