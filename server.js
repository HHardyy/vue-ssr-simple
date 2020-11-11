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
const Vue = require('vue')

const server = new Koa()
const router = new Router()

server.use(router.routes())

const template = fs.readFileSync('./tem.html', 'utf8')
const render = VueServerRenderer.createRenderer({
  template
})

const vm = new Vue({
  data () {
    return {
      name: 'hardy'
    }
  },
  template: `<div>这是服务器的 {{name}}</div>`
})

router.get('/', async ctx => {
  ctx.body = await render.renderToString(vm)
})

server.listen(10086)