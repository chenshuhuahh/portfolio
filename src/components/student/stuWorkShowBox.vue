<template>
  <div class="stuWorkShowBox">
    <div class="worksGrid">
      <div class="imageGrid">
        <a href="#" class="workImage" target="_blank">
          <img src="./15.jpg" alt="" class="imgResponsive"/>
        </a>
        <a class="imagePos" href="#" target="_blank">
          <div class="seeIcon"><i class="el-icon-view"></i></div>
        </a>
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
        .workImage {
          img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
          }
        }
        .imagePos {
          display: none;
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
        .imageGrid {
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
                margin-top: 37%;
              }
            }
          }
        }
      }
    }
  }
</style>
