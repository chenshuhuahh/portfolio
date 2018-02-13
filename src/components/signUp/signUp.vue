<template>
  <div class="signUpSection">
    <div class="signUpBlock"></div>
    <h2>Choose Your Role</h2>
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
  .signUpSection {
    width: 100%;
    height: 100%;
    margin:0 auto;
    background-image: url(bg03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &:after {
      content: "";
      display: block;
      /*这里的padding =  height / width*/
      padding: 87% 50%;
    }
    .signUpBlock {
    }
  }
</style>
