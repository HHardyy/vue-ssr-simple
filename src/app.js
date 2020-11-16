/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:32:28
 * @Descripttion: 
 */
import Vue from 'vue'
import App from './App.vue'
import createRoutes from './createRoutes'

export default () => {
  const router = createRoutes()
  const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })

  return { app, router }
}