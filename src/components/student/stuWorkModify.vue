<template>
  <div class="stuWorkModifyBox">
    <el-button @click="onChangeModifyStatus" class="modify" :disabled="!disabledAttr">开始修改</el-button>
    <el-form ref="workItemModify" :model="workItemModify" :rules="stuWorkModifyRules" label="top">
      <el-form-item label="作品标题" prop="work_name">
        <el-input :disabled="disabledAttr" v-model="workItemModify.work_name"></el-input>
      </el-form-item>
      <el-form-item label="作品简介" prop="work_summary">
        <el-input :disabled="disabledAttr" type="textarea" :rows="2" v-model="workItemModify.work_summary"></el-input>
      </el-form-item>
      <el-form-item label="图片上传(最多上传5张)" v-show="isUploadArticle">
        <!--action为必选参数，上传的地址
            auto-upload是否选取文件后立即上传
        -->
        <el-upload
          style="margin-top: 50px; text-align: left"
          action="http://upload-z2.qiniup.com/"
          list-type="picture-card"
          :file-list="photosList"
          ref="uploadWorks"
          :data="postData"
          :auto-upload="false"
          :limit="5"
          :disabled="disabledAttr"
          :on-exceed="handleExceed"
          :before-upload="beforeUpload"
          :on-success="handleSuccess"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="workItemModify.dialogVisible">
          <img width="100%" :src="workItemModify.dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="作品描述 (若是程序作品最好附加作品链接方便进一步了解该作品)">
        <quill-editor
          :disabled="disabledAttr"
          style="margin-top: 50px;"
          v-model="workItemModify.work_desc"
          ref="myQuillEditor"
        >
        </quill-editor>
      </el-form-item>
      <el-button plain class="submit" @click="onModifySubmit('workItemModify')">修改作品</el-button>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        workItemModify: {
          work_name: '',
          work_summary: '',
          work_desc: '',
          dialogVisible: false,
          dialogImageUrl: ''
        },
        photosList: [],
        isUploadArticle: true,
        postData: {
          token: ''
        },
        imageUrlList: '',
        disabledAttr: true,
        stuWorkModifyRules: {
          work_name: [
            { required: true, message: '请输入作品名称', trigger: 'blur' }
          ],
          work_summary: [
            { required: true, message: '请输入作品简介', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      onChangeModifyStatus() {
        this.disabledAttr = !this.disabledAttr;
      },
      // 超过限制个数时提醒用户
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeUpload() {
        return this.$ajax.get('/api/getUpToken.php').then(res => {
          console.log('res', res);
          this.postData.token = res.data;
        });
      },
      // 图片上传七牛云后所做的操作
      handleSuccess(res) {
        const imageUrl = 'http://p6c2yqflv.bkt.clouddn.com/' + res.key;
        this.imageUrlList.push(imageUrl);
      },
      // 删除图片
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.$message('已删除一张图片');
      },
      onModifySubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 利用一个弹框确认，保证图片上传七牛云成功，能获取到图片路径
            this.$confirm('是否确认修改作品?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let params = new URLSearchParams();
              params.append('action', 'stuModifyWork');
              params.append('workId', this.workItemModify.work_id);
              params.append('wName', this.workItemModify.work_name);
              params.append('wSummary', this.workItemModify.work_summary);
              params.append('wDesc', this.workItemModify.work_desc);
              this.$ajax.post('/api/studentBox.php', params)
                .then((res) => {
                  console.log('stuModifyWork res:', res);
                  if (res.data === 1) {
                    this.$message({
                      message: '作品信息修改成功',
                      type: 'success'
                    });
                    this.disabledAttr = true;
                    this.$router.push('/summary');
                  } else if (res.data === 1) {
                    this.$message('作品信息没做修改');
                  } else {
                    this.$message.error('作品信息修改失败');
                  }
                });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消上传'
              });
            });
          } else {
            console.log('stuModifyWork error submit!!');
            return false;
          }
        });
      }
    },
    mounted() {
      this.disabledAttr = true;
      this.workItemModify = this.$route.params.workItem; // 拿到router传过来的参数，需要加this
      this.photosList = this.workItemModify.work_photo.split(',');
      for (var i = 0; i < this.photosList.length; i++) {
        this.photosList[i] = {url: this.photosList[i]};
      }
      if (this.workItemModify.cat_id === 3) {
        this.isUploadArticle = false;
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  .stuWorkModifyBox {
    background-color: #fff;
    padding: 20px 50px;
    .ql-image, .ql-video {
      display: none !important;
    }
    .ql-picker {
      height: 40px !important;
    }
    .submit {
      width: 150px;
      background: #50e3ce;
      color: #fff;
      border-radius: 5px;
      text-align: center;
    }
    .el-radio {
      margin-bottom: 10px;
    }
  }
</style>
