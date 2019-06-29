<template>
  <div id="app">
<<<<<<< HEAD
<<<<<<< HEAD
    <p> hhahahahah</p>
 
  </div>
</template>

<style lang="less" scope>
@import './common/style/index.less';

#app{
  .w(375);
  .h(88);
  background: @font-color-yellow;
=======
    <Head></Head>
=======
>>>>>>> wentao
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
>>>>>>> b4d90047ef6ac3f399037d957e1cc89fff48ec3a
}
</style>
