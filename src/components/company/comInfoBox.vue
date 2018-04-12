<template>
  <div class="comInfoBox">
    <div class="basicInfo">
      <div class="infoMain">
        <el-form ref="basicInfoForm" :model="basicInfoForm" label-width="50px">
          <el-form-item label="简介">
            <el-input type="textarea" :rows="6" v-model="basicInfoForm.comIntro" placeholder="简单介绍公司情况"></el-input>
          </el-form-item>
          <el-button plain class="submit" @click="onExtendSubmit">提交</el-button>
        </el-form>
      </div>
    </div>
    <div class="passwordModify">
      <div class="grayBox">
        <div class="pswMain">
          <el-form ref="pswModifyForm" :model="pswModifyForm" :rules="pswModifyRules" label-width="91px">
            <el-form-item label="原始密码" prop="cOldPassword">
              <el-input type="password" v-model="pswModifyForm.cOldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="cNewPassword">
              <el-input type="password" v-model="pswModifyForm.cNewPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="cNewPasswordAgain">
              <el-input type="password" v-model="pswModifyForm.cNewPasswordAgain"></el-input>
            </el-form-item>
            <el-button plain class="submit" @click="onPasswordSubmit('pswModifyForm')">确认修改</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getCookie} from '../../assets/js/cookie.js';
  export default {
    data () {
      var cNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.pswModifyForm.cNewPasswordAgain !== '') {
            this.$refs.pswModifyForm.validateField('cNewPasswordAgain');
          }
          callback();
        }
      };
      var checkcNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.pswModifyForm.cNewPassword) {
          callback(new Error('两次输入的新密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        imageUrl: '',
        basicInfoForm: {
          comIntro: ''
        },
        pswModifyForm: {
          cOldPassword: '',
          cNewPassword: '',
          cNewPasswordAgain: ''
        },
        pswModifyRules: {
          cOldPassword: [
            {required: true, message: '请输入旧密码', trigger: 'change'}
          ],
          cNewPassword: [
            {required: true, validator: cNewPass, trigger: 'blur'},
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
          ],
          cNewPasswordAgain: [
            {required: true, validator: checkcNewPass, trigger: 'blur'}
          ]
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
      },
      onExtendSubmit() {
        if (this.basicInfoForm.comIntro) {
          let params = new URLSearchParams();
          params.append('action', 'ConsummateComInfo');
          params.append('comEmail', getCookie('comEmail'));
          params.append('comDesc', this.basicInfoForm.comIntro);
          this.$ajax.post('/api/companyBox.php', params)
            .then((res) => {
              console.log(' ConsummateComInfo res:', res);
              if (res.data === 1) {
                this.$message({message: '企业简介补充成功！', type: 'success'});
              } else {
                this.$message.error('企业简介补充失败！');
              }
            });
        } else {
          this.$message.error('请填写相关信息！');
        }
      },
      onPasswordSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            let params = new URLSearchParams();
            params.append('action', 'comChangePsw');
            params.append('comEmail', getCookie('comEmail'));
            params.append('comOldPsw', this.pswModifyForm.cOldPassword);
            params.append('comNewPsw', this.pswModifyForm.cNewPassword);
            this.$ajax.post('/api/companyBox.php', params)
              .then((res) => {
                console.log('comChangePsw res:', res);
                if (res.data === 1) {
                  this.$message({message: '新密码修改成功！', type: 'success'});
                } else if (res.data === -1) {
                  this.$message.error('旧密码输入错误！');
                } else {
                  this.$message.error('密码修改失败！');
                }
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .comInfoBox {
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
          padding: 30px 9px;
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
