<template>
  <div class="companySignUp">
    <h1>Company Sign Up</h1>
    <div class="companySignUpSection">
      <el-form ref="signUpForm" :model="signUpForm" label-width="80px">
        <el-form-item label="公司名称">
          <el-input id="cName" v-model="signUpForm.cName" placeholder="请输入公司名称"></el-input>
        </el-form-item>
        <el-form-item label="公司地址">
          <el-select v-model="signUpForm.province" clearable filterable placeholder="省" size="10px">
            <el-option
              v-for="item in signUpForm.grades"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="signUpForm.city" class="cAddressSelect" clearable filterable placeholder="市" size="10px">
            <el-option
              v-for="item in signUpForm.grades"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="signUpForm.town" class="cAddressSelect" clearable filterable placeholder="区/镇" size="10px">
            <el-option
              v-for="item in signUpForm.grades"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input id="cAddress" class="cAddress" v-model="signUpForm.cAddress" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input id="cPhone" v-model="signUpForm.cPhone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱">
          <el-input id="cEMail" v-model="signUpForm.cEMail" placeholder="请输入联系邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="registry">立即注册</el-button>
          <a class="toLogIn" @click="goLogIn">已有账号，立即登录</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        signUpForm: {
          cName: '',
          grades: [{
            value: '选项1',
            label: '大一'
          }, {
            value: '选项2',
            label: '大二'
          }, {
            value: '选项3',
            label: '大三'
          }, {
            value: '选项4',
            label: '大四'
          }],
          province: '',
          city: '',
          town: '',
          cAddress: '',
          cPhone: '',
          cEMail: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('registry');
      },
      goLogIn() {
        this.$router.push({path: '/logIn'});
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  body {
    background-image: url(../bg03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
  }
  .companySignUp {
    text-align: center;
    color: #fff;
    h1 {
      padding-top: 96px;
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      line-height: 115%;
      letter-spacing: 0.7px;
      margin-bottom: 30px;
    }
    .companySignUpSection {
      text-align: left;
      padding: 0 30px;
      .el-form-item__label {
        color: #fff;
      }
      .cAddressSelect {
        margin-top: 10px;
        margin-left: 0;
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
        padding-top: 20px;
        padding-bottom: 10px;
        -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        -moz-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        box-shadow: 0 2px 5px rgba(0,0,0,.4);
        border-radius: 5px;
        .cAddressSelect {
          margin-top: 0;
          margin-left: 10px;
        }
      }
    }
  }
</style>
