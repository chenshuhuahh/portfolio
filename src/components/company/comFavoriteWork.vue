<template>
  <div class="comFavoriteWork">
    <div class="worksGrid" v-for="item in photoIntroduction" :key="item.id">
      <comPhotoCard :item="item"></comPhotoCard>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import comPhotoCard from './comPhotoCard.vue';
  import {getCookie} from '../../assets/js/cookie.js';
  export default {
    data () {
      return {
        photoIntroduction: []
      };
    },
    components: {
      comPhotoCard
    },
    mounted() {
      let params = new URLSearchParams();
      params.append('action', 'showThisComFavorite');
      params.append('comEmail', getCookie('comEmail'));
      this.$ajax.post('/api/companyBox.php', params)
        .then((res) => {
          console.log('showThisComFavorite res:', res);
          if (res.data !== 0) {
            this.photoIntroduction = res.data;
          }
        });
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
