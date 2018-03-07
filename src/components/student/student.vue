<template>
  <div class="studentContainer">
    <stuLeftBox></stuLeftBox>
    <stuContentBox></stuContentBox>
  </div>
</template>

<script type="text/ecmascript-6">
  import stuLeftBox from './stuLeftBox';
  import stuContentBox from './stuContentBox';
  export default {
    data () {
      return {};
    },
    components: {
      stuLeftBox,
      stuContentBox
    }
  };
</script>

<style lang="scss" type="text/scss">
  .studentContainer {
    width: 100%;
    height: 100%;
    padding-top: 60px;
    background-color: #f1f1f1;
    text-align: center;
  }
  @media (min-width: 768px) {
    .studentContainer {
      position: relative;

      padding-top: 100px;
      padding-bottom: 80px;
    }
  }
</style>
