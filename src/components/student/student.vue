<template>
  <div class="studentContainer">
    <div class="leftBox">
      <div class="info">
        <div class="portrait"></div>
        <div class="studentInfo"></div>
      </div>
      <div class="menu"></div>
    </div>
    <div class="contentBox"></div>
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
  .studentContainer {
    width: 100%;
    height: 500px;
    background-color: #f1f1f1;
    text-align: center;
    .leftBox {
      margin: auto;
      padding-top: 150px;
      .info {
        background: #fff;
        width: 300px;
        height: 180px;
        text-align: left;
      }

    }
  }
</style>
