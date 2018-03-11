<template>
  <div class="workDetail">
    <div class="puzzleIcon"></div>
    <div class="desktopBannerBox">
      <el-carousel :interval="3000" type="card" height="350px">
        <el-carousel-item v-for="item in photoList" :key="item.id">
          <img :src="item.imgItem"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mobileBannerBox">
      <el-carousel height="250px">
        <el-carousel-item v-for="item in photoList" :key="item.id">
          <img :src="item.imgItem"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="introductionBox">
      <h3>{{$route.params.workItem.workTitle}}</h3>
      <span>({{$route.params.workItem.studentName}})</span>
      <i class="el-icon-star-off">{{$route.params.workItem.loveNum}}</i>
      <p>{{$route.params.workItem.workDesc}}</p>
    </div>
    <div class="commentBox">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="企业1" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="企业2" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="企业3" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="企业4" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        activeNames: ['1'],
        photoList: [
          {imgItem: '../static/img/6.jpg'},
          {imgItem: '../static/img/9.jpg'},
          {imgItem: '../static/img/11.jpg'},
          {imgItem: '../static/img/15.jpg'}
        ]
      };
    }
  };
</script>

<style lang="scss" type="text/scss">
  .workDetail {
    text-align: center;
    margin-top: 90px;
    padding: 0 10px 50px;
    .puzzleIcon {
      width: 50px;
      height: 50px;
      margin: 0 auto 20px;
      background-image: url(./puzzle.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    .desktopBannerBox, .mobileBannerBox {
      margin-bottom: 30px;
      .el-carousel {
        text-align: center;
        .el-carousel__item img {
          width: auto;
          height: auto;
          max-height: 100%;
          max-width: 100%;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: rgba(255, 255, 255, 0);
        }

        .el-carousel__item:nth-child(2n+1) {
          background-color: rgba(255, 255, 255, 0);
        }
      }
    }
    .desktopBannerBox {
      display: none;
    }
    .introductionBox {
      color: #808184;
      margin-bottom: 50px;
      h3 {
        font-size: 30px;
        margin-bottom: 10px;
      }
      span {
        display: block;
        margin-bottom: 10px;
      }
      p {
        margin: 10px 0;
        font-size: 14px;
      }
    }
    .commentBox {
      width: 100%;
      height: 100%;
      padding: 20px;
      -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      -moz-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    }
  }

  @media (min-width: 768px) {
    .workDetail {
      text-align: left;
      padding: 0 50px 50px;
      .mobileBannerBox {
        display: none;
      }
      .desktopBannerBox {
        display: block;

      }
      .introductionBox {
        h3 {
          font-size: 36px;
          display: inline-block;
        }
        span {
          display: inline-block;
        }
        p {
          margin-bottom: 10px;
          font-size: 14px;
        }
        i {
          vertical-align: top;
          float: right;
          font-size: 20px;
        }
      }
    }
  }

  @media (min-width: 925px) {
    .workDetail {
      padding: 0 100px 50px;

    }
  }

  @media (min-width: 1000px) {
    .workDetail {
      padding: 0 130px 50px;

    }
  }

  @media (min-width: 1126px) {
    .workDetail {
      padding: 0 250px 50px;

    }
  }
</style>
