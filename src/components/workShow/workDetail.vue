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
      <router-link :to="{name: 'sectionWorkShow',
                             params: { workType: $route.params.workItem.studentName}}"
      >
        ({{$route.params.workItem.studentName}})
      </router-link>
      <span class="iconFavorite" :class="{'active': favorite}" @click="toggleFavorite"><i
        class="icon-heart"></i>{{$route.params.workItem.loveNum}}</span>
      <!--<div>{{$route.params.workItem.workDesc}}</div>-->
      <div>
        <p>Dream 这一单词，不仅仅是对人而言，在动物的眼中，我们也看出其独特风趣的梦想。</p>
        <p><span class="ql-font-monospace">拍摄地点：</span>路边</p>
        <p><span class="ql-font-monospace">拍摄模特：</span><span style="color: rgb(107, 36, 178);">流浪猫狗</span></p>
        <p><span class="ql-font-monospace">灵感奇想</span>：</p>
        <p>
          <strong>在乡下路边走的时候，看见了许许多多的猫猫狗狗四处游荡，它们用友好的目光注视着路上走走停停的路人，没有一点恶意，看着这情景，马上拿起手机拍摄下来</strong>
        </p>
        <p>
          <strong class="ql-font-monospace">后期处理：</strong>
          <strong>Photoshop<span class="ql-cursor"/></strong>
        </p>
        <p><br></p>
      </div>
    </div>
    <div class="commentBox">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="米莫印品" name="1">
          <div class="comComment"><i class="el-icon-edit"></i>留言：与现实生活一致，拍摄特点很突出</div>
          <div class="stuComment">
            <span v-html="emoji(data)"></span>
            <i class="icon-compass"></i>回复
          </div>
          <emojiBigBox @ievent="ievent"></emojiBigBox>
        </el-collapse-item>
        <el-collapse-item title="爱范儿" name="2">
          <div class="comComment"><i class="el-icon-edit"></i>留言：控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div class="stuComment">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
            <i class="icon-compass"></i>回复
          </div>
        </el-collapse-item>
        <el-collapse-item title="成都霓裳" name="3">
          <div class="comComment"><i class="el-icon-edit"></i>留言：简化流程：设计简洁直观的操作流程；</div>
          <div class="comComment"><i class="el-icon-edit"></i>留言：清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div class="stuComment">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
            <i class="icon-compass"></i>回复
          </div>
        </el-collapse-item>
        <el-collapse-item title="先动优境" name="4">
          <div class="comComment"><i class="el-icon-edit"></i>留言：用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div class="stuComment">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
            <i class="icon-compass"></i>回复
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import emojiBigBox from '../emojiBox/emojiBox.vue';
  export default {
    data () {
      return {
        activeNames: ['1'],
        photoList: [
          {imgItem: '../static/img/15.jpg'},
          {imgItem: '../static/img/14.jpg'},
          {imgItem: '../static/img/16.jpg'},
          {imgItem: '../static/img/6.jpg'}
        ],
        data: '',
        favorite: false
      };
    },
    components: {
      emojiBigBox
    },
    methods: {
      ievent(data) {
        this.data = data;// data为包含传过来所有数据的数组，第一个元素是对象，第二个元素是字符串
      },
      toggleFavorite() {
        this.favorite = !this.favorite;
      }
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
      background-image: url('http://p6c2yqflv.bkt.clouddn.com/staticImg/puzzle.png');
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
      .iconFavorite {
        cursor: pointer;
        &.active {
          color: #DC143C;
        }
        .icon-heart {
          padding-right: 5px;
        }
      }
    }
    .commentBox {
      text-align: left;
      height: 100%;
      padding: 20px;
      -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      -moz-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.12);
      z-index: 10;
      .el-collapse-item {
        z-index: 10;
      }
      i {
        font-size: 20px;
        margin-right: 5px;
      }
      .stuComment {
        text-align: right;
      }
      .stuComment, .comComment {
        margin-bottom: 10px;
      }
      .commentButton {
        margin-bottom: 10px;
        text-align: center;
      }
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
        .iconFavorite {
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
