<template>
  <div class="stuInfoBox">
    <div class="basicInfo">
      <div class="infoMain">
        <el-form ref="basicInfoForm" :model="basicInfoForm" label-width="60px">
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="basicInfoForm.stuNickname" placeholder="给自己取个特别的昵称"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input type="textarea" :rows="3" v-model="basicInfoForm.stuIntro" placeholder="简单介绍自己"></el-input>
          </el-form-item>
          <el-button plain class="submit">提交</el-button>
        </el-form>
      </div>
    </div>
    <div class="passwordModify">
      <div class="grayBox">
        <div class="pswMain">
          <el-form ref="pwsModifyForm" :model="pwsModifyForm" label-width="82px">
            <el-form-item label="原始密码">
              <el-input v-model="pwsModifyForm.sOldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input v-model="pwsModifyForm.sNewPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码">
              <el-input v-model="pwsModifyForm.sNewPasswordAgain"></el-input>
            </el-form-item>
            <el-button plain class="submit">确认修改</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        imageUrl: '',
        basicInfoForm: {
          stuNickname: '',
          stuIntro: ''
        },
        pwsModifyForm: {
          sOldPassword: '',
          sNewPassword: '',
          sNewPasswordAgain: ''
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
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
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .stuInfoBox {
    .basicInfo {
      text-align: center;
      background-color: #fff;
      .infoMain {
        width: 300px;
        margin: auto;
        padding: 50px 0;
        .el-form-item__label {
          text-align: left;
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
        .submit {
          width: 150px;
          background: #50e3ce;
          color: #fff;
          border-radius: 5px;
          text-align: center;
        }
      }
    }
    .passwordModify {
      margin: 20px 0;
      text-align: center;
      background-color: #fff;
      padding: 30px;
      .grayBox {
        background-color: #f1f1f1;
        .pswMain {
          width: 270px;
          margin: auto;
          padding: 30px;
          .el-form-item__label {
            text-align: left;
          }
          .submit {
            width: 150px;
            background: #50e3ce;
            color: #fff;
            border-radius: 5px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
