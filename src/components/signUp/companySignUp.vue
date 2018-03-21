<template>
  <div class="companySignUp">
    <h1>Company Sign Up</h1>
    <div class="companySignUpSection">
      <el-form ref="companySignUpForm" :model="companySignUpForm" label-width="80px">
        <el-form-item label="公司名称">
          <el-input id="cName" v-model="companySignUpForm.cName" placeholder="请输入公司名称"></el-input>
        </el-form-item>
        <el-form-item label="公司地址">
          <area-cascader :level='1' v-model="companySignUpForm.province" placeholder="请选择省市区"></area-cascader>
          <el-input id="cAddress" class="cAddress" v-model="companySignUpForm.cAddress" placeholder="请输入街道地址"></el-input>
        </el-form-item>
        <el-form-item label="法定人">
          <el-input id="cBoss" class="cBoss" v-model="companySignUpForm.cBoss" placeholder="请输入公司法定人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input id="cPhone" v-model="companySignUpForm.cPhone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱">
          <el-input id="cEMail" v-model="companySignUpForm.cEMail" placeholder="请输入联系邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input id="cPassword" v-model="companySignUpForm.cPassword" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input id="cPasswordAgain" v-model="companySignUpForm.cPasswordAgain" placeholder="请再次确认密码"></el-input>
        </el-form-item>
        <el-form-item label="营业执照">
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
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="registry">立即注册</el-button>
          <a class="toLogIn" @click="goLogIn">已有账号，立即登录</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="transparentBox"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        imageUrl: '',
        companySignUpForm: {
          cName: '',
          province: '',
          city: '',
          town: '',
          cAddress: '',
          cBoss: '',
          cPhone: '',
          cEMail: '',
          cPassword: '',
          cPasswordAgain: '',
          cLicence: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('registry');
      },
      goLogIn() {
        this.$router.push({path: '/logIn'});
      },
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
  .companySignUp {
    background-image: url(bg03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    text-align: center;
    color: #fff;
    h1 {
      padding-top: 110px;
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      line-height: 115%;
      letter-spacing: 0.7px;
      margin-bottom: 30px;
    }
    .companySignUpSection {
      text-align: left;
      padding: 0 30px 0 15px;
      .el-form-item__label {
        color: #fff;
      }
      .cAddress {
        margin-top: 10px;
      }
      .registry {
        margin-right: 10px;
      }
      .toLogIn {
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
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
        width: 250px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 250px;
        height: 178px;
        display: block;
      }
    }
    .transparentBox {
      width: 100%;
      height: 50px;
    }
  }

  @media (min-width: 768px) {
    .companySignUp {
      h1 {
        padding-top: 135px;
        font-size: 35px;
      }
      .companySignUpSection {
        width: 600px;
        margin: auto;
        padding: 20px 30px 10px 20px;
        margin-bottom: 80px;
        -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        -moz-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        box-shadow: 0 2px 5px rgba(0,0,0,.4);
        border-radius: 5px;
      }
    }
  }
</style>
