<template>
  <div class="emojiBigBox">
    <el-input
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 6}"
      placeholder="请输入内容"
      resize="none"
      v-model="value">
    </el-input>
    <div class="icon clearfix">
      <i class="icon iconfont icon-face" @click="showEmoji = !showEmoji"></i>
      <el-button type="success" size="small" @click="submit" class="submit">提交</el-button>
      <transition name="fade" mode="">
        <div class="emoji-box" v-if="showEmoji" >
          <emoji @select="selectEmoji"></emoji>
          <span class="pop-arrow arrow"></span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import emoji from './emoji.vue';
  export default {
    data () {
      return {
        value: '',
        showEmoji: false,
        data: []
      };
    },
    methods: {
      selectEmoji (code) {
        this.showEmoji = false;
        this.value += code;
      },
      submit () {
        this.data.push(this.value);
        this.value = '';
      }
    },
    components: {
      emoji
    }
  };
</script>

<style lang="scss" type="text/scss">
.emojiBigBox {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto ;
  width: 500px;
  z-index: 10;
  .icon {
    position: relative;
    margin-top: 20px;
    width: 100%;
    .iconfont {
      cursor: pointer;
      color: #F7BA2A;
    }
    .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
    .fade-enter, .fade-leave-active { opacity: 0; }
    .fade-move { transition: transform .4s; }
    .emoji-box {
      position: absolute;
      z-index: 10;
      left: -10px;
      top: 24px;
      box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
      background: white;
      .arrow {
        left: 10px;
      }
    }
  }
  .submit {
    float: right;
  }
}
</style>
