/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:32:28
 * @Descripttion: 
 */
import Vue from 'vue'
import App from './App.vue'
import createRoutes from './createRoutes'
import createStore from './createStore'

export default () => {
  const router = createRoutes()
  const store = createStore()

  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}