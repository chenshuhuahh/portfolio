<template>
  <div class="companySignUp">
    <h1>Company Sign Up</h1>
    <div class="companySignUpSection">
      <el-form ref="companySignUpForm" :model="companySignUpForm" :rules="comSignUpRules" label-width="80px">
        <el-form-item label="公司名称" prop="cName">
          <el-input id="cName" v-model="companySignUpForm.cName" placeholder="请输入公司名称"></el-input>
        </el-form-item>
        <el-form-item label="公司地址" prop="province">
          <area-cascader type="text" :level='1' v-model="companySignUpForm.province" placeholder="请选择省市区"></area-cascader>
          <el-input id="cAddress" class="cAddress" v-model="companySignUpForm.cAddress" placeholder="请输入街道地址"></el-input>
        </el-form-item>
        <el-form-item label="法定人" prop="cBoss">
          <el-input id="cBoss" class="cBoss" v-model="companySignUpForm.cBoss" placeholder="请输入公司法定人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱" prop="cEmail">
          <el-input id="cEmail" v-model="companySignUpForm.cEmail" placeholder="联系邮箱将作为登录账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="cPassword">
          <el-input type="password" id="cPassword" v-model="companySignUpForm.cPassword" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cPasswordAgain">
          <el-input type="password" id="cPasswordAgain" v-model="companySignUpForm.cPasswordAgain" placeholder="请再次确认密码"></el-input>
        </el-form-item>
        <el-form-item label="营业执照" prop="cLicense">
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
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('companySignUpForm')" class="registry">立即注册</el-button>
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
      var cPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.companySignUpForm.cPasswordAgain !== '') {
            this.$refs.companySignUpForm.validateField('cPasswordAgain');
          }
          callback();
        }
      };
      var checkcPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.companySignUpForm.cPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        postData: {
          token: ''
        },
        imageUrl: '',
        companySignUpForm: {
          cName: '',
          province: [],
          cAddress: '',
          cBoss: '',
          cEmail: '',
          cPassword: '',
          cPasswordAgain: ''
        },
        comSignUpRules: {
          cName: [
            { required: true, message: '请输入企业名称', trigger: 'blur' }
          ],
          province: [
            { required: true, message: '请输入企业地址', trigger: 'blur,change' }
          ],
          cBoss: [
            { required: true, message: '请输入企业法定人', trigger: 'blur' }
          ],
          cEmail: [
            { required: true, message: '请输入企业联系邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          cPassword: [
            { required: true, validator: cPass, trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          cPasswordAgain: [
            { required: true, validator: checkcPass, trigger: 'blur' }
          ],
          cLicense: [
            { required: true, message: '请上传企业营业执照', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // wholeAddress存储的是完整地址
            // 首先遍历province数组，拿到省市区，再和详细地址进行拼接
            let wholeAddress = this.companySignUpForm.province.reduce(function(first, second) {
              return first + second;
            }, 0);
            wholeAddress += this.companySignUpForm.cAddress;
            let params = new URLSearchParams();
            params.append('action', 'comSignUp');
            params.append('cName', this.companySignUpForm.cName);
            params.append('cAddress', wholeAddress);
            params.append('cBoss', this.companySignUpForm.cBoss);
            params.append('cLicense', this.imageUrl);
            params.append('cEmail', this.companySignUpForm.cEmail);
            params.append('cPassword', this.companySignUpForm.cPassword);
            this.$ajax.post('/api/loginAndSignUp.php', params)
              .then((res) => {
                console.log('company sign up res:', res);
                if (res.data === 1) {
                  // 可以做一些邮箱的验证再跳转登录界面！！！
                  setTimeout(function() {
                    this.$router.push({path: '/logIn'});
                  }.bind(this), 1000);
                } else {
                  this.$message.error('该邮箱已被注册，请检查邮箱是否填写正确！');
                }
              });
          } else {
            console.log('company sign up error submit!!');
            return false;
          }
        });
      },
      goLogIn() {
        this.$router.push({path: '/logIn'});
      },
      handleAvatarSuccess(res) {
        this.imageUrl = 'http://p6c2yqflv.bkt.clouddn.com/' + res.key;
        console.log('res cLicense', res);
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
    },
    created() {
      this.$ajax.get('/api/getUpToken.php').then(res => {
        console.log('company token res', res);
        this.postData.token = res.data;
      });
    }
  };
</script>

<style lang="scss" type="text/scss">
  .companySignUp {
    background-image: url('http://p6c2yqflv.bkt.clouddn.com/staticImg/bg03.jpg');
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
      .el-form-item__label, .el-radio {
        color: #fff;
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
