<template>
  <div class="stuInfoBox">
    <div class="basicInfo">
      <div class="infoMain">
        <el-form ref="basicInfoForm" :model="basicInfoForm" label-width="60px">
          <el-form-item label="简介">
            <el-input type="textarea" :rows="6" v-model="basicInfoForm.stuIntro" placeholder="简单介绍自己"></el-input>
          </el-form-item>
          <el-button plain class="submit" @click="onExtendSubmit">提交</el-button>
        </el-form>
      </div>
    </div>
    <div class="passwordModify">
      <div class="grayBox">
        <div class="pswMain">
          <el-form ref="pswModifyForm" :model="pswModifyForm" :rules="pswModifyRules" label-width="91px">
            <el-form-item label="原始密码" prop="sOldPassword">
              <el-input type="password" v-model="pswModifyForm.sOldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="sNewPassword">
              <el-input type="password" v-model="pswModifyForm.sNewPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="sNewPasswordAgain">
              <el-input type="password" v-model="pswModifyForm.sNewPasswordAgain"></el-input>
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
      var sNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.pswModifyForm.sNewPasswordAgain !== '') {
            this.$refs.pswModifyForm.validateField('sNewPasswordAgain');
          }
          callback();
        }
      };
      var checksNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.pswModifyForm.sNewPassword) {
          callback(new Error('两次输入的新密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        basicInfoForm: {
          stuIntro: ''
        },
        pswModifyForm: {
          sOldPassword: '',
          sNewPassword: '',
          sNewPasswordAgain: ''
        },
        pswModifyRules: {
          sOldPassword: [
            {required: true, message: '请输入旧密码', trigger: 'change'}
          ],
          sNewPassword: [
            {required: true, validator: sNewPass, trigger: 'blur'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
          ],
          sNewPasswordAgain: [
            {required: true, validator: checksNewPass, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      onExtendSubmit() {
        if (this.basicInfoForm.stuIntro) {
          let params = new URLSearchParams();
          params.append('action', 'ConsummateStuInfo');
          params.append('stuEmail', getCookie('stuEmail'));
          params.append('stuDesc', this.basicInfoForm.stuIntro);
          this.$ajax.post('/api/studentBox.php', params)
            .then((res) => {
              console.log('ConsummateStuInfo res:', res);
              if (res.data === 1) {
                this.$message({message: '个人信息补充成功！', type: 'success'});
              } else {
                this.$message.error('个人信息补充失败！');
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
            params.append('action', 'stuChangePsw');
            params.append('stuEmail', getCookie('stuEmail'));
            params.append('stuOldPsw', this.pswModifyForm.sOldPassword);
            params.append('stuNewPsw', this.pswModifyForm.sNewPassword);
            this.$ajax.post('/api/studentBox.php', params)
              .then((res) => {
                console.log('stuChangePsw res:', res);
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
