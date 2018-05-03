<template>
  <div class="workDetail">
    <div class="puzzleIcon"></div>
    <div class="desktopBannerBox">
      <el-carousel :interval="3000" type="card" height="350px">
        <el-carousel-item v-for="item in $route.params.workItem.work_photo.split(',')" :key="item.id">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mobileBannerBox">
      <el-carousel height="250px">
        <el-carousel-item v-for="item in $route.params.workItem.work_photo.split(',')" :key="item.id">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="introductionBox">
      <h3>{{$route.params.workItem.work_name}}</h3>
      <router-link :to="{name: 'sectionWorkShow',
                        params: { workType: $route.params.workItem.stu_id}}"
      >
        ({{$route.params.workItem.stu_name}})
      </router-link>
      <!--<span class="iconFavorite" :class="{'active': favorite}" @click="toggleFavorite"><i
        class="icon-heart"></i>{{$route.params.workItem.loveNum}}</span>-->
      <span class="iconFavorite" :class="{'active': favorite}" @click="toggleFavorite"><i
        class="icon-heart"></i>5</span>
      <div class="ql-container ql-snow">
        <div class="ql-editor" v-html="$route.params.workItem.work_desc">
        </div>
      </div>
    </div>
    <div class="commentBox">
      <el-collapse v-model="activeNames" v-for="(list, key, index) in commentCollection" :key="key">
        <el-collapse-item :title=key :name=index>
          <div v-for="item in list" :key="item.id">
            <div class="comComment"><i class="el-icon-edit"></i>留言：{{item.comm_content}}</div>
            <div class="stuComment">
              <span v-html="item.reply_content"></span>
              <!--<span v-html="emoji(data)"></span>-->
              <i class="icon-compass"></i>回复
            </div>
            <emojiBigBox @ievent="ievent"></emojiBigBox>
          </div>
        </el-collapse-item>
        <!--<el-collapse-item title="爱范儿" name="2">-->
          <!--<div class="comComment"><i class="el-icon-edit"></i>留言：控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>-->
          <!--<div class="stuComment">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。-->
            <!--<i class="icon-compass"></i>回复-->
          <!--</div>-->
        <!--</el-collapse-item>-->
        <!--<el-collapse-item title="成都霓裳" name="3">-->
          <!--<div class="comComment"><i class="el-icon-edit"></i>留言：简化流程：设计简洁直观的操作流程；</div>-->
          <!--<div class="comComment"><i class="el-icon-edit"></i>留言：清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>-->
          <!--<div class="stuComment">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。-->
            <!--<i class="icon-compass"></i>回复-->
          <!--</div>-->
        <!--</el-collapse-item>-->
        <!--<el-collapse-item title="先动优境" name="4">-->
          <!--<div class="comComment"><i class="el-icon-edit"></i>留言：用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
          <!--<div class="stuComment">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。-->
            <!--<i class="icon-compass"></i>回复-->
          <!--</div>-->
        <!--</el-collapse-item>-->
      </el-collapse>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import emojiBigBox from '../emojiBox/emojiBox.vue';
//  import {getCookie} from '../../assets/js/cookie.js';
  export default {
    data () {
      return {
        activeNames: ['1'],
        data: '',
        favorite: false,
        user: '',
        commentCollection: [],
        showCommentInfo: false, // 显示评论信息的盒子
        showCommentBox: false // 显示评论框的盒子
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
    },
    mounted() {
//      this.user = getCookie('stuEmail') ? getCookie('stuEmail') : getCookie('comEmail');
      let workItem = this.$route.params.workItem; // 拿到router传过来的参数，需要加this
      let params = new URLSearchParams();
      params.append('action', 'showCommentInfo');
      params.append('workId', workItem.work_id);
      this.$ajax.post('/api/workShowBox.php', params)
        .then((res) => {
          console.log('showCommentInfo res:', res);
          if (res.data === '0') {
            this.showCommentBox = true;
            this.showCommentInfo = false;
          }
          this.commentCollection = res.data;
        });
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
        margin-bottom: 14px;
      }
      span {
        display: block;
        margin-top: 10px;
        margin-bottom: 20px;
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
          margin-bottom: 50px;
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
