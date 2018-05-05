<template>
  <div class="comInfoModify">
    <el-button @click="onChangeModifyStatus" class="modify" :disabled="!disabledAttr">开始修改</el-button>
    <el-form ref="comInfoModifyForm" :model="comInfoModifyForm" :rules="comInfoModifyRules" label-width="80px">
      <el-form-item label="公司名称" prop="com_name">
        <el-input id="cName" :disabled="disabledAttr" v-model="comInfoModifyForm.com_name" placeholder="请输入公司名称"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="com_address">
        <el-input id="cAddress" :disabled="disabledAttr" v-model="comInfoModifyForm.com_address" placeholder="请输入街道地址"></el-input>
      </el-form-item>
      <el-form-item label="法定人" prop="com_boss">
        <el-input id="cBoss" :disabled="disabledAttr" v-model="comInfoModifyForm.com_boss" :value="comInfoModifyForm.com_boss" placeholder="请输入公司法定人姓名"></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱" prop="com_email">
        <el-input id="cEMail" :disabled="disabledAttr" v-model="comInfoModifyForm.com_email" placeholder="请输入联系邮箱"></el-input>
      </el-form-item>
      <el-form-item label="营业执照">
        <el-upload
          :disabled="disabledAttr"
          class="avatar-uploader"
          action="http://upload-z2.qiniup.com/"
          :show-file-list="false"
          :on-success="handleLicenseSuccess"
          :before-upload="beforeLicenseUpload">
          <img v-if="comInfoModifyForm.com_license" :src="comInfoModifyForm.com_license" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit('comInfoModifyForm')" class="registry" :disabled="disabledAttr">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getCookie} from '../../assets/js/cookie.js';
  export default {
    data () {
      return {
        postData: {
          token: ''
        },
        disabledAttr: true,
        comInfoModifyForm: {
          com_name: '',
          com_address: '',
          com_boss: '',
          com_email: '',
          com_license: ''
        },
        comInfoModifyRules: {
          com_name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' }
          ],
          com_address: [
            { required: true, message: '请输入企业地址', trigger: 'blur,change' }
          ],
          com_boss: [
            { required: true, message: '请输入企业法定人', trigger: 'blur' }
          ],
          com_email: [
            { required: true, message: '请输入企业联系邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      onChangeModifyStatus() {
        this.disabledAttr = !this.disabledAttr;
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = new URLSearchParams();
            params.append('action', 'comModifyInfo');
            params.append('comEmail', getCookie('comEmail'));
            params.append('cName', this.comInfoModifyForm.com_name);
            params.append('cAddress', this.comInfoModifyForm.com_address);
            params.append('cBoss', this.comInfoModifyForm.com_boss);
            params.append('cLicense', this.comInfoModifyForm.com_license);
            params.append('cEmail', this.comInfoModifyForm.com_email);
            this.$ajax.post('/api/companyBox.php', params)
              .then((res) => {
                console.log('company modify info res:', res);
                if (res.data === 1) {
                  this.$message({
                    message: '个人信息修改成功',
                    type: 'success'
                  });
                  this.disabledAttr = true;
                  this.$store.state.userName = this.comInfoModifyForm.com_name;
                  this.$router.push('/summary');
                } else {
                  this.$message.error('个人信息修改失败');
                }
              });
          } else {
            console.log('company modify info error submit!!');
            return false;
          }
        });
      },
      handleLicenseSuccess(res) {
        this.comInfoModifyForm.com_license = 'http://p6c2yqflv.bkt.clouddn.com/' + res.key;
        console.log('res cLicense', res);
      },
      beforeLicenseUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt4M = file.size / 1024 / 1024 < 4;

        if (!isJPG && !isPNG) {
          this.$message.error('上传营业执照图片是 JPG/PNG 格式!');
        }
        if (!isLt4M) {
          this.$message.error('上传营业执照图片大小不能超过 4MB!');
        }
        return (isJPG || isPNG) && isLt4M &&
          this.$ajax.get('/api/getUpToken.php').then(res => {
            console.log('company token res', res);
            this.postData.token = res.data;
          });
      }
    },
    mounted() {
      let params = new URLSearchParams();
      params.append('action', 'showBaseInfo');
      params.append('comEmail', getCookie('comEmail'));
      this.$ajax.post('/api/companyBox.php', params)
        .then((res) => {
          console.log('modify company Info res:', res);
          this.comInfoModifyForm = res.data;
        });
    }
  };
</script>

<style lang="scss" type="text/scss">
  .comInfoModify {
    padding: 20px;
    text-align: center;
    background-color: #fff;
    .modify {
      margin-bottom: 15px;
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
      width: 150px;
      background: #50e3ce;
      color: #fff;
      border-radius: 5px;
      text-align: center;
    }
  }
</style>
