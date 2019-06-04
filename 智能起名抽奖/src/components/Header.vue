<template>
  <div class="header">
    <div class="lottery">
      <div class="bg_12"></div>
      <ul>
        <li :class="{on:checked==0}"></li>
        <li :class="{on:checked==1}"></li>
        <li :class="{on:checked==2}"></li>
        <li :class="{on:checked==7}"></li>
        <li @click="startLot"></li>
        <li :class="{on:checked==3}"></li>
        <li :class="{on:checked==6}"></li>
        <li :class="{on:checked==5}"></li>
        <li :class="{on:checked==4}"></li>
      </ul>
    </div>
    <div class="number">
      剩余抽奖次数：
      <span>{{number}}</span>次
    </div>
    <div class="rule">
      <span @click="activityRule">
        <i class="ss"></i>活动规则
      </span>
      <span @click="activityPrize">
        <i class="xx"></i>我的奖品
        <em class="Prize_num" v-if="prizeNum">{{prizeNum}}</em>
      </span>
    </div>
    <div class="item">
      <div class="tit">中奖名单</div>
      <div class="winning" v-if="winning">
        <ul :style="{transform: 'translateY('+late+'rem)',transition: sition}">
          <li v-for="(item,i) in winning" :key="i">
            <img class="url" :src="item.user_avatar" alt>
            <span class="name">
              {{item.surname}}{{item.sex==1?'先生':'女士'}}
              <span class="phone">[{{item.order_sn}}]</span>
            </span>
            <span class="text">抽中了</span>
            <span class="prize">{{prizeArr[i]}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="item">
      <div class="tit">活动奖品</div>
      <div class="picture">
        <div class="prize_pic" v-for="(item,i) in preview" :key="i">
          <img :src="item.url" @click="prizeDetail(item)">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="tit">活动规则</div>
      <div class="ruleInt">
        <dl>
          <dt>1.</dt>
          <dd>活动期间仅智能起名下单用户参与。</dd>
        </dl>
        <dl>
          <dt>2.</dt>
          <dd>下单用户可获得抽奖次数2次，奖品100%必中。</dd>
        </dl>
        <dl>
          <dt>3.</dt>
          <dd>重复抽中的奖品只能单次领取/使用，以奖品类型兑换。（例：iPad mini 64g 抽中多次，仅一次有效领取。）</dd>
        </dl>
        <dl>
          <dt>4.</dt>
          <dd>活动时间：2019年6月1日 至 2019年6月6日</dd>
        </dl>
        <dl>
          <dt>5.</dt>
          <dd>活动规则以起名网实际活动为准</dd>
        </dl>
        <dl style="
    padding-top: 0.15rem;
">
          <dt></dt>
          <dd>
            <b>领取说明</b>
          </dd>
        </dl>
        <dl>
          <dt>1.</dt>
          <dd>优惠券可以立即使用。</dd>
        </dl>
        <dl>
          <dt>2.</dt>
          <dd style="
    color: #ff7800;
">礼包等实物奖品请添加客服微信，我们将在3个工作日内将奖品邮寄给您。</dd>
        </dl>
        <dl>
          <dt>3.</dt>
          <dd>以下是本次活动的咨询客服，如有疑问自行咨询</dd>
        </dl>
      </div>
      <div class="ewm">
        <img :src="path" alt>
        <p data-clipboard-text>
          <span class="copyWechat" v-clipboard:copy="weixin" v-clipboard:success="onCopy">复制微信</span>
        </p>
      </div>
    </div>
    <Pop ref="pop" @replace="startLot" @myprize="myprize"></Pop>
    <Detail ref="detail"></Detail>
    <Prize ref="prize" :type="prizeType"></Prize>
    <div v-if="showBack" @click="back" class="bottom_fixed">
      <img :src="require('../assets/back.png')" alt>
      <span>返回下单起名、ipad、定字实物等你来抽</span>
    </div>
    <div style="text-align:center;" :style="{'padding-bottom':bott+'rem'}">
      <img
        src="https://static.quwangming.com/v3/newqiming/images/m/chuantong/copy.png"
        alt
        style="height:1rem;width:auto;vertical-align: top;"
      >
      <p
        style="font-size:0.24rem;color:#ffa194;padding:0.12rem 0 0.3rem;"
      >© 起名网免费起名,姓名测试打分 www.yw11.com</p>
    </div>
  </div>
</template>

<script>
import Pop from "./pop.vue";
import Prize from "./prize.vue";
import Detail from "./detail.vue";
import http from "../service";
export default {
  name: "Header",
  data() {
    return {
      checked: 7,
      path: "",
      bott: 1,
      weixin: "",
      number: 0,
      prizeNum: 0,
      onOff: true,
      showBack: true,
      late: 0,
      prizeArr: [],
      sition: "all 0.3s",
      prizeType: "rule",
      winning: null,
      alert: "你的抽奖次数为0，请查看我的奖品",
      preview: [
        {
          id: 0,
          name: "大师起名39元优惠券",
          url: require("../assets/prize1.png"),
          type: "",
          text: "找大师手工起名39元优惠券"
        },
        {
          id: 1,
          name: "大师挑名39元优惠券",
          url: require("../assets/prize2.png"),
          type: "",
          text: "找大师挑名字39元优惠券"
        },
        {
          id: 2,
          name: "定制水晶命名证书",
          url: require("../assets/prize3.png"),
          type: "实物",
          text: "24k亚克力水晶证书礼盒装"
        },
        {
          id: 3,
          name: "育儿大礼包",
          url: require("../assets/prize4.png"),
          type: "",
          text: "价值888元宝妈育儿电子书礼包"
        },
        {
          id: 4,
          name: "iPad mini 64g",
          url: require("../assets/prize5.png"),
          type: "实物",
          text: "苹果 iPad MINI 64G 银色版本"
        },
        {
          id: 5,
          name: "宝宝胎毛吊坠",
          url: require("../assets/prize6.png"),
          type: "实物",
          text: "31*25mm宝宝胎毛玉髓长命锁礼盒装"
        },
        {
          id: 6,
          name: "白玉印章",
          url: require("../assets/prize7.png"),
          type: "实物",
          text: "6*6*9cm白玉印章礼盒装，带证书、印章底座，免费篆刻姓名"
        },
        {
          id: 7,
          name: "签名设计",
          url: require("../assets/prize8.png"),
          type: "实物",
          text: "艺术签名设计3套，可设计不同风格，视频录制书写教程"
        }
      ]
    };
  },
  components: {
    Pop,
    Prize,
    Detail
  },
  created() {
    function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
    if (getQueryString("order_sn")) {
      localStorage.setItem("l_sn", getQueryString("order_sn"));
      this.showBack = false;
      this.bott = 0;
    } else {
      localStorage.removeItem("l_sn");
      this.alert = "您的抽奖次数为0，返回下单即获两次抽奖机会，100%必中！";
      this.$nextTick(() => {
        this.activityRule();
      });
    }
    http
      .query({
        order_sn: localStorage.getItem("l_sn")
      })
      .then(res => {
        if (res.data.code == 1) {
          this.number = res.data.data.num;
        }
      });
    let num = 0;
    setInterval(() => {
      this.sition = "all 0.3s";
      this.late -= 1.3;
      num++;
      if (num == this.winning.length - 3) {
        this.sition = "";
        this.late = 0;
        num = 0;
      }
    }, 2000);

    http.lottolist().then(res => {
      this.winning = res.data.data;
      let arr = [
        "大师挑名券",
        "大师起名券",
        "育儿大礼包",
        "大师签名设计",
        "宝宝胎毛吊坠",
        "白玉印章",
        "定制水晶命名证书",
        "iPad mini 64g",
        "定制水晶命名证书",
        "iPad mini 64g"
      ];
      for (let index = 0; index < this.winning.length; index++) {
        this.prizeArr.push(arr[Math.ceil(Math.random() * 10 - 1)]);
      }
    });

    http.ewm().then(res => {
      this.path = res.data.data.path;
      this.weixin = res.data.data.weixin;
    });

    http
      .giftlist({
        order_sn: localStorage.getItem("l_sn")
      })
      .then(res => {
        if (res.data.code == 1) {
          this.prizeNum = res.data.data.length;
        }
      });
  },
  methods: {
    prizeDetail(item) {
      this.$refs.detail.show(item);
    },
    onCopy() {
      alert("复制成功");
      window.location.href = "weixin://";
    },
    back() {
      history.go(-1);
    },
    myprize() {
      this.activityPrize();
    },
    activityPrize() {
      this.prizeType = "prize";
      this.$refs.prize.show();
    },
    activityRule() {
      this.prizeType = "rule";
      this.$refs.prize.show();
    },
    startLot() {
      if (this.number < 1) {
        alert(this.alert);
        return;
      }
      let zong = 0;
      let stop = false;
      let sound = 200;
      if (this.onOff) {
        this.onOff = false;
        let num = this.checked;

        let timer = setInterval(() => {
          this.checked = num;
          num++;
          if (num == 8) {
            num = 0;
          }
          if (zong == this.checked && stop) {
            clearInterval(timer);
            this.onOff = true;
            setTimeout(() => {
                http
                .giftlist({
                  order_sn: localStorage.getItem("l_sn")
                })
                .then(res => {
                  if (res.data.code == 1) {
                    this.prizeNum = res.data.data.length;
                  }
                });
              this.$refs.pop.show(zong);
            }, 1000);
          }
          if (sound > 10) {
            sound = sound / 10;
          }
        }, sound);

        http
          .lotto({
            order_sn: localStorage.getItem("l_sn")
          })
          .then(res => {
            if (res.data.code == 1) {
              this.number--;
              setTimeout(() => {
                stop = true;
                
              }, 5000);
              if (res.data.data.prob == 8) {
                zong = 0;
              } else {
                zong = 6;
              }
              
            }
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  padding-top: 5.1rem;
  background: url(../assets/bg_01.png) no-repeat 0 0,
    url(../assets/bg_02.png) no-repeat 0 1rem,
    url(../assets/bg_03.png) no-repeat 0 2rem,
    url(../assets/bg_04.png) no-repeat 0 3rem,
    url(../assets/bg_05.png) no-repeat 0 4rem,
    url(../assets/bg_06.png) no-repeat 0 5rem,
    url(../assets/bg_07.png) no-repeat 0 6rem,
    url(../assets/bg_08.png) no-repeat 0 7rem,
    url(../assets/bg_09.png) no-repeat 0 8rem,
    url(../assets/bg_10.png) no-repeat 0 9rem,
    url(../assets/bg_11.png) no-repeat 0 10rem;
  background-size: 100% 1rem;
  background-color: #fe5e48;
  .lottery {
    display: inline-block;
    position: relative;
    ul {
      padding-left: 0.95rem;
      overflow: hidden;
      width: 7.5rem;
      position: relative;
    }
    li {
      list-style: none;
      display: inline-block;
      width: 1.78rem;
      height: 1.42rem;
      margin-bottom: 0.05rem;
      margin-right: 0.12rem;
      border-radius: 0.1rem;
    }
    .on {
      background: rgba(252, 233, 17, 0.5);
    }
    .bg_12 {
      height: 5.52rem;
      position: absolute;
      left: 0;
      right: 0;
      top: -0.52rem;
      background-image: url(../assets/bg_12.png);
      background-size: cover;
      background-repeat: no-repeat;
      animation: stepAn steps(2) 0.5s infinite;
    }
  }
  .number {
    text-align: center;
    color: #fff;
    font-size: 0.26rem;
    padding-top: 1.1rem;
    span {
      color: #eaff00;
      font-size: 0.3rem;
      padding: 0 0.1rem;
    }
  }
  .rule {
    text-align: center;
    padding-top: 0.4rem;
    padding-bottom: 0.68rem;
    span {
      display: inline-block;
      width: 3.2rem;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
      color: #fff;
      font-size: 0.28rem;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 0.4rem;
      position: relative;
    }
    .Prize_num {
      position: absolute;
      width: 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      right: 0.1rem;
      top: -0;
      background: #cc483a;
      border: 2px solid #fff;
      border-radius: 50%;
    }
    .ss {
      display: inline-block;
      background: url("../assets/icon_ss.png") no-repeat 0 0;
      width: 0.32rem;
      height: 0.32rem;
      background-size: 100%;
      margin-right: 0.1rem;
      position: relative;
      top: 0.06rem;
    }
    .xx {
      display: inline-block;
      background: url("../assets/icon_xx.png") no-repeat 0 0;
      width: 0.32rem;
      height: 0.32rem;
      background-size: 100%;
      margin-right: 0.1rem;
      position: relative;
      top: 0.06rem;
    }
    span:nth-of-type(1) {
      margin-right: 0.3rem;
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .item {
    min-height: 3rem;
    width: 6.9rem;
    margin: 0 auto;
    background: url("../assets/item_01.png") no-repeat 0 0,
      url("../assets/item_02.png") no-repeat left bottom;
    background-size: 100% 1rem;
    background-color: #fff;
    margin-bottom: 0.68rem;
    border-radius: 0 0 0.3rem 0.3rem;
    .tit {
      font-size: 0.36rem;
      font-weight: bold;
      text-align: center;
      height: 1rem;
      line-height: 0.9rem;
      color: #fff;
    }
  }
  .ewm {
    width: 100%;
    text-align: center;
    padding-bottom: 0.6rem;
    img {
      display: inline-block;
      width: 4rem;
      height: 4rem;
    }
    .copyWechat {
      width: 3rem;
      height: 0.62rem;
      display: inline-block;
      background: #cd4a3c;
      border-radius: 0.5rem;
      line-height: 0.62rem;
      color: #fff;
      font-size: 0.3rem;
    }
  }
  .bottom_fixed {
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.1rem;
      position: relative;
      top: 0.05rem;
    }
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    text-emphasis: none;
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;
    box-shadow: 1px 0 2px rgba(0, 0, 0, 0.5);
  }
  .ruleInt {
    padding: 0.5rem 0.3rem 0;
    font-size: 0.3rem;
    line-height: 1.5;
  }
  .ruleInt dl {
    overflow: hidden;
    padding-bottom: 0.14rem;
  }
  .ruleInt dt {
    float: left;
    padding-right: 0.07rem;
  }
  .ruleInt dd {
    overflow: hidden;
  }

  .picture {
    padding: 0.2rem;
    .prize_pic {
      display: inline-block;
      width: 3.24rem;
      text-align: center;
      padding: 0.2rem 0.12rem 0;
      img {
        width: 3rem;
        height: 2rem;
      }
      p {
        padding-top: 0.1rem;
        line-height: 0.52rem;
        font-size: 0.28rem;
      }
    }
  }

  .winning {
    height: 5.2rem;
    padding: 0 0.2rem;
    overflow: hidden;
    li {
      height: 1.3rem;
      line-height: 1.3rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      .url {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        flex-shrink: 0;
        margin-right: 0.1rem;
      }
      .name {
        flex-shrink: 0;
        width: 2.8rem;
        overflow: hidden;
        color: #252628;
        .phone {
          color: #999;
        }
      }
      .text {
        flex-shrink: 0;
        width: 0.9rem;
      }
      .prize {
        color: #e34635;
      }
    }
  }
}
@keyframes stepAn {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: right 0;
  }
}
</style>

