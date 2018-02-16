<template>
  <div class="logInSection">
    <h1>Log In</h1>
    <div class="studentLogInSection">
      <el-form ref="studentLogInForm" :model="studentLogInForm" label-width="40px">
        <p class="title">Student</p>
        <el-form-item label="手机">
          <el-input id="sPhone" v-model="studentLogInForm.sPhone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input id="sPassword" v-model="studentLogInForm.sPassword" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="log">登录</el-button>
          <a class="goStudentSignUp" @click="goStudentSignUp">还没账号，立即注册</a>
        </el-form-item>
      </el-form>
    </div>
    <div class="companyLogInSection">
      <el-form ref="companyLogInForm" :model="companyLogInForm" label-width="40px">
        <p class="title">Company</p>
        <el-form-item label="邮箱">
          <el-input id="cEMail" v-model="companyLogInForm.cEMail" placeholder="请输入联系邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input id="cPassword" v-model="companyLogInForm.cPassword" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="log">登录</el-button>
          <a class="toCompanySignUp" @click="goCompanySignUp">还没账号，立即注册</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        companyLogInForm: {
          cEMail: '',
          cPassword: ''
        },
        studentLogInForm: {
          sPhone: '',
          sPassword: ''
        }
      };
    },
    methods: {
      onSubmit() {
          console.log('ssss');
      },
      goStudentSignUp() {
        this.$router.push({path: '/signUp/student'});
      },
      goCompanySignUp() {
        this.$router.push({path: '/signUp/company'});
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .logInSection {
    background-image: url(bg03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    h1 {
      padding-top: 80px;
      text-align: center;
      font-size: 31px;
      font-weight: 400;
      line-height: 115%;
      letter-spacing: 0.7px;
      margin-bottom: 16px;
    }
    .companyLogInSection, .studentLogInSection {
      text-align: left;
      margin: 0 30px;
      .title {
        text-align: center;
        margin-bottom: 20px;
      }
      .el-form-item__label {
        color: #fff;
      }
      .log {
        margin-right: 10px;
      }
      .toCompanySignUp, .goStudentSignUp {
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
    .studentLogInSection {
      padding-top: 20px;
      padding-bottom: 20px;
      margin-bottom: 40px;
      border-top: 1px solid rgba(255, 255, 255, .4);
      border-bottom: 1px solid rgba(255, 255, 255, .4);
    }
  }

  @media (min-width: 768px) {
    .logInSection {
      h1 {
        padding-top: 135px;
        font-size: 35px;
        margin-bottom: 50px;
      }
      .companyLogInSection, .studentLogInSection {
        display: inline-block;
        width: 350px;
        margin: auto;
        padding: 20px 30px 10px;
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        border-radius: 5px;
      }
      .studentLogInSection {
        margin-right: 40px;
        border-top: none;
        border-bottom: none;
      }
    }
  }
</style>
