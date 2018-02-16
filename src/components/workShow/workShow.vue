<template>
  <div class="workShowSection">
    <div class="selectMenu">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false" v-show="isCollapse"><i class="el-icon-arrow-down"></i></el-radio-button>
        <el-radio-button :label="true" v-show="!isCollapse"><i class="el-icon-arrow-up"></i></el-radio-button>
      </el-radio-group>
      <el-menu class="el-menu-vertical" :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="icon-camera"></i>
          <span slot="title">小摄影师</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="icon-ruler"></i>
          <span slot="title">小设计师</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="icon-pen"></i>
          <span slot="title">小作家</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="icon-coder"></i>
          <span slot="title">小程序员</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="workMain">
      <section class="photos">
        <div class="text">
          <h4>摄影作品</h4>
          <p>more</p>
        </div>
        <div class="itemContainer">
          <div class="imageContainer">
            <img src="./6.jpg" alt="">
          </div>
          <div class="imageContainer">
            <img src="./9.jpg" alt="">
          </div>
        </div>
      </section>
      <section class="designer">
        <div class="text">
          <h4>设计作品</h4>
          <p>more</p>
        </div>
        <div class="itemContainer">
          <div class="imageContainer">
            <img src="./6.jpg" alt="">
          </div>
          <div class="imageContainer">
            <img src="./9.jpg" alt="">
          </div>
        </div>
      </section>
      <section class="articles">
        <div class="text">
          <h4>文章作品</h4>
          <p>more</p>
        </div>
        <div class="itemContainer">
          <div class="imageContainer">
            <img src="./6.jpg" alt="">
          </div>
          <div class="imageContainer">
            <img src="./9.jpg" alt="">
          </div>
        </div>
      </section>
      <section class="coder">
        <div class="text">
          <h4>程序作品</h4>
          <p>more</p>
        </div>
        <div class="itemContainer">
          <div class="imageContainer">
            <img src="./6.jpg" alt="">
            <div class="introduction">
              <h3 class="studentName">雷神索尔</h3>
              <span class="workTitle">卡通恶搞造型</span>
              <div class="iconLink"><a href="#"><i class="el-icon-view"></i></a></div>
            </div>
          </div>
          <div class="imageContainer">
            <img src="./9.jpg" alt="">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isCollapse: true
      };
    }
  };
</script>

<style lang="scss" type="text/scss">
  body {
    background-color: #fff;
  }
  .workShowSection {
    margin-top: 62px;
    .selectMenu {
      position: fixed;
      .el-menu-vertical:not(.el-menu--collapse) {
        width: 170px;
        min-height: 235px;
        z-index: 999;
        .el-menu-item {
          span {
            margin-left: 5px;
          }
        }
      }
      .el-menu-vertical {
        .el-menu-item {
          i {
            font-size: 21px;
          }
        }
      }
    }
    .workMain {
      margin-left: 80px;
      section {
        padding: 55px;
        .text {
          padding: 10px 20px;
          border-bottom: 1px solid #0a6999;
          h4 {
            display: inline-block;
          }
          p {
            float: right;
          }
        }
        .itemContainer {
          .imageContainer {
            height: 250px;
            margin: 10px 5px;
            display: inline-block;
            -webkit-box-shadow: 0 2px 13px 1px rgba(0,0,0,.25);
            -moz-box-shadow: 0 2px 13px 1px rgba(0,0,0,.25);
            box-shadow: 0 2px 13px 1px rgba(0,0,0,.25);
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
              transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
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
              padding: 14px 18px;
              color: #fff;
              position: absolute;
              top: 38%;
              left: 0;
              .studentName {
                font-size: 25px;
                font-weight: 600;
                line-height: 30px;
                text-transform: uppercase;
                margin: 0;
                opacity: 0;
                transition: all 0.5s ease 0s;
              }
              .workTitle{
                font-size: 15px;
                text-transform: capitalize;
                opacity: 0;
                transition: all 0.5s ease 0s;
              }
              .iconLink {
                width: 40px;
                height: 40px;
                line-height: 40px;
                border-radius: 50%;
                background: #f74e55;
                font-size: 20px;
                font-weight: 700;
                color: #fff;
                margin-right: 5px;
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
