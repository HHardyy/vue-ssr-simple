<!--
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:29:06
 * @Descripttion: 
-->
<template>
 <!-- 因为服务端渲染的时候，server.boundle.js找不到app挂载 -->
  <div id="app"> 
    <h1>App.vue</h1>

    <router-link to="/">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-view></router-view>
    <!-- <hr />
    <Bar />
    <hr />
    <Foo /> -->
  </div>
</template>

<script>
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'

export default {
  components: {
    Bar,
    Foo
  }
}
</script>