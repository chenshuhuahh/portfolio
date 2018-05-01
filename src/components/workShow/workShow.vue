<template>
  <div class="workShowSection">
    <div class="selectMenu">
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
      <section class="photos" id="photos">
        <div class="text">
          <h4>摄影作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '摄影', workList: photosList}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in photosList" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="designs" id="designs">
        <div class="text">
          <h4>设计作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '设计', workList: designsList}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in designsList" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="articles" id="articles">
        <div class="text">
          <h4>文章作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '文章', workList: articlesList}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in articlesList" class="itemCard" :key="item.id">
            <photoCard :item="item"></photoCard>
          </div>
        </div>
      </section>
      <section class="programs" id="programs">
        <div class="text">
          <h4>程序作品</h4>
          <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: '程序', workList: programsList}}"
          >
            <i class="el-icon-d-arrow-right"></i>
          </router-link>
        </div>
        <div class="stripeBox"></div>
        <div class="itemContainer">
          <div v-for="item in programsList" class="itemCard" :key="item.id">
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
        photosList: [],
        designsList: [],
        articlesList: [],
        programsList: []
      };
    },
    components: {
      photoCard
    },
    mounted() {
      let params = new URLSearchParams();
      params.append('action', 'workListShow');
      this.$ajax.post('/api/workShowBox.php', params)
        .then((res) => {
          console.log('workShowBox res:', res);
          this.photosList = res.data[0];
          this.designsList = res.data[1];
          this.articlesList = res.data[2];
          this.programsList = res.data[3];
        });
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
          background: linear-gradient(-45deg, #C0C0C0 12.5%, #fff 0, #fff 25%, #D3D3D3 0, #D3D3D3 37.5%,
            #fff 0, #fff 50%, #C0C0C0 0, #C0C0C0 62.5%, #fff 0, #FFF 75%, #D3D3D3 0, #D3D3D3 87.5%, #FFF 0);
          background-size:60px 60px;
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
