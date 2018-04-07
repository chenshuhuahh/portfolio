<template>
  <div class="stuWorkUploadBox">
    <el-form ref="workUploadForm" :model="workUploadForm" label="top">
      <el-form-item label="作品分类">
        <el-radio-group v-model="workUploadForm.category" @change="handleCatChange">
          <el-radio label="1" border>摄影作品</el-radio>
          <el-radio label="2" border>设计作品</el-radio>
          <el-radio label="3" border>文章作品</el-radio>
          <el-radio label="4" border>程序作品</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="作品标题">
        <el-input v-model="workUploadForm.wName"></el-input>
      </el-form-item>
      <el-form-item label="作品简介">
        <el-input type="textarea" :rows="2" v-model="workUploadForm.wSummary"></el-input>
      </el-form-item>
      <el-form-item label="图片上传(最多上传5张)" v-show="isUploadArticle">
        <!--action为必选参数，上传的地址-->
        <el-upload
          style="margin-top: 50px; text-align: left"
          action="http://upload-z2.qiniup.com/"
          list-type="picture-card"
          :data="postData"
          :limit="5"
          :on-exceed="handleExceed"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="workUploadForm.dialogVisible">
          <img width="100%" :src="workUploadForm.dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="作品描述 (若是程序作品最好附加作品链接方便进一步了解该作品)">
        <quill-editor
          style="margin-top: 50px;"
          v-model="workUploadForm.detailContent"
          ref="myQuillEditor"
        >
        </quill-editor>
      </el-form-item>
      <div class="photoUpload">{{workUploadForm.detailContent}}</div>
      <el-button plain class="submit" @click="onUploadSubmit">上传作品</el-button>
    </el-form>

    <!--<div class="ql-container ql-snow">
      <div class="ql-editor" v-html="this.workUploadForm.detailContent">
      </div>
    </div>
    <div class="editorBox">
    </div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        postData: {
          token: ''
        },
        isUploadArticle: true,
        editorOption: {}, // 富文本编辑器配置
        workUploadForm: {
          category: '1',
          wName: '',
          wSummary: '',
          dialogVisible: false,
          dialogImageUrl: '',
          detailContent: '' // 富文本内容
        }
      };
    },
    methods: {
      handleCatChange() {
        if (this.workUploadForm.category === '3') {
          this.isUploadArticle = false;
        } else {
          this.isUploadArticle = true;
        }
      },
      // 超过限制个数时提醒用户
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      onUploadSubmit() {
        alert('upload');
      }
    },
    created() {
      this.$ajax.get('/api/getUpToken.php').then(res => {
        console.log('res', res);
        this.postData.token = res.data;
      });
    }
  };
</script>

<style lang="scss" type="text/scss">
  .stuWorkUploadBox {
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
