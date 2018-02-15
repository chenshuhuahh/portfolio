<template>
  <div>
    <section class="topBlock" :style="{backgroundPositionY: '-' + topBlockPosition/3 + 'px'}">
      <div class="mainContainer">
        <h1>Grow Your Brand,<br/>Get Published.</h1>
        <div class="buttonGroup">
          <div class="buttonG viewButton"><router-link to="/workShow">立即欣赏</router-link></div>
          <div class="buttonG startButton"><router-link to="/signUp">开始使用</router-link></div>
        </div>
      </div>
      <div class="plexus" :style="{marginTop: topBlockPosition/5 + 'px'}"></div>
    </section>
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
      margin-top: 185px;
      color: #fff;
      h1 {
        text-align: center;
        font-size: 49px;
        font-weight: 700;
        line-height: 115%;
        margin-bottom: 20px;
      }
      .buttonGroup {
        width: 100%;
        text-align: center;
        .buttonG {
          display: inline-block;
          text-align: center;
          padding-top: 12px;
          cursor: pointer;
          width: 150px;
          height: 28px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          a {
            color: #fff;
          }
        }
        .viewButton {
          border: 2px solid #fff;
          margin-right: 10px;
        }
        .startButton {
          width: 152px;
          background: #44b2e2;
          border: 2px solid #47bbed;
        }
      }
    }
    .plexus {
      background-image: url(plexus.png);
      width: 100%;
      height: 281px;
      background-repeat: no-repeat;
    }
  }
  @media (min-width: 768px) {
    .topBlock {
      background-position-x: 50%;
      .mainContainer {
        margin-top: 165px;
        h1 {
          font-size: 55px;
        }
        .buttonGroup {
          .buttonG {
            width: 180px;
          }
          .startButton {
            width: 182px;
          }
        }
      }
    }
  }
</style>
