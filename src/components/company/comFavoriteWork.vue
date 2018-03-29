<template>
  <div class="comFavoriteWork">
    <div class="worksGrid" v-for="item in photoIntroduction" :key="item.id">
      <comPhotoCard :item="item"></comPhotoCard>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import comPhotoCard from './comPhotoCard.vue';
  export default {
    data () {
      return {
        photoIntroduction: [
          {
            id: 1,
            imgSrc: '../static/img/21.jpg',
            workTitle: '卡通恶搞造型',
            workDesc: '身陈建安死哦车非常的成交出纳室',
            comdentName: '雷神索尔',
            loveNum: 10
          },
          {
            id: 2,
            imgSrc: '../static/img/16.jpg',
            workTitle: 'Dream',
            workDesc: 'Dream 这一单词，不仅仅是对人而言，动物也一样。',
            comdentName: '雷神索尔',
            loveNum: 5
          },
          {
            id: 3,
            imgSrc: '../static/img/24.jpg',
            workTitle: '璀璨',
            workDesc: '灯火阑珊的夜晚，有没有带给你不一样的感想',
            comdentName: '雷神索尔',
            loveNum: 6
          },
          {
            id: 4,
            imgSrc: '../static/img/17.jpg',
            workTitle: '不一样',
            workDesc: '稚嫩率真的面孔，古灵精怪的动作，不禁捧腹大笑',
            comdentName: '雷神索尔',
            loveNum: 6
          }
        ]
      };
    },
    components: {
      comPhotoCard
    }
  };
</script>

<style lang="scss" type="text/scss">
  .comFavoriteWork {
    .worksGrid {
      margin: auto auto 20px;
      padding: 15px;
      width: 250px;
      height: 350px;
      background: #fff;
      vertical-align: top;
    }
  }

  @media (min-width: 768px) {
    .comFavoriteWork {
      .worksGrid {
        display: inline-block;
        margin: 0 10px 20px;
      }
    }
  }
</style>
