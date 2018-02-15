<template>
  <div class="studentSignUp">
    <h1>Student Sign Up</h1>
    <div class="studentSignUpSection">
      <el-form ref="signUpForm" :model="signUpForm" label-width="40px">
        <el-form-item label="姓名">
          <el-input id="sName" v-model="signUpForm.sName" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="学校">
          <el-input id="sSchool" v-model="signUpForm.sSchool" placeholder="请输入学校"></el-input>
        </el-form-item>
        <el-form-item label="年级">
          <el-select v-model="signUpForm.sGrade" clearable filterable placeholder="请选择年级">
            <el-option
              v-for="item in signUpForm.grades"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="signUpForm.sex" label="1" border>男</el-radio>
          <el-radio v-model="signUpForm.sex" label="2" border>女</el-radio>
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
          sName: '',
          sSchool: '',
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
          sGrade: '',
          sex: '1'
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
  .studentSignUp {
    text-align: center;
    color: #fff;
    h1 {
      padding-top: 135px;
      text-align: center;
      font-size: 31px;
      font-weight: 400;
      line-height: 115%;
      letter-spacing: 0.7px;
      margin-bottom: 30px;
    }
    .studentSignUpSection {
      text-align: left;
      padding: 0 30px;
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
    .studentSignUp {
      h1 {
        font-size: 35px;
      }
      .studentSignUpSection {
        width: 400px;
        margin: auto;
        padding-top: 20px;
        padding-bottom: 10px;
        -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        -moz-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        box-shadow: 0 2px 5px rgba(0,0,0,.4);
        border-radius: 5px;
      }
    }
  }
</style>
