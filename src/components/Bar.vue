<!--
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:29:53
 * @Descripttion: 
-->
<template>
  <div style="color: red;" @click="handleClickBar">Bar.vue || {{$store.state.name}} == {{$store.state.age}}</div>
</template>

<script>
export default {
  asyncData(store) {
    return store.dispatch('changeAll')
  },
  methods: {
    handleClickBar () { alert('bar') }
  }
}
</script>