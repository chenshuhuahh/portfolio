<template>
  <div class="stuWorkShowBox">
    <div class="worksGrid" v-for="item in photoIntroduction" :key="item.id">
      <stuPhotoCard :item="item"></stuPhotoCard>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import stuPhotoCard from './stuPhotoCard.vue';
  import {getCookie} from '../../assets/js/cookie.js';
  export default {
    data () {
      return {
        photoIntroduction: []
      };
    },
    components: {
      stuPhotoCard
    },
    mounted() {
      let params = new URLSearchParams();
      params.append('action', 'showStuWorks');
      params.append('stuEmail', getCookie('stuEmail'));
      this.$ajax.post('/api/studentBox.php', params)
        .then((res) => {
          console.log(' showStuWorks array res:', res);
          this.photoIntroduction = res.data;
        });
    }
  };
</script>

<style scoped lang="scss" type="text/scss">
  .stuWorkShowBox {
    .worksGrid {
      margin: auto auto 20px;
      padding: 15px;
      width: 250px;
      height: 350px;
      background: #fff;
    }
  }

  @media (min-width: 768px) {
    .stuWorkShowBox {
      .worksGrid {
        display: inline-block;
        vertical-align: top;
        margin: 0 10px 20px;
      }
    }
  }
</style>
