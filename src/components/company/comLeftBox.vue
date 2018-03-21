<template>
  <div class="comLeftBox">
    <div class="info">
      <div class="portrait">
        <img src="./18.jpg" />
      </div>
      <div class="companyInfo">
        <div class="cName">有道翻译科技有限公司</div>
        <div class="cBoss">张三</div>
      </div>
    </div>
    <div class="menu">
      <ul class="menu-ul">
        <router-link class="menu-link" to="/company/comInfoBox" tag="li">
          <i class="el-icon-edit-outline"></i>
          <span>信息完善</span>
        </router-link>
        <router-link class="menu-link" to="/company/comInfoModify" tag="li">
          <i class="el-icon-menu"></i>
          <span>信息修改</span>
        </router-link>
        <router-link class="menu-link" to="/company/comFavoriteWork" tag="li">
          <i class="icon-heart"></i>
          <span>作品收藏</span>
        </router-link>
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
  .comLeftBox {
    .info {
      background: #fff;
      width: 100%;
      height: 190px;
      text-align: center;
      .portrait {
        padding-top: 20px;
        img {
          width: 80px;
          height: 80px;
          -webkit-border-radius: 40px;
          -moz-border-radius: 40px;
          -ms-border-radius: 40px;
          -o-border-radius: 40px;
          border-radius: 40px;
        }
      }
      .companyInfo {
        margin-top: 14px;
        .cName {
          display: inline-block;
          margin: 14px 10px;
          width: 100%;
        }
      }
    }
    .menu {
      background: #fff;
      width: 100%;
      height: 100%;
      margin: 15px 0;
      text-align: center;
      color: #737373;
      .menu-ul {
        display: flex;
        .menu-link {
          display: inline-block;
          flex: 1;
          list-style-type: none;
          height: 60px;
          cursor: pointer;
          line-height: 60px;
          transition: all .4s;
          &.router-link-exact-active {
            font-weight: bold;
            color: #353535;
            background: #DCF9F5;
          }
          i {
            vertical-align: middle;
            font-size: 23px;
          }
          span {
            display: none;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    .comLeftBox {
      position: absolute;
      top: 100px;
      left: 50px;
      .info {
        width: 275px;
        height: 170px;
        text-align: left;
        .portrait {
          display: inline-block;
          overflow: hidden;
          padding: 40px 18px 0 15px;
        }
        .companyInfo {
          display: inline-block;
          margin: 30px 0 0;
          vertical-align: top;
          .cName {
            display: block;
            margin: 14px 0;
            width: 135px;
            line-height: 20px;
          }
        }
      }
      .menu {
        width: 275px;
        height: 647px;
        text-align: left;
        .menu-ul {
          display: block;
          padding: 0;
          margin: 0;
          .menu-link {
            display: block;
            padding: 0 0 0 25px;
            i {
              vertical-align: text-top;
              font-size: 16px;
            }
            span {
              display: inline;
            }
          }
        }
      }
    }
  }
</style>
