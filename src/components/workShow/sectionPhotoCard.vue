<template>
  <div class="sectionImageContainer" @mouseenter="isShow=true" @mouseleave="isShow=false">
    <img :src="onePhoto" alt="">
    <router-link class="introduction" v-show="isShow" :to="{name: 'workDetail', params: { workItem: item}}">
      <h3 class="workTitle">{{item.work_name}}</h3>
      <span class="studentName">{{item.stu_name}}</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      item: {
        type: Object
      }
    },
    data () {
      return {
        isShow: false,
        onePhoto: ''
      };
    },
    created() {
      this.onePhoto = (this.item.work_photo.split(','))[0];
    }
  };
</script>

<style lang="scss" type="text/scss">
  .sectionImageContainer {
    height: 222px;
    margin: 15px 0;
    display: inline-block;
    -webkit-box-shadow: 0 2px 13px 1px rgba(0, 0, 0, .25);
    -moz-box-shadow: 0 2px 13px 1px rgba(0, 0, 0, .25);
    box-shadow: 0 2px 13px 1px rgba(0, 0, 0, .25);
    text-align: center;
    overflow: hidden;
    position: relative;
    img {
      margin: auto;
      height: auto;
      max-height: 100%;
    }
    .introduction {
      text-decoration: none;
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(239, 239, 239, .82);
      .workTitle {
        padding-top: 65px;
        font-weight: 600;
        line-height: 30px;
        text-transform: uppercase;
        margin-bottom: 10px;
        color: rgba(47, 47, 47, .82);
      }
      .studentName {
        font-size: 15px;
        text-transform: capitalize;
        color: #5bbce6;
      }
    }
  }

  @media (min-width: 768px) {
    .sectionImageContainer {
      height: 250px;
      margin: 30px 5px;
      .introduction {
        .workTitle {
          padding-top: 80px;
        }
      }
    }
  }
</style>
