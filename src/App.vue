<!--
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:29:06
 * @Descripttion: 
-->
<template>
  <div>
    <h1>App.vue</h1>
    <hr />
    <Bar />
    <hr />
    <Foo />
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