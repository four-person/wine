<template>
  <div class="shop">
    <div class="topw">
      {{names}}
    </div>
  </div>
</template>
<script>
// import Head from 'components/head'
export default {
  data() {
    return {
      names:'产品分类'
    }
  }
  // components:{
  //   Head
  // }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';

.shop{
  .h(150);
  // width: 100%;
  background: @bg-color-black;
  .l_h(150);
  .topw{
    color: @font-color-white;
    .f_s(44);
    .padding(0,0,0,20); 
  }
}
</style>
