<template>
  <div class="commission">
    <header>
      <i class="cubeic-back" @click="back"></i>
      佣金中心
      
    </header>
    <div class="current">
      <div class="tit">
        <span>可提现佣金</span>
        <router-link to="/record" class="detail">
          提现记录
          <i class="cubeic-arrow"></i>
        </router-link>
      </div>
      <div class="money">
        <span>￥</span>
        <span>{{balance}}</span>
      </div>
    </div>
    <div class="yw_btn">
    <router-link to="/money" class="cash">申请提现</router-link>
    <router-link to="/home" class="setYw" replace>分享好友</router-link>        
    </div>

    <div class="statistics">
        <div class="history">
        <div>
          <p>累计佣金</p>
          <div>
            <span>￥</span>
            <span>{{rewards_total}}</span>
          </div>
        </div>
        <div>
          <p>待结算佣金</p>
          <div>
            <span>￥</span>
            <span>{{wait_money}}</span>
          </div>
        </div>
      </div>
      <div class="history">
        <div>
          <p>已提现佣金</p>
          <div>
            <span>￥</span>
            <span>{{rewards_a}}</span>
          </div>
        </div>
        <div>
          <p>昨日佣金</p>
          <div>
            <span>￥</span>
            <span>{{rewards_y}}</span>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/income" class="order">
      <span>订单明细</span>
      <span>
        <i class="cubeic-arrow"></i>
      </span>
    </router-link>
    <div class="desc">
      <h2>结算、分佣、分享规则</h2>
      <p>1、分佣规则：佣金为智能测名或智能起名线上业务零售价的20%。</p>
      <p>2、分享流程：用户 -> 点击分享好友 -> 复制链接或者二维码 -> 打开微信发给好友 -> 好友下单 -> 获得佣金。</p>
      <p>3、佣金状态分为待结算佣金、已结算佣金。待结算佣金是指所获佣金的订单状态未结束；已结算佣金指该笔订单状态已结束，可进行提现、再消费操作；</p>
      <p>4、累计佣金 = 待结算佣金 + 已结算佣金；</p>
      <p>5、佣金提现金额需不少于1元，提现只能为整数，每日最多提现两次，只支持提现到支付宝账号；</p>
      <p>6、申请提现后的佣金将在1小时内到账，具体到账时间受网络影响会有差异，具体到账时间以支付宝实际到账时间为准。</p> </div>
  </div>
</template>
<script>
import http from "@/service";
export default {
  data() {
    return {
      balance: '0.00', //	float	可提现佣金
      rewards_y: '0.00', //	float	昨日佣金
      rewards_total: '0.00', //	float	累计佣金
      rewards_a: '0.00', //	float	已提现佣金
      rewards_c: '0.00', //	float	提现中金额
      cash: [], //array	佣金比例
      wait_money: '0.00'
    };
  },
  created() {
    this.userInfo();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    userInfo() {
      http.post("/distributor/count/reward_general").then(res => {
       if(res.code==1){
           this.balance= res.data.balance;
           this.rewards_y = res.data.rewards_y;
           this.rewards_total = res.data.rewards_total;
           this.rewards_a = res.data.rewards_a;
           this.rewards_c = res.data.rewards_c;
           this.wait_money = res.data.wait_money;
       }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.commission {
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
  .yw_btn{
      display: flex;
      justify-content: center;
      .setYw{
          height: 40px;
            line-height: 40px;
            background: #5db478;
            font-size: 12px;
            width: 70px;
            text-align: center;
            color: #fff;
            border-radius: 6px;
            margin-bottom: 20px;
      }
  }
  .current {
    padding: 0 20 * 0.5px 20px;
    .tit {
      display: flex;
      justify-content: space-between;
      height: 80 * 0.5px;
      line-height: 80 * 0.5px;
      .detail {
        color: #999;
        font-size: 28 * 0.5px;
      }
    }
    .money {
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #e1e1e1;
    }
  }
  .cash {
    display: flex;
    width: 200px;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    background: #01aaaf;
    color: #fff;
    border-radius: 6px;
    margin-bottom: 20px;
    margin-right: 10px;
  }
  .statistics {
    border-top: 10px solid #f6f8f8;
    padding: 20px 10px 0;

    p {
      color: #ccc;
      font-size: 12px;
      line-height: 30px;
    }
    .history {
      padding: 20px 0;
      display: flex;
      
      div {
        flex: 1;
      }
    }
    .history:nth-of-type(2){
        border-bottom: 1px solid #e1e1e1;
    }
  }
  .order {
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    color: #333;
  }
  .desc {
    padding: 30px 10px 0;
    background: #f6f8f8;
    p {
      color: #666;
      font-size: 14px;
      padding: 4px 0;
      line-height: 20px;
    }
  }
}
</style>

