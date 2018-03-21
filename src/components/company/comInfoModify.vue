<template>
  <div class="comInfoModify">
    <el-form ref="comInfoModifyForm" :model="comInfoModifyForm" label-width="80px">
      <el-form-item label="公司名称">
        <el-input id="cName" v-model="comInfoModifyForm.cName" placeholder="请输入公司名称"></el-input>
      </el-form-item>
      <el-form-item label="公司地址">
        <area-cascader :level='1' v-model="comInfoModifyForm.province" placeholder="请选择省市区"></area-cascader>
        <el-input id="cAddress" class="cAddress" v-model="comInfoModifyForm.cAddress" placeholder="请输入街道地址"></el-input>
      </el-form-item>
      <el-form-item label="法定人">
        <el-input id="cBoss" class="cBoss" v-model="comInfoModifyForm.cBoss" placeholder="请输入公司法定人姓名"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input id="cPhone" v-model="comInfoModifyForm.cPhone" placeholder="请输入联系电话"></el-input>
      </el-form-item>
      <el-form-item label="联系邮箱">
        <el-input id="cEMail" v-model="comInfoModifyForm.cEMail" placeholder="请输入联系邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input id="cPassword" v-model="comInfoModifyForm.cPassword" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input id="cPasswordAgain" v-model="comInfoModifyForm.cPasswordAgain" placeholder="请再次确认密码"></el-input>
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
        <el-button @click="onSubmit" class="registry">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        imageUrl: '',
        comInfoModifyForm: {
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
  .comInfoModify {
    padding: 20px;
    text-align: center;
    background-color: #fff;
    .cAddress {
      margin-top: 10px;
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
