<template>
  <div>
    <top-block></top-block>
    <section class="smallBlock">
      <span>今天就开始创建您的免费在线作品展示网站。</span>
      <div class="button"><router-link to="/signUp">立即开始</router-link></div>
    </section>
    <niche-block></niche-block>
  </div>
</template>

<script type="text/ecmascript-6">
import topBlock from './topBlock/topBlock';
import nicheBlock from './nicheBlock/nicheBlock';
export default {
  data() {
    return {};
  },
  components: {
    topBlock,
    nicheBlock
  }
};
</script>

<style lang="scss" type="text/scss">
.smallBlock {
  background-color: #27272b;
  text-align: center;
  color: gray;
  font-size: 14px;
  padding: 20px;
  span {
    color: #fff;
  }
  .button {
    display: inline-block;
    margin-top: 10px;
    padding: 6px 12px;
    border: 1px solid #44b2e2;
    cursor: pointer;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    a {
      color: #44b2e2;
    }
  }
}

@media (min-width: 768px) {
  .smallBlock {
    padding: 12px 20px;
    .button {
      margin-right: 10px;
    }
  }
}
</style>
