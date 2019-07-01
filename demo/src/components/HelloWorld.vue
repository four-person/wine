<template>
  <div class="hello">
    <mt-swipe :auto="4000">
      <mt-swipe-item
      v-for='(item,index) in banners'
      :key="index">
        <img :src="item" alt="">
      </mt-swipe-item>      
    </mt-swipe>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg',
        // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg',
        // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1409224092,1124266154&fm=27&gp=0.jpg'
      ]
    }
  },
  methods: {
    inntBanner () {
      this.$axios.get('https://www.easy-mock.com/mock/5d15ffef00002508da6b174a/example/get')
      .then((res)=>{
        // console.log(res.data) 
        let list = res.data.slider.map((item) => {
            return item.linkUrl
          })
          this.banners = list
      })
    }
  },
  mounted() {
    this.inntBanner()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~style/index.less';
.hello{
    .h(650);
    // width:100%;
    img{
      width:100%;
    }
}

</style>
