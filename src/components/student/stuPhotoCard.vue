<template>
  <div class="stuPhotoCard">
    <div class="imageGrid">
      <img :src="onePhoto" alt="" class="imgResponsive"/>
      <div class="imagePos">
        <router-link class="iconBox" :to="{name: 'workDetail', params: { workItem: item}}">
          <i class="el-icon-view"></i>
        </router-link>
        <router-link class="iconBox" :to="{name: 'workDetail', params: { workItem: item}}">
          <i class="el-icon-edit"></i>
        </router-link>
        <div class="iconBox" @click="openDelMassage">
          <i class="el-icon-delete"></i>
        </div>
      </div>
    </div>
    <div class="infoGrid">
      <div class="workTitle">
        <h4>{{item.work_name}}</h4>
        <span><i class="icon-heart"></i>0</span>
      </div>
      <p class="workDesc">{{item.work_summary}}</p>
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
      return {
        onePhoto: ''
      };
    },
    methods: {
      openDelMassage() {
        this.$confirm('此操作将永久删除该作品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          // 在这里做一些删除该作品的操作
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    created() {
      this.onePhoto = (this.item.work_photo.split(','))[0];
    }
  };
</script>

<style lang="scss" type="text/scss">
  .stuPhotoCard {
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
          i {
            vertical-align: text-top;
            padding-right: 3px;
            color: #DC143C;
          }
        }
      }
      .workDesc {
        line-height: 15px;
        margin-top: 20px;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
