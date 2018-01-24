<template>
  <section class="topBlock" ref="topBlockSec" :style="{backgroundPosition: '50% -'+ topBlockPosition/2 + 'px'}">
    <div>nihao</div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      topBlockPosition: 0
    };
  },
  methods: {
    getTopBlock() {
      this.topBlockPosition = document.body.scrollTop;
    }
  },
  created() {
    window.addEventListener('scroll', this.getTopBlock);
  }
};
</script>

<style lang="scss" type="text/scss">
.topBlock {
  margin-top: 50px;
  height: 640px;
  background-image: url(bg01.jpg);
  background-position: center bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  div {
    margin-top: 80px;
    margin-bottom: 0px;
  }
}
</style>
