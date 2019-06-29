<template>
<div class="head">
  <div class="topw">
      {{names}}
    </div>
  <div class="gundong">
    
    <Banner></Banner>
    <div class="shopimg" v-for="(item,index) in shopImg" :key="index">
      <img :src="item" alt="">
    </div>
  </div>
</div>
</template>

<script>
import Banner from './HelloWorld'
import BS from 'better-scroll'
export default {
  data() {
    return {
      names:'食全酒美批发商城',
      shopImg:[]
    }
  },
  components:{
    Banner
  },
  methods: {
    initshopImg () {
      this.$axios.get('https://www.easy-mock.com/mock/5d15ffef00002508da6b174a/example/list')
      .then((res)=>{
        // console.log(res.data.list[0].Factory) 
        let olist = res.data.list.map((item) => {
            return item.linkUrl
          })
          this.shopImg = olist
          // console.log(this.shopImg)
      })
    }
  },
  mounted() {
    this.initshopImg();
    new BS('.gundong');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~style/index.less';

.head{

  .gundong{
    .shopimg{
      background: blue;
      width: 200px;
      height: 900px;
      img{
        height: 50px;
        width: 100%;
      }
  }
  }
  .topw{
    color: @font-color-white;
    background: @bg-color-black;
    .f_s(44);
    .padding(0,0,0,20); 
    .h(150);
  }
  

}
</style>
