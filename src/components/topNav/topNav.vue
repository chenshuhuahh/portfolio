<template>
  <div>
    <nav class="topNav">
      <div class="mainContainer">
        <div class="logo">logo</div>
        <ul class="actionMenu">
          <li class="signUp"><a href="">Sign Up</a></li>
          <li class="logIn"><a href="">Log In</a></li>
          <li class="foldMenu" @click="toggleMenu" :class="{active: isShowMobileMenu}"><i class="el-icon-minus"></i></li>
        </ul>
        <ul class="mainMenu">
          <li><a href="" class="active">概述</a></li>
          <li><a href="">作品栏</a></li>
          <li><a href="">学生/企业</a></li>
        </ul>
      </div>
    </nav>
    <transition name="fold">
      <nav class="mobileMenu" v-show="isShowMobileMenu">
        <ul>
          <li><a href="" class="active">概述</a></li>
          <li><a href="">作品栏</a></li>
          <li><a href="">学生/企业</a></li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isShowMobileMenu: false
      };
    },
    methods: {
      toggleMenu() {
        this.isShowMobileMenu = !this.isShowMobileMenu;
        if (this.isShowMobileMenu) {
          this.$refs.foldMenu.style.color = '#44b2e2';
        }
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .topNav {
    font-size: 14px;
    background-color: #27272b;
    padding: 18px 0 16px;
    -webkit-box-shadow: 0 7px 47px -10px rgba(0, 0, 0, .75);
    -moz-box-shadow: 0 7px 47px -10px rgba(0, 0, 0, .75);
    box-shadow: 0 7px 47px -10px rgba(0, 0, 0, .75);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 200;
    color: #fff;
    ul {
      list-style: none;
    }
    .mainContainer {
      max-width: 100%;
      margin: 0 auto;
      .logo {
        width: 100px;
        height: 20px;
        float: left;
        margin-left: 20px;
        background: #f82d2d;
      }
      .actionMenu {
        float: right;
        margin: 0 5px 0 0;
        li {
          display: block;
          float: left;
          color: gray;
          text-transform: uppercase;
          padding: 0 10px;
          border-left: 1px solid gray;
          &:first-child {
            border: none;
          }
          &:last-child {
            display: block;
          }
          &.active {
            color: #44b2e2;
          }
          a {
            text-decoration: none;
            color: #bebebe;
          }
        }
        .logIn {
          padding-left: 7px;
        }
      }
      .mainMenu {
        display: none;
      }
    }
  }

  .mobileMenu {
    z-index: 100;
    width: 132px;
    height: 100%;
    background-color: #27272b;
    position: fixed;
    right: -210px;
    top: 55px;
    transform: translate3d(-150%, 0, 0);
    &.fold-enter-active, &.fold-leave-active {
      transition: all 0.8s;
    }
    &.fold-enter, &.fold-leave-active{
      transform: translate3d(0, 0, 0);
    }
    ul {
      padding: 20px;
      font-size: 12px;
      li {
        display: block;
        padding-bottom: 27px;
        a {
          text-decoration: none;
          color: gray;
          padding-bottom: 5px;
          &.active {
            color: #bebebe;
            border-bottom: 2px solid #44b2e2;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .topNav {
      .mainContainer {
        .actionMenu {
          margin: 0 20px 0 0;
          li {
            &:last-child {
              display: none;
            }
            a {
              &:hover {
                color: #44b2e2;
              }
            }
          }
        }
        .mainMenu {
          display: block;
          text-align: center;
          margin: 3px 0 0;
          li {
            display: inline;
            padding-right: 27px;
            text-transform: uppercase;
            a {
              text-decoration: none;
              color: gray;
              padding-bottom: 6px;
              &:hover {
                color: #bebebe;
              }
              &.active {
                color: #bebebe;
                border-bottom: 2px solid #44b2e2;
              }
            }
          }
        }
      }
    }
  }
</style>
