<template>
  <div class="head">
    <div>
      {{names}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names:'食全酒美批发商城'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '~style/index.less';
.head{
  .h(150);
  // width: 100%;
  background: @bg-color-black;
  .l_h(150);
  div{
    color: @font-color-white;
    .f_s(44);
    .padding(0,0,0,20); 
  }
}
</style>
