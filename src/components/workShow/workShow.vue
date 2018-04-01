<template>
  <div class="workShowSection">
    <div class="selectMenu">
      <!--      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
              <el-radio-button :label="false" v-show="isCollapse"><i class="el-icon-arrow-down"></i></el-radio-button>
              <el-radio-button :label="true" v-show="!isCollapse"><i class="el-icon-arrow-up"></i></el-radio-button>
            </el-radio-group>-->
      <el-menu class="el-menu-vertical" :collapse="true">
        <a href="#photos">
          <el-menu-item index="1">
            <i class="icon-camera"></i>
            <span slot="title">小摄影师</span>
          </el-menu-item>
        </a>
        <a href="#designs">
          <el-menu-item index="2">
            <i class="icon-ruler"></i>
            <span slot="title">小设计师</span>
          </el-menu-item>
        </a>
        <a href="#articles">
          <el-menu-item index="3">
            <i class="icon-pen"></i>
            <span slot="title">小作家</span>
          </el-menu-item>
        </a>
        <a href="#programs">
          <el-menu-item index="4">
            <i class="icon-coder"></i>
            <span slot="title">小程序员</span>
          </el-menu-item>
        </a>
      </el-menu>
    </div>
    <div class="workMain">
      <!--<section class="selectionBox">
        <el-input placeholder="请输入内容" v-model="selectBox" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="摄影作品" value="1"></el-option>
            <el-option label="设计作品" value="3"></el-option>
            <el-option label="文章作品" value="2"></el-option>
            <el-option label="程序作品" value="4"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </section>-->
      <section class="photos" id="photos">
        <div class="text">
          <h4>摄影作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '摄影'}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="designs" id="designs">
        <div class="text">
          <h4>设计作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '设计'}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="articles" id="articles">
        <div class="text">
          <h4>文章作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '文章'}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="programs" id="programs">
        <div class="text">
          <h4>程序作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '程序'}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import photoCard from './photoCard.vue';
  export default {
    data() {
      return {
        select: '',
        selectBox: '',
//        isCollapse: true,
        photoIntroduction: [
          {
            id: 1,
            imgSrc: '../static/img/6.jpg',
            workTitle: '卡通恶搞造型',
            workDesc: '身陈建安死哦车非常的成交出纳室',
            studentName: '雷神索尔1',
            loveNum: 10
          },
          {
            id: 2,
            imgSrc: '../static/img/9.jpg',
            workTitle: '恶搞造型',
            workDesc: '身陈建安死哦车非常的成交出纳室',
            studentName: '雷神索尔2',
            loveNum: 5
          }
        ]
      };
    },
    components: {
      photoCard
    }
  };
</script>

<style lang="scss" type="text/scss">
  .workShowSection {
    margin-top: 62px;
    .selectMenu {
      display: none;
    }
    .workMain {
      margin: 40px;
      /*.selectionBox {
        padding-bottom: 0;
        width: 500px;
        .el-select .el-input {
          width: 110px;
        }
        .input-with-select .el-input-group__prepend {
          background-color: #fff;
        }
      }*/
      section {
        padding: 30px 0;
        .text {
          padding: 10px;
          color: gray;
          h4 {
            display: inline-block;
          }
          a {
            float: right;
          }
        }
        .stripeBox {
          width: 100%;
          height: 8px;
          border-radius: 20px;
          background: linear-gradient(-45deg, #C0C0C0 16.7%, #D3D3D3 0, #D3D3D3 33.3%, #DCDCDC 0, #DCDCDC 50%, #C0C0C0 0, #C0C0C0 66.7%, #D3D3D3 0, #D3D3D3 83.5%, #DCDCDC 0);
          background-size:50px 50px;
        }
        .itemContainer {
          text-align: center;
          .itemCard {
            display: block;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .workShowSection {
      .selectMenu {
        display: block;
        margin-top: 50px;
        position: fixed;
        z-index: 999;
        /*.el-menu-vertical:not(.el-menu--collapse) {*/
        /*width: 170px;*/
        /*min-height: 235px;*/
        /*.el-menu-item {*/
        /*span {*/
        /*margin-left: 5px;*/
        /*}*/
        /*}*/
        /*}*/
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
          }
          .itemContainer {
            text-align: left;
            .itemCard {
              display: inline-block;
            }
          }
        }
      }
    }
  }
</style>
