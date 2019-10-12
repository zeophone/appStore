<template>
  <div class="home">
    <header>
      <i class="cubeic-back" @click="back"></i>
      业务设置
      <router-link to="/commission" replace>我的佣金</router-link>
    </header>
    <!-- <div class="tigs">
      <i class="cubeic-right"></i>选择呈现方式
    </div> -->
    <cube-tab-bar v-model="selectedLabel" :inline="true" show-slider>
      <cube-tab class="selectedItem" label="邀请链接" key="邀请链接"></cube-tab>
      <cube-tab class="selectedItem" label="邀请二维码" key="邀请二维码"></cube-tab>
    </cube-tab-bar>
    <cube-tab-panels v-model="selectedLabel">
      <cube-tab-panel label="邀请链接" key="邀请链接">
        <div class="button">
            <span v-for="(item,i) in ['智能起名','智能测名']" :class="{on:i==checkI}" @click="checkType(i)" :key="i">{{item}}</span>
        </div>
        <div class="url">
          <input type="text" v-model="code">
          <div class="copy" v-clipboard="code" @success="copySuccess">复制邀请链接</div>
        </div>
      </cube-tab-panel>
      <cube-tab-panel label="邀请二维码" key="邀请二维码">
        <div class="ewm">
          <div class="img">
            <div id="qrcode" ref="qrcode"></div>
          </div>
          <div class="save" @click="savePic">长按保存二维码</div>
        </div>
      </cube-tab-panel>
    </cube-tab-panels>
  </div>
</template>

<script>
import http from "@/service";
import QRcode from "qrcodejs2";
export default {
  name: "home",
  data() {
    return {
      selectedLabel: "邀请链接",
      code: "",
      url: location.origin+"/newqiming",
      checkI: 0
    };
  },
  created() {
    this.requst();
  },
  methods: {
      checkType(i){
          this.checkI=i;
          if(i==0){
              this.url=location.origin+"/newqiming";
          }else{
              this.url=location.origin+"/newqiming/ceming/index";
          }
          this.requst()
      },
      back(){
          this.$router.replace('/commission')
      },
    savePic(){
        const toast = this.$createToast({
          txt: "长按保存图片",
          type: "text"
        });
        toast.show();
    },
    qrcode() {
        document.getElementById('qrcode').innerHTML='';
      let qrcode = new QRcode("qrcode", {
        width: 150,
        height: 150,
        text: this.code + '&ewm=1'
      });
      qrcode.clear();
      qrcode.makeCode(this.code)
    },
    requst() {
            http.post('/distributor/wap/get_ad_code ').then(res=>{
                this.code =  this.url + "?wap=1&ad_code_id=" + res.data.ad_code_id;
                this.$nextTick(()=>{
                    this.qrcode();
                })               
            })    
    },
    copySuccess(){

       let router=confirm("复制成功！确认前往微信分享给好友。");
       if(router) {
           window.location.href = "weixin://";
       }
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.home {
  font-size: 32 * 0.5px;
  header {
    width: 100%;
    position: relative;
    text-align: center;
    height: 90 * 0.5px;
    line-height: 90 * 0.5px;
    border-bottom: 2 * 0.5px solid #e1e1e1;
    i {
      font-size: 40 * 0.5px;
      position: absolute;
      left: 20 * 0.5px;
    }
    a{
        color: #999;
        font-size: 14px;
        position: absolute;
        right: 10px;
    }
  }
    .selectedItem{
        height: 50px;
        line-height: 35px;
        font-size: 18px;
    }
  .tigs {
    display: flex;
    height: 100 * 0.5px;
    line-height: 100 * 0.5px;
    background: #f1f1f1;
    color: #ff006f;
    padding-left: 35%;
    i {
      font-size: 42 * 0.5px;
    }
  }
  .url {
    width: 100%;
    padding: 80 * 0.5px;
    input {
      width: 100%;
      border-radius: 12 * 0.5px;
      height: 90 * 0.5px;
      line-height: 90 * 0.5px;
      border: 2 * 0.5px solid #ccc;
      margin-bottom: 60 * 0.5px;
      padding: 20 * 0.5px;
      outline: none;
    }
  }
  .ewm {
    padding-top: 40 * 0.5px;
    .img {
        display: flex;
    align-items: center;
    justify-content: center;
      width: 400 * 0.5px;
      height: 400 * 0.5px;
      border: 2 * 0.5px solid #ccc;
      margin: 0 auto 40px;
    }
  }
  .button{
      padding-top: 40px;
      text-align: center;
      span{
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 6px;
          color: #777;
      }
      span:nth-of-type(1){
          margin-right: 20px;
      }
      .on{
          color: #01aaaf;
          border: 1px solid #01aaaf;
      }
  }
  .copy {
    margin: 0 auto;
    height: 80 * 0.5px;
    width: 400 * 0.5px;
    background: #01aaaf;
    color: #fff;
    line-height: 80 * 0.5px;
    text-align: center;
    border-radius: 12 * 0.5px;
  }
  .save{
          margin: 0 auto;
    height: 80 * 0.5px;
    width: 400 * 0.5px;
    line-height: 80 * 0.5px;
    text-align: center;
  }
}
</style>

