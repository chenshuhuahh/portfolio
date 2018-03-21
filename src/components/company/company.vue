<template>
  <div class="companyContainer">
    <comLeftBox></comLeftBox>
    <bothContentBox></bothContentBox>
  </div>
</template>

<script type="text/ecmascript-6">
  import comLeftBox from './comLeftBox';
  import bothContentBox from '../bothContentBox/bothContentBox';
  export default {
    data () {
      return {};
    },
    components: {
      comLeftBox,
      bothContentBox
    }
  };
</script>

<style lang="scss" type="text/scss">
  .companyContainer {
    width: 100%;
    height: 100%;
    padding-top: 60px;
    background-color: #f1f1f1;
    text-align: center;
  }
  @media (min-width: 768px) {
    .companyContainer {
      position: relative;
      padding-top: 100px;
      padding-bottom: 80px;
    }
  }
</style>
