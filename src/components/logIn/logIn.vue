<template>
  <div class="logInSection">
    <h1>Log In</h1>
    <div class="bothLogInSection">
      <el-form ref="logInForm" :model="logInForm" :rules="logInRules" label-width="50px">
        <el-form-item label="角色" prop="role">
          <el-radio-group v-model="logInForm.role">
            <el-radio label="1" border>Student</el-radio>
            <el-radio label="2" border>Company</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input id="email" v-model="logInForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" id="pass" v-model="logInForm.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('logInForm')" class="log">登录</el-button>
          <a class="toSignUp" @click="goSignUp">还没账号，立即注册</a>
        </el-form-item>
      </el-form>
    </div>
    <!--<div class="companyLogInSection">-->
    <!--<el-form ref="companyLogInForm" :model="companyLogInForm" label-width="40px">-->
    <!--<p class="title">Company</p>-->
    <!--<el-form-item label="邮箱">-->
    <!--<el-input id="cEMail" v-model="companyLogInForm.cEMail" placeholder="请输入联系邮箱"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="密码">-->
    <!--<el-input id="cPassword" v-model="companyLogInForm.cPassword" placeholder="请输入密码"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item>-->
    <!--<el-button type="primary" @click="onSubmit" class="log">登录</el-button>-->
    <!--<a class="toCompanySignUp" @click="goCompanySignUp">还没账号，立即注册</a>-->
    <!--</el-form-item>-->
    <!--</el-form>-->
    <!--</div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        logInForm: {
          role: '1',
          email: '',
          pass: ''
        },
        logInRules: {
          role: [
            {required: true, message: '请选择登录角色', trigger: 'change'}
          ],
          email: [
            {required: true, message: '请输入登录邮箱', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goSignUp() {
        if (this.logInForm.role === '1') {
          this.$router.push({path: '/signUp/student'});
        } else {
          this.$router.push({path: '/signUp/company'});
        }
      }
      /* goCompanySignUp() {
       this.$router.push({path: '/signUp/company'});
       } */
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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    h1 {
      padding-top: 135px;
      text-align: center;
      font-size: 31px;
      font-weight: 400;
      line-height: 115%;
      letter-spacing: 0.7px;
      margin-bottom: 16px;
    }
    .bothLogInSection {
      text-align: left;
      margin: 0 30px;
      padding-top: 20px;
      padding-bottom: 20px;
      .el-form-item__label, .el-radio {
        color: #fff;
      }
      .log {
        margin-right: 10px;
      }
      .toSignUp {
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .logInSection {
      h1 {
        font-size: 35px;
        margin-bottom: 50px;
      }
      .bothLogInSection {
        display: inline-block;
        width: 350px;
        margin: auto;
        padding: 20px 30px 10px;
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        border-radius: 5px;
      }
    }
  }
</style>
