<template>
  <div class="signUpSection">
    <h1>Choose Your Role</h1>
    <div class="signUpBlock">
      <div class="student" @click="goStudentSignUp">
        <div class="studentImg imageBox"></div>
        <p>STUDENT</p>
      </div>
      <div class="company" @click="goCompanySignUp">
        <div class="companyImg imageBox"></div>
        <p>COMPANY</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    },
    methods: {
      goStudentSignUp() {
        this.$router.push({path: '/signUp/student'});
      },
      goCompanySignUp() {
        this.$router.push({path: '/signUp/company'});
      }
    }
  };
</script>

<style lang="scss" type="text/scss">
  body {
    background-image: url(bg03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
  }
  .signUpSection {
    text-align: center;
    color: #fff;
    h1 {
      text-align: center;
      font-size: 31px;
      font-weight: 400;
      line-height: 115%;
      padding-top: 135px;
      letter-spacing: 0.7px;
      margin-bottom: 55px;
    }
    .signUpBlock {
      .imageBox {
        width: 80px;
        height: 80px;
        margin: 0 auto 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .student {
        width: 200px;
        display: inline-block;
        padding-right: 0;
        padding-bottom: 20px;
        border-right: none;
        border-bottom: 2px solid #fff;
        .studentImg {
          margin-bottom: 0;
          background-image: url(studentIcon.png);
        }
      }
      .company {
        padding-top: 50px;
        padding-left: 0;
        .companyImg {
          background-image: url(companyIcon.png);
        }
      }
    }
  }
  @media (min-width: 768px) {
    .signUpSection {
      h1 {
        font-size: 41px;
        margin-bottom: 70px;
      }
      .signUpBlock {
        width: 307px;
        margin: auto;
        padding: 20px 60px;
        -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        -moz-box-shadow: 0 2px 5px rgba(0,0,0,.4);
        box-shadow: 0 2px 5px rgba(0,0,0,.4);
        border-radius: 5px;
        .imageBox {
          width: 100px;
          height: 100px;
        }
        .student {
          width: auto;
          display: inline-block;
          padding-right: 50px;
          padding-bottom: 0;
          border-right: 2px solid #fff;
          border-bottom: none;
          .studentImg {
            margin-bottom: 20px;
          }
        }
        .company {
          display: inline-block;
          padding-left: 50px;
          padding-top: 0;
        }
      }
    }
  }
</style>
