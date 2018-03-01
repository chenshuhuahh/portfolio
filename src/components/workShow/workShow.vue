<template>
  <div class="workShowSection">
    <div class="selectMenu">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false" v-show="isCollapse"><i class="el-icon-arrow-down"></i></el-radio-button>
        <el-radio-button :label="true" v-show="!isCollapse"><i class="el-icon-arrow-up"></i></el-radio-button>
      </el-radio-group>
      <el-menu class="el-menu-vertical" :collapse="isCollapse">
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
      <section class="photos" id="photos">
        <div class="text">
          <h4>摄影作品</h4>
          <p>more</p>
        </div>
        <div class="itemContainer">
          <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="designs" id="designs">
        <div class="text">
          <h4>设计作品</h4>
          <p>more</p>
        </div>
        <div class="itemContainer">
          <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="articles" id="articles">
        <div class="text">
          <h4>文章作品</h4>
          <p>more</p>
        </div>
        <div class="itemContainer">
          <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="programs" id="programs">
        <div class="text">
          <h4>程序作品</h4>
          <p>more</p>
        </div>
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
        isCollapse: true,
        photoIntroduction: [
          {
            id: 1,
            imgSrc: './static/img/6.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
          },
          {
            id: 2,
            imgSrc: './static/img/9.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
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
      position: fixed;
      z-index: 999;
      .el-menu-vertical:not(.el-menu--collapse) {
        width: 170px;
        min-height: 235px;
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
          .itemCard {
            display: inline-block;
          }
        }
      }
    }
  }
</style>
