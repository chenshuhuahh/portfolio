<template>
  <div class="sectionWorkShow">
    <el-input
      placeholder="请输入搜索内容"
      suffix-icon="el-icon-search"
      v-model="searchWork"
      @keyup.enter.native="handleSearch">
    </el-input>
    <div class="text">
      <h3>{{$route.params.workType}}作品</h3>
      <p>在Portfolio展示的优秀作品</p>
      <div class="puzzleIcon"></div>
    </div>
    <div class="searchWrong" v-if="!isSearchSomething">
      <img src="http://p6c2yqflv.bkt.clouddn.com/staticImg/timg.gif">
      <div class="wrongText"><span class="el-icon-warning"></span>&nbsp;抱歉 没搜索到您想要的作品</div>
    </div>
    <div class="sectionItemContainer" v-if="isSearchSomething">
      <div v-for="item in photoIntroduction" class="itemCard" :key="item.id">
        <sectionPhotoCard :item="item"></sectionPhotoCard>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import sectionPhotoCard from './sectionPhotoCard.vue';
  export default {
    data () {
      return {
        searchWork: '',
        photoIntroduction: [],
        workTypeId: '',
        isSearchSomething: true
      };
    },
    components: {
      sectionPhotoCard
    },
    methods: {
      handleSearch() {
        this.photoIntroduction = [];
        if (this.searchWork) {
          // 做搜索的时候，是对当前这个分块后的部分进行搜索，得到的结果更新photoIntroduction数组
          console.log(this.searchWork);
          let params = new URLSearchParams();
          params.append('action', 'searchWorks');
          params.append('searchContent', this.searchWork);
          params.append('workTypeId', this.workTypeId);
          this.$ajax.post('/api/workShowBox.php', params)
            .then((res) => {
              console.log('searchList', res.data);
              if (res.data === 0) {
                  this.isSearchSomething = false;
              } else {
                this.isSearchSomething = true;
                this.photoIntroduction = res.data;
              }
            });
        } else {
          this.$message('请输入搜索内容');
          return false;
        }
      }
    },
    mounted() {
      this.photoIntroduction = this.$route.params.workList;
      this.workTypeId = this.$route.params.workTypeId;
    }
  };
</script>

<style lang="scss" type="text/scss">
  .sectionWorkShow {
    margin-top: 50px;
    text-align: center;
    color: #808184;
    .el-input {
      margin-top: 20px;
      width: 300px;
    }
    .searchWrong {
      text-align: center;
      font-size: 15px;
      color: #d8703f;
    }
    .text {
      text-align: center;
      h3 {

        font-size: 36px;
        padding: 10px 0 10px;
      }
      p {
        margin-bottom: 10px;
        font-size: 14px;
      }
      .puzzleIcon {
        width: 50px;
        height: 50px;
        margin: auto;
        background-image: url('http://p6c2yqflv.bkt.clouddn.com/staticImg/puzzle.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .sectionItemContainer {
      text-align: center;
      .itemCard {
        display: block;
      }

    }
  }

  @media (min-width: 768px) {
    .sectionWorkShow {
      margin: 50px 10%;
      width: 80%;
      text-align: right;
      .searchWrong {
        font-size: 18px;
      }
      .sectionItemContainer {
        text-align: left;
        .itemCard {
          display: inline-block;
        }

      }
    }
  }
</style>
