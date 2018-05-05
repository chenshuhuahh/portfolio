<template>
  <div class="studentSignUp" v-loading="loading">
    <h1>Student Sign Up</h1>
    <div class="studentSignUpSection">
      <el-form ref="studentSignUpForm" :model="studentSignUpForm" :rules="stuSignUpRules" label-width="77px">
        <el-form-item label="姓名" prop="sName">
          <el-input id="sName" v-model="studentSignUpForm.sName" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="sEmail">
          <el-input id="sEmail" v-model="studentSignUpForm.sEmail" placeholder="邮箱将作为登录账号"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="sno">
          <el-input id="sno" v-model.number="studentSignUpForm.sno" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="学校" prop="sSchool">
          <el-input id="sSchool" v-model="studentSignUpForm.sSchool" placeholder="请输入学校"></el-input>
        </el-form-item>
        <el-form-item label="入学年份" prop="sGrade">
          <el-date-picker
            v-model="studentSignUpForm.sGrade"
            type="year"
            value-format="yyyy"
            placeholder="选择年"
            @change="getYearValue">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="学生证照">
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
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="studentSignUpForm.sex">
            <el-radio label="1" border>男</el-radio>
            <el-radio label="2" border>女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="sPassword">
          <el-input type="password" id="sPassword" v-model="studentSignUpForm.sPassword" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="sPasswordAgain">
          <el-input type="password" id="sPasswordAgain" v-model="studentSignUpForm.sPasswordAgain"
                    placeholder="请再次确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('studentSignUpForm')" class="registry">立即注册</el-button>
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
      let sPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.studentSignUpForm.sPasswordAgain !== '') {
            this.$refs.studentSignUpForm.validateField('sPasswordAgain');
          }
          callback();
        }
      };
      let checksPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.studentSignUpForm.sPassword) {
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
        loading: false,
        studentSignUpForm: {
          sName: '',
          sEmail: '',
          sno: '',
          sSchool: '',
          sGrade: '',
          sPassword: '',
          sPasswordAgain: '',
          sex: '1'
        },
        stuSignUpRules: {
          sName: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          sEmail: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ],
          sno: [
            {required: true, message: '请输入学号', trigger: 'blur'},
            {type: 'number', message: '请输入正确的学号格式', trigger: 'blur,change'}
          ],
          sSchool: [
            {required: true, message: '请输入学校名称', trigger: 'blur'}
          ],
          sGrade: [
            {required: true, message: '请选择入学年份', trigger: 'change'}
          ],
          sPassword: [
            {required: true, validator: sPass, trigger: 'blur'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ],
          sPasswordAgain: [
            {required: true, validator: checksPass, trigger: 'blur'}
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ]
        }
      };
    },
    methods: {
      getYearValue(val) {
        this.studentSignUpForm.sGrade = val;
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = new URLSearchParams();
            params.append('action', 'stuSignUp');
            params.append('sName', this.studentSignUpForm.sName);
            params.append('sno', this.studentSignUpForm.sno);
            params.append('sSchool', this.studentSignUpForm.sSchool);
            params.append('sGrade', this.studentSignUpForm.sGrade);
            params.append('sCard', this.imageUrl);
            params.append('sex', this.studentSignUpForm.sex);
            params.append('sEmail', this.studentSignUpForm.sEmail);
            params.append('sPassword', this.studentSignUpForm.sPassword);
            this.$ajax.post('/api/loginAndSignUp.php', params)
              .then((res) => {
                console.log('res:', res);
                if (res.data === 1) {
                  // 可以做一些邮箱的进一步验证再跳转登录界面！！！
                  this.$message({
                    message: '注册成功，即将跳转登录界面',
                    type: 'success'
                  });
                  this.loading = true;
                  setTimeout(function() {
                    this.loading = false;
                    this.$router.push({path: '/logIn'});
                  }.bind(this), 3000);
                } else {
                  this.$message.error('注册失败，请重新填写注册信息');
                }
              });
          } else {
            console.log('student sign up error submit!!');
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
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG && !isPNG) {
          this.$message.error('上传学生证图片是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传学生证图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M;
      }
    },
    created() {
      this.$ajax.get('/api/getUpToken.php').then(res => {
        console.log('student token res', res);
        this.postData.token = res.data;
      });
    }
  };
</script>

<style lang="scss" type="text/scss">
  .studentSignUp {
    background-image: url('http://p6c2yqflv.bkt.clouddn.com/staticImg/bg03.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    text-align: center;
    color: #fff;
    .el-input__prefix {
      left: 34px;
    }
    h1 {
      padding-top: 110px;
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
    .studentSignUp {
      h1 {
        padding-top: 135px;
        font-size: 35px;
      }
      .studentSignUpSection {
        width: 400px;
        margin: auto;
        padding-top: 20px;
        padding-bottom: 10px;
        margin-bottom: 0px;
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        box-shadow: 0 2px 5px rgba(0, 0, 0, .4);
        border-radius: 5px;
      }
    }
  }
</style>
