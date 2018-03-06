<template>
  <div class="stuLeftBox">
    <div class="info">
      <div class="portrait">
        <img src="./18.jpg" width="80" height="80" />
      </div>
      <div class="studentInfo">
        <div class="sName">chen</div>
        <div class="sSchool">college</div>
        <div class="sLoveNum">555</div>
      </div>
    </div>
    <div class="menu">
      <ul class="menu-ul">
        <router-link class="menu-link" to="/student/stuInfoBox" tag="li">信息完善</router-link>
        <router-link class="menu-link" to="/student/stuWorkUploadBox" tag="li">作品上传</router-link>
        <router-link class="menu-link" to="/student/stuWorkShowBox" tag="li">作品展示</router-link>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    }
  };
</script>

<style lang="scss" type="text/scss">
  .stuLeftBox {
    position: absolute;
    top: 100px;
    left: 50px;
    .info {
      background: #fff;
      width: 300px;
      height: 170px;
      text-align: left;
      .portrait {
        display: inline-block;
        width: 80px;
        height: 80px;
        overflow: hidden;
        padding: 40px 18px 0 15px;
        img {
          -webkit-border-radius: 40px;
          -moz-border-radius: 40px;
          -ms-border-radius: 40px;
          -o-border-radius: 40px;
          border-radius: 40px;
        }
      }
      .studentInfo {
        display: inline-block;
        margin: 38px 0 0;
        vertical-align: top;
        .sName {
          font-size: 20px;
        }
        .sSchool, .sLoveNum {
          margin-top: 14px;
        }
      }
    }
    .menu {
      background: #fff;
      width: 300px;
      height: 647px;
      margin-top: 15px;
      text-align: left;
      color: #737373;
      .menu-ul {
        padding: 0;
        margin: 0;
        .menu-link {
          list-style-type: none;
          height: 60px;
          cursor: pointer;
          line-height: 60px;
          padding: 0 0 0 25px;
          transition: all .4s;
          &.router-link-exact-active {
            font-weight: bold;
            color: #353535;
            background: #DCF9F5;
          }
        }
      }
    }
  }
</style>
