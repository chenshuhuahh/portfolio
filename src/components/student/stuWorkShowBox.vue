<template>
  <div class="stuWorkShowBox">
    <div class="worksGrid">
      <div class="imageGrid">
        <img src="./15.jpg" alt="" class="imgResponsive"/>
        <div class="imagePos">
          <a class="seeIcon" href="#"><i class="el-icon-view"></i></a>
        </div>
      </div>
      <div class="infoGrid">
        <div class="workName"><h4>指鹿为马</h4><i class="el-icon-star-off">5</i></div>
        <p class="workDesc">怕的金额宿舍顶顶顶顶</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    }
  };
</script>

<style lang="scss" type="text/scss">
  .stuWorkShowBox {
    .worksGrid {
      margin: auto;
      padding: 15px;
      width: 250px;
      height: 350px;
      background: #fff;
      .imageGrid {
        position: relative;
        height: 250px;
        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .imagePos {
          display: none;
        }
        &:hover {
          .imagePos {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.5);
            .seeIcon {
              display: inline-block;
              width: 40px;
              height: 40px;
              line-height: 40px;
              border-radius: 50%;
              background: #f74e55;
              font-size: 20px;
              font-weight: 700;
              color: #fff;
              margin-top: 11%;
            }
          }
        }
      }
      .infoGrid {
        text-align: left;
        margin-top: 20px;
        .workName {
          font-size: 20px;
          h4 {
            display: inline-block;
          }
          i {
            vertical-align: top;
            float: right;
          }
        }
        .workDesc {
          margin-top: 20px;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .stuWorkShowBox {
      .worksGrid {
        margin: 0;
      }
    }
  }
</style>
