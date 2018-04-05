<template>
  <div>
    <nav class="topNav">
      <div class="mainContainer">
        <div class="foldMenu" @click="toggleMenu">
          <i class="el-icon-more" v-show="!isShowMobileMenu"></i>
          <i class="el-icon-close" v-show="isShowMobileMenu"></i>
        </div>
        <div class="foldActionMenu" @click="toggleActionMenu">
          <i class="icon-smile" v-show="!isShowMobileActionMenu"></i>
          <i class="el-icon-close" v-show="isShowMobileActionMenu"></i>
        </div>
        <div class="logo"></div>
        <ul class="actionMenu">
          <li class="signUp" v-show="!isRole">
            <router-link to="/signUp">Sign Up</router-link>
          </li>
          <li class="logIn" v-show="!isRole">
            <router-link to="/logIn">Log In</router-link>
          </li>
          <li class="logout" @click="logOut" v-show="isRole">注销</li>
        </ul>
        <ul class="mainMenu">
          <li>
            <router-link to="/summary">概述</router-link>
          </li>
          <li>
            <router-link to="/workShow">作品栏</router-link>
          </li>
          <li v-show="isRole">
            <router-link :to="userLink">{{userRole}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="foldLeft">
      <nav class="mobileMenu" v-show="isShowMobileMenu">
        <ul>
          <li @click="toggleMenu">
            <router-link to="/summary">概述</router-link>
          </li>
          <li @click="toggleMenu">
            <router-link to="/workShow">作品栏</router-link>
          </li>
          <li @click="toggleMenu" v-show="isRole">
            <router-link :to="userLink">{{userRole}}</router-link>
          </li>
        </ul>
      </nav>
    </transition>
    <transition name="foldRight">
      <nav class="mobileActionMenu" v-show="isShowMobileActionMenu">
        <ul>
          <li @click="toggleActionMenu" v-show="!isRole">
            <router-link to="/signUp">Sign Up</router-link>
          </li>
          <li @click="toggleActionMenu" v-show="!isRole">
            <router-link to="/logIn">Log In</router-link>
            >
          </li>
          <li class="logout" @click="logOut" v-show="isRole">注销</li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getCookie, delCookie} from '../../assets/js/cookie.js';
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
      },
      logOut() {
        this.$confirm('是否退出登录?', '注销', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '用户账号已注销!'
          });
          this.$router.push('/summary');
          if (getCookie('stuEmail')) {
            this.$store.state.isRole = false;
            delCookie('stuEmail');
          }
          if (getCookie('comEmail')) {
            this.$store.state.isRole = false;
            delCookie('comEmail');
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出登录操作'
          });
        });
      }
    },
    mounted() {
      /* 页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录 */
      if (getCookie('stuEmail')) {
        this.$store.state.isRole = true;
        this.$store.state.userRole = '学生';
        this.$store.state.userLink = '/student/stuInfoBox';
      }
      if (getCookie('comEmail')) {
        this.$store.state.isRole = true;
        this.$store.state.userRole = '企业';
        this.$store.state.userLink = '/company/comInfoBox';
      }
    },
    computed: {
      userRole() {
        return this.$store.state.userRole;
      },
      userLink() {
        return this.$store.state.userLink;
      },
      isRole() {
        return this.$store.state.isRole;
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .topNav {
    font-size: 14px;
    background-color: rgba(0, 0, 0, .6);
    -webkit-box-shadow: 0 7px 47px -10px rgba(0, 0, 0, .5);
    -moz-box-shadow: 0 7px 47px -10px rgba(0, 0, 0, .5);
    box-shadow: 0 7px 47px -10px rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 200;
    color: #fff;
    .el-message-box {
      width: 295px !important;
    }
    ul {
      list-style: none;
    }
    .mainContainer {
      max-width: 100%;
      margin: 0 auto;
      .foldMenu {
        float: left;
        margin-left: 20px;
        padding: 18px 0 16px;
        img {
          width: 25px;
          height: 16px;
        }
        i {
          font-size: 25px;
          &:last-child {
            color: #44b2e2;
          }
        }
      }
      .logo {
        width: 50px;
        height: 59px;
        margin: 0 auto;
        background-image: url('http://p6c2yqflv.bkt.clouddn.com/staticImg/logo2.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .foldActionMenu {
        float: right;
        margin-right: 20px;
        padding: 18px 0 16px;
        img {
          width: 25px;
          height: 16px;
        }
        i {
          font-size: 25px;
          &:last-child {
            color: #44b2e2;
          }
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
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 55px;
    transform: translate3d(0, 0, 0);
    &.foldLeft-enter-active, &.foldLeft-leave-active {
      transition: all 0.8s;
    }
    &.foldLeft-enter, &.foldLeft-leave-active {
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
          color: #bebebe;
          padding-bottom: 5px;
          &.active {
            color: #fff;
            border-bottom: 2px solid #44b2e2;
          }
        }
      }
    }
  }

  .mobileActionMenu {
    z-index: 100;
    width: 132px;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    right: -210px;
    top: 55px;
    transform: translate3d(-150%, 0, 0);
    &.foldRight-enter-active, &.foldRight-leave-active {
      transition: all 0.8s;
    }
    &.foldRight-enter, &.foldRight-leave-active {
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
      .logout {
        cursor: pointer;
        color: #44b2e2;
      }
    }
  }

  @media (min-width: 768px) {
    .topNav {
      background-color: rgba(0, 0, 0, .5);
      .mainContainer {
        .foldMenu {
          display: none;
        }
        .logo {
          float: left;
          width: 200px;
          height: 45px;
          background-image: url('http://p6c2yqflv.bkt.clouddn.com/staticImg/logo1.png');
        }
        .foldActionMenu {
          display: none;
        }
        .actionMenu {
          display: block;
          float: right;
          margin: 0 5px 0 0;
          padding: 18px 0 16px;
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
          .logout {
            cursor: pointer;
            color: #44b2e2;
          }
        }
        .mainMenu {
          display: block;
          text-align: center;
          margin: 3px 0 0;
          padding: 18px 0 16px;
          li {
            display: inline;
            padding-right: 27px;
            text-transform: uppercase;
            & a {
              text-decoration: none;
              color: #bebebe;
              padding-bottom: 6px;
              &:hover {
                color: #fff;
              }
              &.active {
                color: #fff;
                border-bottom: 2px solid #44b2e2;
              }
            }
          }
        }
      }
    }
  }
</style>
