<template>
  <div id="app">
    <!-- <div class="ppp"></div> -->
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>
<script>
// import Head from 'components/head'
import Foot from 'components/foot'
// import Search from 'components/search'
export default {
  methods: {
    // tosearch(){
    //   this.$router.push('/search')
    // }
    // toshop(){
    //   this.$router.push('/Shoptype')
    // }
  },
  components:{
    Foot
  }
}
</script>
<style lang="less">
#app {
  position: fixed;
  top:0;
  bottom: 0;
  // background: #fcc;
  width: 100%;
  // .ppp{
  //   background: blue;
  //   height: 1000px;
  // }
}
</style>
