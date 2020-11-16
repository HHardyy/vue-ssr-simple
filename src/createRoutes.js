/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-16 23:07:28
 * @Descripttion: 
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Foo = () => import('./components/Foo.vue')
const Bar = () => import('./components/Bar.vue')

// 创建路由
export default () => {
  const routes = [
    { path: '/', component: Foo },
    { path: '/bar', component: Bar }
  ]
  
  const router  = new VueRouter({
    mode: 'history',
    routes
  })

  return router
}