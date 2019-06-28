<template>
  <div class="foot">
    <div>
      jio
    </div>
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
  div{
    color: @font-color-white;
    .f_s(44);
  }
}
</style>
