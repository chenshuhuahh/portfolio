<template>
  <div class="bothContentBox">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    }
  };
</script>

<style lang="scss" type="text/scss">
  @media (min-width: 768px) {
    .bothContentBox {
      height: 100%;
      margin-left: 350px;
      margin-right: 50px;
    }
  }
</style>
