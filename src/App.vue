<template>
  <div id="app">
    <topNav></topNav>
    <summary-section></summary-section>
  </div>
</template>

<script type="text/ecmascript-6">
import topNav from './components/topNav/topNav';
import summarySection from './components/summary/summary';
export default {
  name: 'App',
  components: {
    topNav,
    summarySection
  }
};
</script>

<style lang="scss" type="text/css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
