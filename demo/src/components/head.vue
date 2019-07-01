<template>
<div class="head">
  
  <div class="gundong">
    <div class="topw">
      {{names}}
    </div>
    <Banner></Banner>
    <div class="shopimg" v-for="(item,index) in shopImg" :key="index">
      <div class="llll">
        <img :src="item.linkUrl" alt="">
        <div class="wenzi">
          <span>
            {{item.title}}
          </span>
          <p>
            {{item.price}}
          </p>
          <i>立即购买</i>
        </div>
        
      </div>
      
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
      shopImg:{}
      // result:{}
    }
  },
  components:{
    Banner
  },
  methods: {
    initshopImg () {
      this.$axios.get('https://www.easy-mock.com/mock/5d15ffef00002508da6b174a/example/list')
      .then((res)=>{
        console.log(res.data) 
        let obj = res.data
        // console.log(obj.list[0].title)
        let olist = res.data.list.map((item) => {
            return item
          })
          this.shopImg = olist
          this.shopData(res.data.list)
      })
    },
    // console.log(data)
    shopData(data){
      for(let index=0;index<data.length;index++){
        let dl=data[index]
        // console.log(dl)
        return this.result = dl
      }
      
    }
    // initBs(){
    //   this.scroll=new BS('.head')
    // }
  },
  mounted() {
    this.initshopImg()
    // this.shopData()
    new BS('.head')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~style/index.less';

.head{
  position: fixed;
  .top(0);
  .bottom(150);
  overflow: hidden;
  width: 100%;
  .topw{
    .h(150);
    background: @bg-color-black;
    .l_h(150);
    .f_s(48);
    color: @font-color-white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  img{
    width: 100%;
  }
  .shopimg{
    .llll{
      display: flex;
      // width: 100%;
      height: 200px;
      border: 1px solid #fcc;
      margin: 20px 20px 20px 20px;
      img{
        width: 150px;
        height: 200px;
        
      }
      .wenzi{
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
