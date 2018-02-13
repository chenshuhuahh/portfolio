<template>
  <div>
    <nav class="topNav">
      <div class="mainContainer">
        <div class="foldMenu" @click="toggleMenu">
          <img src="./hamburger.png" alt="" v-show="!isShowMobileMenu">
          <i class="el-icon-close" v-show="isShowMobileMenu"></i>
        </div>
        <div class="foldActionMenu" @click="toggleActionMenu">
          <img src="./hamburger.png" alt="" v-show="!isShowMobileActionMenu">
          <i class="el-icon-close" v-show="isShowMobileActionMenu"></i>
        </div>
        <div class="logo">logo</div>
        <ul class="actionMenu">
          <li class="signUp"><router-link to="/signUp">Sign Up</router-link></li>
          <li class="logIn"><a href="">Log In</a></li>
        </ul>
        <ul class="mainMenu">
          <li><router-link to="/summary">概述</router-link></li>
          <li><a href="">作品栏</a></li>
          <li><a href="">学生/企业</a></li>
        </ul>
      </div>
    </nav>
    <transition name="foldLeft">
      <nav class="mobileMenu" v-show="isShowMobileMenu">
        <ul>
          <li @click="toggleMenu"><router-link to="/summary">概述</router-link></li>
          <li><a href="">作品栏</a></li>
          <li><a href="">学生/企业</a></li>
        </ul>
      </nav>
    </transition>
    <transition name="foldRight">
      <nav class="mobileActionMenu" v-show="isShowMobileActionMenu">
        <ul>
          <li @click="toggleActionMenu"><router-link to="/signUp">Sign Up</router-link></li>
          <li><a href="">Log In</a></li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isShowMobileMenu: false,
        isShowMobileActionMenu: false
      };
    },
    methods: {
      toggleMenu() {
        this.isShowMobileMenu = !this.isShowMobileMenu;
        if (this.isShowMobileActionMenu) {
          this.isShowMobileActionMenu = false;
        }
      },
      toggleActionMenu() {
        this.isShowMobileActionMenu = !this.isShowMobileActionMenu;
        if (this.isShowMobileMenu) {
          this.isShowMobileMenu = false;
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
      .foldMenu {
        float: left;
        margin-left: 20px;
        img {
          width: 25px;
          height: 16px;
        }
        i {
          font-size: 20px;
          color: #44b2e2;
        }
      }
      .logo {
        width: 100px;
        height: 20px;
        background: #f82d2d;
        margin: 0 auto;
      }
      .foldActionMenu {
        float: right;
        margin-right: 20px;
        img {
          width: 25px;
          height: 16px;
        }
        i {
          font-size: 20px;
          color: #44b2e2;
        }
      }
      .actionMenu,
      .mainMenu {
        display: none;
      }
    }
  }

  .mobileMenu {
    z-index: 100;
    width: 132px;
    background-color: #27272b;
    position: fixed;
    left: 0;
    top: 55px;
    transform: translate3d(0, 0, 0);
    &.foldLeft-enter-active, &.foldLeft-leave-active {
      transition: all 0.8s;
    }
    &.foldLeft-enter, &.foldLeft-leave-active{
      transform: translate3d(-150%, 0, 0);
    }
    ul {
      padding: 20px 20px 0;
      font-size: 14px;
      li {
        display: block;
        padding-bottom: 27px;
        & a {
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
  .mobileActionMenu {
    z-index: 100;
    width: 132px;
    background-color: #27272b;
    position: fixed;
    right: -210px;
    top: 55px;
    transform: translate3d(-150%, 0, 0);
    &.foldRight-enter-active, &.foldRight-leave-active {
      transition: all 0.8s;
    }
    &.foldRight-enter, &.foldRight-leave-active{
      transform: translate3d(0, 0, 0);
    }
    ul {
      padding: 20px 20px 0;
      font-size: 15px;
      li {
        display: block;
        padding-bottom: 27px;
        & a {
          text-decoration: none;
          color: #bebebe;
          padding-bottom: 5px;
          &.active {
            color: #44b2e2;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .topNav {
      .mainContainer {
        .foldMenu {
          display: none;
        }
        .logo {
          float: left;
          margin-left: 20px;
        }
        .foldActionMenu {
          display: none;
        }
        .actionMenu {
          display: block;
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
            & a {
              text-decoration: none;
              color: #bebebe;
              &.active {
                color: #44b2e2;
              }
            }
          }
          .logIn {
            padding-left: 7px;
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
            & a {
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
