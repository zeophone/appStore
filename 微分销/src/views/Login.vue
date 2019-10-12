<template>
  <div class="login">
    <div class="logo">
      <div class="img"><img :src="require('../assets/logo.png')" alt=""></div>
    </div>
    <div class="form">
      <div class="phone">
        <input class="input" type="number" v-model="mobile" placeholder="请输入手机号码">
        <i class="cubeic-mobile-phone"></i>
      </div>
      <div class="yzm">
        <input type="number" v-model="code" placeholder="请输入验证码">
        <span class="take" @click="sendYzm">{{tit}}</span>
      </div>
      <div class="submit" @click="submit">立即登陆</div>
    </div>
  </div>
</template>
<script>
import http from "@/service";
export default {
  data() {
    return {
      mobile: "",
      code: "",
      tit: "获取验证码",
      djs: 60,
      disabled: false,
      isFocus: true
    };
  },
  methods: {
    sendYzm() {
      if (this.disabled) return;
      //验证号码格式
      let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!myreg.test(this.mobile)) {
        const toast = this.$createToast({
          txt: "手机号码格式不正确",
          type: "text"
        });
        toast.show();
        return false;
      }
      //请求验证码
      http
        .post("/distributor/login/send_msg", { mobile: this.mobile })
        .then(res => {
          if (res.code == 1) {
            this.disabled = true;
            this.tit = `重新获取(${this.djs}秒)`;
            let timer = setInterval(() => {
              this.djs -= 1;
              this.tit = `重新获取(${this.djs}秒)`;
              if (this.djs === 0) {
                clearInterval(timer);
                this.disabled = false;
                this.djs = 60;
                this.tit = "重新获取";
              }
            }, 1000);
          } else {
            const toast = this.$createToast({
              txt: res.msg,
              type: "text"
            });
            toast.show();
          }
        });
    },
    submit() {
      //验证号码格式
      let myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!myreg.test(this.mobile)) {
        const toast = this.$createToast({
          txt: "手机号码格式不正确",
          type: "text"
        });
        toast.show();
        return false;
      }
      if (this.code == "") {
        const toast = this.$createToast({
          txt: "验证码不能为空",
          type: "text"
        });
        toast.show();
        return;
      }
      http
        .post("/distributor/login/wap", {
          mobile: this.mobile,
          code: this.code
        })
        .then(res => {
          if (res.code == 1) {
            const toast = this.$createToast({
              txt: "登陆成功",
              type: "text"
            });
            toast.show();
            localStorage.setItem("wfx_token", res.data.token);
            setTimeout(() => {
                if(res.data.is_new==1){
                    this.$router.push("/home");
                }else{
                     this.$router.push("/");
                }
            }, 2000);
          } else {
            const toast = this.$createToast({
              txt: res.msg,
              type: "text"
            });
            toast.show();
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: #f6f8f8;
  font-size: 36 * 0.5px;

  .logo {
    padding-top: 30%;
    padding-bottom: 10%;
    .img {
      width: 554 * 0.5px;
      height: 76 * 0.5px;
      background-size: 100%;
      margin-left: 50%;
      transform: translateX(-50%);
      img{width: 100%;height: 100%;}
    }
  }
  .form {
    padding: 40 * 0.5px;
    .phone {
      position: relative;
      margin-bottom: 20 * 0.5px;
      .input {
        width: 100%;
        border: 2 * 0.5px solid #ccc;
        border-radius: 12 * 0.5px;
        height: 80 * 0.5px;
        line-height: 80 * 0.5px;
        outline: none;
        padding-left: 80 * 0.5px;
      }
      i {
        position: absolute;
        left: 20 * 0.5px;
        top: 20 * 0.5px;
        font-size: 40 * 0.5px;
        color: #ccc;
      }
    }
    .yzm {
      display: flex;
      width: 100%;
      margin-bottom: 60 * 0.5px;
      input {
        border: 2 * 0.5px solid #ccc;
        border-radius: 12 * 0.5px;
        height: 80 * 0.5px;
        line-height: 80 * 0.5px;
        outline: none;
        margin-right: 20 * 0.5px;
        flex-shrink: 0;
        width: 440 * 0.5px;
        padding-left: 60 * 0.5px;
      }
      .take {
        height: 80 * 0.5px;
        line-height: 80 * 0.5px;
        border: 2 * 0.5px solid #01aaaf;
        color: #01aaaf;
        border-radius: 12 * 0.5px;
        font-size: 28 * 0.5px;
        flex-shrink: 0;
        text-align: center;
        width: 210 * 0.5px;
      }
    }
    .submit {
      width: 100%;
      height: 90 * 0.5px;
      line-height: 90 * 0.5px;
      color: #fff;
      background: #00abaf;
      border-radius: 10 * 0.5px;
      text-align: center;
    }
  }
}
</style>

