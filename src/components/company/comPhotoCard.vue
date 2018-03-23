<template>
  <div class="comPhotoCard">
    <div class="imageGrid">
      <img :src="item.imgSrc" alt="" class="imgResponsive"/>
      <div class="imagePos">
        <router-link class="iconBox" :to="{name: 'workDetail', params: { workItem: item}}">
          <i class="el-icon-view"></i>
        </router-link>
      </div>
    </div>
    <div class="infoGrid">
      <div class="workTitle">
        <h4>{{item.workTitle}}</h4>
        <span @click="cancleCollect"><i class="icon-heart"></i>{{item.loveNum}}</span>
      </div>
      <p class="workDesc">{{item.workDesc}}</p>
    </div>
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
      return {};
    },
    methods: {
      cancleCollect() {
        this.$confirm('是否要取消对该商品的收藏?', '提示', {
          confirmButtonText: '是',
          cancelButtonText: '否',
          type: 'warning',
          center: true
        }).then(() => {
          // 在这里做一些删除该作品收藏记录的操作
          this.$message({
            type: 'success',
            message: '取消收藏成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '未取消收藏'
          });
        });
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .comPhotoCard {
    .imageGrid {
      position: relative;
      height: 250px;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .imagePos {
        display: none;
      }
      &:hover {
        .imagePos {
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.5);
          .iconBox {
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 50%;
            background: #DCF9F5;
            font-size: 20px;
            font-weight: 700;
            color: #000;
            margin: 38% 10px;
          }
        }
      }
    }
    .infoGrid {
      text-align: left;
      margin-top: 20px;
      .workTitle {
        font-size: 20px;
        h4 {
          display: inline-block;
        }
        span {
          float: right;
          cursor: pointer;
          i {
            vertical-align: text-top;
            padding-right: 3px;
            color: #DC143C;
          }
        }
      }
      .workDesc {
        margin-top: 20px;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
