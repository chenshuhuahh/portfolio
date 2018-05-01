<template>
  <div class="stuLeftBox">
    <div class="info">
      <div class="portrait">
        <img :src="stuInfo.stu_avatar" @click="avatarUploadVisible = true"/>
        <el-dialog title="头像上传" :visible.sync="avatarUploadVisible">
          <el-upload
            class="avatar-uploader"
            action="http://upload-z2.qiniup.com/"
            :show-file-list="false"
            :data="postData"
            :before-upload="beforeAvatarUpload"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div slot="footer" class="dialog-footer">
            <el-button @click="avatarUploadVisible = false">取 消</el-button>
            <el-button type="primary" @click="onAvatarSubmit">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="studentInfo">
        <div class="sName">{{stuInfo.stu_name}}</div>
        <div class="sSchool">{{stuInfo.stu_school}}</div>
        <div class="sLoveNum"><i class="icon-heart"></i>222</div>
        <el-tag type="info" size="medium" v-show="beforePass">未审核</el-tag>
        <el-tag type="success" size="medium" v-show="isPass">审核通过</el-tag>
        <el-tag type="danger" size="medium" v-show="notPass">审核不通过</el-tag>
      </div>
    </div>
    <div class="menu">
      <ul class="menu-ul">
        <router-link class="menu-link" to="/student/stuInfoBox" tag="li">
          <i class="el-icon-edit-outline"></i>
          <span>个人信息</span>
        </router-link>
        <router-link class="menu-link" to="/student/stuWorkUploadBox" tag="li" v-show="isPass">
          <i class="el-icon-upload2"></i>
          <span>作品上传</span>
        </router-link>
        <router-link class="menu-link" to="/student/stuWorkShowBox" tag="li" v-show="isPass">
          <i class="el-icon-menu"></i>
          <span>作品管理</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getCookie} from '../../assets/js/cookie.js';
  export default {
    data() {
      return {
        postData: {
          token: ''
        },
        imageUrl: '',
        avatarUploadVisible: false,
        stuInfo: {
          stu_avatar: '../../assets/6.jpg'
        },
        isPass: false,
        notPass: false,
        beforePass: false
      };
    },
    methods: {
      handleAvatarSuccess(res) {
        this.imageUrl = 'http://p6c2yqflv.bkt.clouddn.com/' + res.key;
        console.log(res);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      onAvatarSubmit() {
        if (this.imageUrl) {
          this.avatarUploadVisible = false;
          let params = new URLSearchParams();
          params.append('action', 'uploadStuAvatar');
          params.append('stuEmail', getCookie('stuEmail'));
          params.append('stuAvatar', this.imageUrl);
          this.$ajax.post('/api/studentBox.php', params)
            .then((res) => {
              console.log('555res:', res);
              if (res.data === 1) {
                this.$message({message: '头像上传成功！', type: 'success'});
                this.stuInfo.stu_avatar = this.imageUrl;
              } else {
                this.$message.error('upload error！');
              }
            });
        } else {
          this.$message.error('请填写相关信息！');
        }
      }
    },
    mounted() {
      let params = new URLSearchParams();
      params.append('action', 'showBaseInfo');
      params.append('stuEmail', getCookie('stuEmail'));
      this.$ajax.post('/api/studentBox.php', params)
        .then((res) => {
          console.log('res:', res);
          this.stuInfo = res.data;
          if (res.data.stu_status === '1') {
            this.isPass = true;
          } else if (res.data.stu_status === '-1') {
            this.notPass = true;
          } else {
            this.beforePass = true;
          }
        });
    },
    created() {
      this.$ajax.get('/api/getUpToken.php').then(res => {
        console.log('res', res);
        this.postData.token = res.data;
      });
    }
  };
</script>

<style lang="scss" type="text/scss">
  .stuLeftBox {
    .info {
      background: #fff;
      width: 100%;
      height: 190px;
      text-align: center;
      .portrait {
        padding-top: 20px;
        img {
          cursor: pointer;
          width: 80px;
          height: 80px;
          -webkit-border-radius: 40px;
          -moz-border-radius: 40px;
          -ms-border-radius: 40px;
          -o-border-radius: 40px;
          border-radius: 40px;
        }
        .el-dialog {
          width: 80%;
        }
        .avatar-uploader .el-upload {
          border: 1px dashed #d9d9d9;
          border-radius: 65px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
          border-color: #409EFF;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 130px;
          height: 130px;
          line-height: 130px;
          text-align: center;
        }
        .avatar {
          width: 130px;
          height: 130px;
          display: block;
        }
      }
      .studentInfo {
        margin-top: 14px;
        .sName {
          font-size: 20px;
        }
        .sSchool, .sLoveNum {
          display: inline-block;
          margin: 14px 10px;
        }
        i {
          padding-right: 5px;
          color: #DC143C;
        }
      }
    }
    .menu {
      background: #fff;
      width: 100%;
      height: 100%;
      margin: 15px 0;
      text-align: center;
      color: #737373;
      .menu-ul {
        display: flex;
        .menu-link {
          display: inline-block;
          flex: 1;
          list-style-type: none;
          height: 60px;
          cursor: pointer;
          line-height: 60px;
          transition: all .4s;
          &.router-link-exact-active {
            font-weight: bold;
            color: #353535;
            background: #DCF9F5;
          }
          i {
            vertical-align: middle;
            font-size: 23px;
          }
          span {
            display: none;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .stuLeftBox {
      position: absolute;
      top: 100px;
      left: 50px;
      .info {
        width: 275px;
        height: 170px;
        text-align: left;
        .portrait {
          display: inline-block;
          overflow: hidden;
          padding: 40px 18px 0 15px;
          .el-dialog {
            width: 50%;
          }
        }
        .studentInfo {
          display: inline-block;
          margin: 28px 0 0;
          vertical-align: top;
          .sSchool, .sLoveNum {
            display: block;
            margin: 14px 0;
          }
        }
      }
      .menu {
        width: 275px;
        height: 355px;
        text-align: left;
        .menu-ul {
          display: block;
          padding: 0;
          margin: 0;
          .menu-link {
            display: block;
            padding: 0 0 0 25px;
            i {
              vertical-align: text-top;
              font-size: 16px;
            }
            span {
              display: inline;
            }
          }
        }
      }
    }
  }
</style>
