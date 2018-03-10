<template>
  <div id="app">
    <topNav></topNav>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import topNav from './components/topNav/topNav';
export default {
  name: 'App',
  components: {
    topNav
  }
};
</script>

<style lang="scss" type="text/css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .el-cascader-menus {
    .is-active {
      color: #fff !important;
    }
  }
  /*.el-select-dropdown {
    .selected {
      color: #fff !important;
    }
  }*/
</style>
