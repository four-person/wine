<template>
  <div class="foot">
    <ul class="m-nav">
            <router-link active-class='cel' tag='li' to='/'>
                <span>首页</span>
            </router-link>
            <router-link active-class='cel' tag='li' to='/Shoptype'>
                <span>产品分类</span>
            </router-link>
            <router-link active-class='cel' tag='li' to='/Rank'>
                <span>购物车</span>
            </router-link>
            <router-link active-class='cel' tag='li' to='/Search'>
                <span>我的</span>
            </router-link>
        </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~style/index.less';
.foot{
    position: fixed;
    bottom: 0;
    left: 0;
  
  .h(150);
  width: 100%;
  background: @bg-color-black;
  .l_h(150);
  ul{
    display: flex;
    justify-content: space-around;
    color: @font-color-white;
    .f_s(44);
    span{
      color:#fff;
    }
  }
}
</style>
