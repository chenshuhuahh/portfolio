<template>
  <nav class="topNav">
    <div class="mainContainer">
      <div class="logo">logo</div>
      <ul class="actionMenu">
        <li class="signUp"><a href="">Sign Up</a></li>
        <li class="logIn"><a href="">Log In</a></li>
      </ul>
      <ul class="mainMenu">
        <li><a href="" class="active">概述</a></li>
        <li><a href="">作品栏</a></li>
        <li><a href="">学生/企业</a></li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {};
  }
};
</script>

<style lang="scss" type="text/scss">
.topNav {
  font-size: 14px;
  background-color: #27272b;
  padding: 18px 0 16px;
  -webkit-box-shadow: 0 7px 47px -10px rgba(0,0,0,.75);
  -moz-box-shadow: 0 7px 47px -10px rgba(0,0,0,.75);
  box-shadow: 0 7px 47px -10px rgba(0,0,0,.75);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  color: #fff;
  ul {
    list-style: none;
  }
}
.mainContainer {
  max-width: 100%;
  margin: 0 auto;
}
.logo {
  width: 100px;
  height: 20px;
  float: left;
  margin-left: 20px;
  background: #f82d2d;
}
.actionMenu {
  float: right;
  margin: 0 20px 0 0;
  li {
    display: block;
    float: left;
    color: gray;
    text-transform: uppercase;
    padding: 0 10px;
    border-right: 1px solid gray;
    a {
      text-decoration: none;
      color: #bebebe;
      &:hover {
        color: #44b2e2;
      }
    }
  }
  .logIn {
    padding-left: 7px;
  }
}
.mainMenu {
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
</style>
