/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-18 22:29:51
 * @Descripttion: 
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      name: 'hardy',
      age: 18
    },
    mutations: {
      changeName: (state) => {
        state.name = '小方块'
      },
      changeAge: (state) => {
        state.age = 20
      }
    },
    actions: {
     changeAll: ({ commit }) => {
       return new Promise((resolve, reject) => {
         commit('changeName')
         commit('changeAge')
         resolve()
       })
     }
    }
  })

  // 如果当前是浏览器环境,则将store赋予上下文
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }

  return store
}