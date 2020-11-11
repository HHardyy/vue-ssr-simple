/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:32:28
 * @Descripttion: 
 */
import Vue from 'vue'
import App from './App.vue'

export default () => {
  const app = new Vue({
    el: '#app',
    render: h => h(App)
  })

  return {
    app
  }
}