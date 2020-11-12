/*
 * @version: 
 * @Author: Hardy 
 * @Date: 2020-11-08 00:48:35
 * @Descripttion: 
 */
const Koa = require('koa')
const Router = require('@koa/router')
const VueServerRenderer = require('vue-server-renderer')
const fs = require('fs')
const koaStatic = require('koa-static')
const path = require('path')
const Vue = require('vue')

const server = new Koa()
const router = new Router()

server.use(router.routes())
// 静态服务中间件
server.use(koaStatic(path.resolve(__dirname, 'dist')))

// const boundle = fs.readFileSync('./dist/server.boundle.js', 'utf8')
const template = fs.readFileSync('./public/index.ssr.html', 'utf8')

// 固定文件名的打包后的服务端文件
const boundle = require('./dist/vue-ssr-server-bundle.json')
// 固定文件名的打包后的服务端文件， 存着client端的打包信息
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

// 自动引入
const render = VueServerRenderer.createBundleRenderer(boundle, { template, clientManifest })

router.get('/', async ctx => { 
  // 如果渲染的内容需要增加样式，需要使用回调的方式
  ctx.body = await new Promise((resolve, reject) => {
    render.renderToString((err, html) => {
      resolve(html)
    })
  })
})

server.listen(10086)

// 这是简易的ssr demo
// const template = fs.readFileSync('./tem.html', 'utf8')
// const render = VueServerRenderer.createRenderer({
//   template
// })

// const vm = new Vue({
//   data () {
//     return {
//       name: 'hardy'
//     }
//   },
//   template: `<div>这是服务器的 {{name}}</div>`
// })

// router.get('/', async ctx => {
//   ctx.body = await render.renderToString(vm)
// })

// server.listen(10086)