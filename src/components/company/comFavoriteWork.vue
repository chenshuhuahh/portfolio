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
            imgSrc: '../static/img/15.jpg',
            workTitle: '卡通恶搞造型',
            workDesc: '身陈建安死哦车非常的成交出纳室',
            comdentName: '雷神索尔',
            loveNum: 10
          },
          {
            id: 2,
            imgSrc: '../static/img/11.jpg',
            workTitle: '恶搞造型',
            workDesc: '身陈建安死哦车非常的成交出纳室',
            comdentName: '雷神索尔',
            loveNum: 5
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
