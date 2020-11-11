<!--
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:29:53
 * @Descripttion: 
-->
<template>
  <div @click="handleClickBar">Bar.vue</div>
</template>

<script>
export default {
  methods: {
    handleClickBar () { alert('bar') }
  }
}
</script>