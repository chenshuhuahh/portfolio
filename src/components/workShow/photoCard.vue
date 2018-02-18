<template>
  <div class="imageContainer" @mouseenter="isShow=true" @mouseleave="isShow=false">
    <img :src="item.imgSrc" alt="">
    <transition name="roll">
      <div class="introduction" v-show="isShow">
        <h3 class="workTitle">{{item.workTitle}}</h3>
        <span class="studentName">{{item.studentName}}</span>
        <div class="iconLink"><a href="#"><i class="el-icon-view"></i></a></div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      item: {
        type: Object
      }
    },
    data () {
      return {
        isShow: false
      };
    }
  };
</script>

<style lang="scss" type="text/scss">
  .imageContainer {
    height: 250px;
    margin: 10px 5px;
    display: inline-block;
    -webkit-box-shadow: 0 2px 13px 1px rgba(0, 0, 0, .25);
    -moz-box-shadow: 0 2px 13px 1px rgba(0, 0, 0, .25);
    box-shadow: 0 2px 13px 1px rgba(0, 0, 0, .25);
    text-align: center;
    overflow: hidden;
    position: relative;
    &:before {
      content: "";
      width: 0;
      height: 100%;
      background: #000;
      padding: 14px 18px;
      position: absolute;
      top: 0;
      left: 50%;
      opacity: 0;
      transition: all 600ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
    }
    &:hover:before {
      width: 100%;
      left: 0;
      opacity: 0.5;
    }
    img {
      margin: auto;
      height: auto;
      max-height: 100%;
      border-radius: 4px;
    }
    .introduction {
      width: 100%;
      color: #fff;
      position: absolute;
      top: 27%;
      left: 0;
      &.roll-enter-active, &.roll-leave-active {
        transition: all 0.8s ease;
        .studentName, .workTitle {
          opacity: 1;
          transition-delay: 0.7s;
        }
        .iconLink {
          opacity: 1;
          transform: translateY(0px);
          transition-delay: 0.7s;
        }
      }
      &.roll-enter, &.roll-leave-to {
        .studentName, .workTitle {
          opacity: 0;
          transition: all 0.5s ease 0s;
        }
        .iconLink {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.5s ease 0s;
        }
      }
      .workTitle {
        font-size: 25px;
        font-weight: 600;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .studentName {
        font-size: 15px;
        text-transform: capitalize;
      }
      .iconLink {
        margin-top: 10px;
        a {
          display: inline-block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          background: #f74e55;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-right: 5px;
        }
      }
    }
  }
</style>
