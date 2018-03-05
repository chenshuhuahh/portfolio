<template>
  <div>
    <section class="nicheBlock">
      <div class="niches clearfix">
        <div v-for="item in workType" class="block" :key="item.id">
          <router-link :to="item.linkTo">
          <img :src="item.imgSrc" alt="item.typeTitle">
          <div class="text">{{item.typeTitle}}</div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        workType: [
          {
            id: 1,
            linkTo: '/workShow',
            imgSrc: './static/img/photographers.jpg',
            typeTitle: '小摄影师'
          },
          {
            id: 2,
            linkTo: '/workShow',
            imgSrc: './static/img/architects.jpg',
            typeTitle: '小设计师'
          },
          {
            id: 3,
            linkTo: '/workShow',
            imgSrc: './static/img/writer.jpg',
            typeTitle: '小作家'
          },
          {
            id: 4,
            linkTo: '/workShow',
            imgSrc: './static/img/coder.jpg',
            typeTitle: '小程序员'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" type="text/scss">
  .nicheBlock {
    background-image: url(bg02.jpg);
    background-size: cover;
    background-position: top center;
    text-align: center;
    padding: 0 20px;
    .niches {
      max-width: 760px;
      margin: 0 auto;
      padding-bottom: 42px;
      .block {
        float: left;
        background-color: #27272b;
        padding: 10px 10px 7px;
        margin: 15px 1.5%;
        -webkit-box-shadow: 0 10px 24px -5px rgba(0, 0, 0, .6);
        box-shadow: 0 10px 24px -5px rgba(0, 0, 0, .6);
        img {
          width: 100%;
          -webkit-box-shadow: 0 10px 12px -7px rgba(0, 0, 0, .54);
          -moz-box-shadow: 0 10px 12px -7px rgba(0, 0, 0, .54);
          box-shadow: 0 10px 12px -7px rgba(0, 0, 0, .54);
        }
        .text {
          font-size: 14px;
          color: #fff;
          text-transform: uppercase;
          padding-top: 4px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .nicheBlock {
      .niches {
        max-width: 760px;
        margin: 0 auto;
        padding-bottom: 42px;
        .block {
          margin: 15px 3%;
          width: calc(44% - 20px);
        }
      }
    }
  }
</style>
