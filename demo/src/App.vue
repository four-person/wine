<template>
  <div id="app">
    <Head></Head>
    <!-- <div class="ppp"></div> -->
    <input type="text" >
    <Foot></Foot>
  </div>
</template>
<script>
import Head from 'components/head'
import Foot from 'components/foot'
// import Search from 'components/search'
export default {
  methods: {
    // tosearch(){
    //   this.$router.push('/search')
    // }
  },
  components:{
    Head,Foot
  }
}
</script>
<style lang="less">
#app {
  position: fixed;
  top:0;
  bottom: 0;
  background: #fcc;
  width: 100%;
  // .ppp{
  //   background: blue;
  //   height: 1000px;
  // }
}
</style>
