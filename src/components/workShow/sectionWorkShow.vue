<template>
  <div class="sectionWorkShow">
    <div class="text">
      <h3>{{$route.params.dataObj}}作品</h3>
      <p>在Portfolio展示的优秀作品</p>
      <div class="puzzleIcon"></div>
    </div>
    <div class="sectionItemContainer">
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
        photoIntroduction: [
          {
            id: 1,
            imgSrc: '../static/img/6.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
          },
          {
            id: 2,
            imgSrc: '../static/img/9.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
          },
          {
            id: 3,
            imgSrc: '../static/img/6.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
          },
          {
            id: 4,
            imgSrc: '../static/img/9.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
          },
          {
            id: 5,
            imgSrc: '../static/img/9.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
          },
          {
            id: 6,
            imgSrc: '../static/img/6.jpg',
            workTitle: '卡通恶搞造型',
            studentName: '雷神索尔'
          }
        ]
      };
    },
    components: {
      sectionPhotoCard
    }
  };
</script>

<style lang="scss" type="text/scss">
  .sectionWorkShow {
    margin-top: 40px;
    text-align: center;
    color: #808184;
    .text {
      h3 {
        font-size: 36px;
        padding: 60px 0 10px;
      }
      p {
        margin-bottom: 10px;
        font-size: 14px;
      }
      .puzzleIcon {
        width: 50px;
        height: 50px;
        margin: auto;
        background-image: url(./puzzle.png);
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
      .sectionItemContainer {
        text-align: left;
        .itemCard {
          display: inline-block;
        }

      }
    }
  }
</style>
