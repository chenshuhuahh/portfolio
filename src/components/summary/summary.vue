<template>
  <div>
    <section class="topBlock" ref="topBlockSec" :style="{backgroundPositionY: '-' + topBlockPosition/3 + 'px'}">
      <div class="mainContainer">
        <h1>Grow Your Brand,<br/>Get Published.</h1>
      </div>
    </section>
    <section class="smallBlock">
      <span>今天就开始创建您的免费在线作品展示网站。</span>
      <div class="button">立即开始</div>
    </section>
    <section class="nicheBlock"></section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      topBlockPosition: 0
    };
  },
  methods: {
    getTopBlock() {
      this.topBlockPosition = document.body.scrollTop;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getTopBlock);
  }
};
</script>

<style lang="scss" type="text/scss">
.topBlock {
  margin-top: 50px;
  height: 640px;
  background-image: url(bg01.jpg);
  background-position-x: 60%;
  background-position-y: bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  .mainContainer {
    margin-top: 165px;
    font-family: proxima_nova_rgregular,'Helvetica Neue',Helvetica,Arial,sans-serif;
    color: #fff;
    h1 {
      text-align: center;
      font-size: 55px;
      font-weight: 700;
      line-height: 115%;
    }
  }
}
.smallBlock {
  background-color: #27272b;
  text-align: center;
  color: gray;
  font-family: proxima_novasemibold,'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 14px;
  padding: 20px;
  span {
    color: #fff;
  }
  .button {
    display: inline-block;
    color: #44b2e2;
    margin-top: 10px;
    padding: 6px 12px;
    border: 1px solid #44b2e2;
    cursor: pointer;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
}
.nicheBlock {
  background-image: url(bg02.jpg);
  background-size: cover;
  background-position: top center;
  text-align: center;
  padding: 0 20px;
  height: 200px;
}

@media (min-width: 768px) {
  .topBlock {
    background-position-x: 50%;
  }
  .smallBlock {
    padding: 12px 20px;
    .button {
      margin-right: 10px;
    }
  }
}

</style>
