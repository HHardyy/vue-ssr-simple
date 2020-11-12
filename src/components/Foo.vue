<!--
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:30:18
 * @Descripttion: 
-->
<template>
  <div style="color: green" @click="handleClickFoo">Foo.vue</div>
</template>

<script>
export default {
  methods: {
    handleClickFoo () { alert('foo') }
  }
}
</script>