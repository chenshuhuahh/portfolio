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
      <el-collapse v-model="activeNames" v-if="!!commentCollection">
        <el-collapse-item v-for="(list, key, index) in commentCollection" :key="key" :title=list[0].com_name :name=index>
          <div v-for="item in list" :key="item.id">
            <div class="comComment" v-show="!!item.comm_content">
              <i class="el-icon-edit"></i>
              留言：<span v-html="emoji(item.comm_content)"></span>
              <div class="commentTime">{{item.comm_time}}</div>
            </div>
            <div class="stuComment" v-show="!!item.reply_content">
              <span v-html="emoji(item.reply_content)"></span>
              <!--<span v-html="emoji(data[1])"></span>-->
              <i class="icon-compass"></i>回复
              <div class="commentTime">{{item.reply_time}}</div>
            </div>
          </div>
          <div class="comComment" v-show="showCommentInfo">
            <i class="el-icon-edit"></i>
            留言：<span v-html="emoji(data[1])"></span>
            <div class="commentTime">{{date}}</div>
          </div>
          <div class="stuComment" v-show="showReplyInfo">
            <span v-html="emoji(data[1])"></span>
            <i class="icon-compass"></i>回复
            <div class="commentTime">{{date}}</div>
          </div>
          <emojiBigBox @ievent="ievent" v-show="isLoginStudent" :comId=list[0].com_id></emojiBigBox>
          <emojiBigBox @ievent="ievent" v-show="list[0].com_email == companyUser" :comId=list[0].com_id></emojiBigBox>
        </el-collapse-item>
      </el-collapse>
      <div class="firstComComment" v-show="!commentCollection.hasOwnProperty(companyUser)">
        <div class="firstComName">开始评论</div>
        <div class="comComment" v-show="showCommentInfo">
          <i class="el-icon-edit"></i>
          留言：<span v-html="emoji(data[1])"></span>
          <div class="commentTime">{{date}}</div>
        </div>
        <emojiBigBox @ievent="ievent" :comId=companyUser></emojiBigBox>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import emojiBigBox from '../emojiBox/emojiBox.vue';
  import {getCookie} from '../../assets/js/cookie.js';
  export default {
    data () {
      return {
        activeNames: ['3'],
        data: [],
        favorite: false,
        workItem: '',
        commentCollection: [],
        showComment: true,
        showReplyInfo: false, // 显示回复评论信息的盒子
        isLoginStudent: false, // 是否有学生登录 有点的话就显示评论的框
        showCommentInfo: false, // 显示企业发布评论的盒子
        companyUser: '',
        date: '', // 当前日期
        comIsNotComment: true
      };
    },
    components: {
      emojiBigBox
    },
    methods: {
      // 格式化new Date()得到的日期 转换成yyyy-mm-dd hh:mm:ss格式的
      formatDateTime (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      },

      ievent(data) {
        this.data = data;// data为包含传过来所有数据的数组，第一个元素是对象，第二个元素是字符串
//        console.log(this.data);
        let params = new URLSearchParams();
        this.date = this.formatDateTime(new Date());
        params.append('workId', this.workItem.work_id);
        params.append('comId', this.data[0]);
        params.append('comment', this.data[1]);
        params.append('replyTime', this.date);
        if (getCookie('comEmail')) {
          params.append('action', 'companyComment');
          this.$ajax.post('/api/workShowBox.php', params)
            .then((res) => {
              console.log('companyComment res:', res);
              if (res.data === 1) {
                this.$message({
                  message: '回复评论成功',
                  type: 'success'
                });
                this.showCommentInfo = true;
              } else {
                this.$message.error('回复评论失败');
              }
            });
        }
        if (getCookie('stuEmail')) {
          params.append('action', 'stuReplyComment');
          this.$ajax.post('/api/workShowBox.php', params)
            .then((res) => {
              console.log('stuReplyComment res:', res);
              if (res.data === 1) {
                this.$message({
                  message: '回复评论成功',
                  type: 'success'
                });
                this.showReplyInfo = true;
              } else {
                this.$message.error('回复评论失败');
              }
            });
        }
      },
      toggleFavorite() {
        this.favorite = !this.favorite;
        if (this.companyUser) {
          let params = new URLSearchParams();
          params.append('workId', this.workItem.work_id);
          params.append('comId', this.companyUser);
          if (this.favorite) {
            params.append('action', 'addFavorite');
          } else {
            params.append('action', 'removeFavorite');
          }
          this.$ajax.post('/api/workShowBox.php', params)
            .then((res) => {
              console.log('addFavorite res:', res);
              if (res.data === 1) {
                console.log('collection success');
              } else {
                console.log('collection error');
              }
            });
        }
      }
    },
    mounted() {
      if (getCookie('comEmail')) {
        this.companyUser = getCookie('comEmail');
      }
      if (getCookie('stuEmail')) {
          this.isLoginStudent = true;
      }
      this.workItem = this.$route.params.workItem; // 拿到router传过来的参数，需要加this
      let params = new URLSearchParams();
      params.append('action', 'showCommentInfo');
      params.append('workId', this.workItem.work_id);
      this.$ajax.post('/api/workShowBox.php', params)
        .then((res) => {
          console.log('showCommentInfo res:', res);
          if (res.data === 0) {
            this.commentCollection = '';
          } else {
            this.commentCollection = res.data;
          }
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
      font-size: 13px;
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
      .commentTime {
        color: #ccc;
      }
      .firstComComment {
        padding-top: 20px;
      }
      .firstComName {
        margin-bottom: 20px;
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
