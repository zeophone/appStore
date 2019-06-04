<template>
  <div class="prizePop" v-if="isShow">
    <div class="bg" @click="close"></div>
    <div class="content">
      <div class="tit">{{title}}</div>
<div  class="ruleInt" v-if="type=='rule'">
    
<dl><dt>1.</dt><dd>活动期间仅智能起名下单用户参与。</dd></dl>
<dl><dt>2.</dt><dd>下单用户可获得抽奖次数2次，奖品100%必中。</dd></dl>
<dl><dt>3.</dt><dd>重复抽中的奖品只能单次领取/使用，以奖品类型兑换。（例：iPad mini 64g 抽中多次，仅一次有效领取。）</dd></dl>
<dl><dt>4.</dt><dd>活动时间：2019年6月1日 至 2019年6月6日</dd></dl>
<dl><dt>5.</dt><dd>活动规则以起名网实际活动为准</dd></dl>
<dl style="padding-top: 15px;">
<dt></dt><dd><b>领取说明</b></dd></dl><dl>
<dt>1.</dt><dd>优惠券可以立即使用。</dd></dl>
<dl><dt>2.</dt><dd style="color: #ff7800;">礼包等实物奖品请添加客服微信，我们将在3个工作日内将奖品邮寄给您。</dd></dl>

      </div>
      <div class="myPrize" v-if="type=='prize'">
          <div class="tig">重复抽中的奖品只能单次领取/使用</div>
          <div v-if="result.length>0">
            <div class="item" v-for="(item,i) in result"  :key="i">
                <img class="pic" :src="pic[item.type-1]" alt="">
                <div class="con">
                    {{item.gift_name}}
                </div>
                <span class="btn" @click="toExport(item.is_use)" v-if="item.type==1">{{item.is_use==0?'前往使用':'已使用'}}</span>
                <span class="btn" v-else  @click="toEwm">领取</span>
            </div>
          </div>
          <div class="air" v-else>
              <img :src="require('../assets/ku.png')" alt="">
              <p>暂时没有奖品!!!</p>
          </div>
      </div>
      <div class="close"><span @click="close()"></span></div>
    </div>
  </div>
</template>
<script>
import http from '../service'
export default {
  data() {
    return {
      isShow: false,
      scrollTop: 0,
      title: "活动规则",
      result: [],
      pic: [require('../assets/prize1.png'),require('../assets/prize4.png')]
    };
  },
  props: {
    type: String
  },
  created(){
      http.giftlist({
            order_sn: localStorage.getItem('l_sn')
      }).then((res)=>{
          if(res.data.code==1){
              this.result=res.data.data
          }
      })
  },
  watch: {
    type: {
      handler: function(val) {
        if (val == "rule") {
            this.title='活动规则';
        } else {
          this.title = "我的奖品";
        }
      },
      immediate: true
    }
  },
  methods: {
    toExport(i){
        if(i==0){
            location.href='https://qiming.yw11.com/expert?order_sn='+localStorage.getItem('l_sn')
        }
      },
    onCopy() {
      alert("复制成功");
    },
    toEwm(){
        this.close();
        document.scrollingElement.scrollTop=10000
    },
    show() {
      this.isShow = true;
      this.scrollTop = document.scrollingElement.scrollTop;
      document.body.classList.add("bodyCls");
      document.body.style.top = -this.scrollTop + "px";
            http.giftlist({
            order_sn: localStorage.getItem('l_sn')
      }).then((res)=>{
          if(res.data.code==1){
              this.result=res.data.data
          }
      })
    },
    close() {
      document.body.classList.remove("bodyCls");
      document.scrollingElement.scrollTop = this.scrollTop;
      this.isShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
.prizePop {
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
.ruleInt {
    padding: 0.5rem 0.3rem 0; font-size: .3rem; line-height: 1.5;
  }
.ruleInt dl { overflow: hidden; padding-bottom: .14rem;}
.ruleInt dt { float: left; padding-right: .07rem;}
.ruleInt dd { overflow: hidden;}
.air{
    text-align: center;
    padding-bottom: 0.6rem;
    img{
        display: inline-block;
        height: 1.68rem;
        width:1.68rem;

    }
    p{
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.32rem;
    }
}
  .content {
    position: fixed;
    left: 0.3rem;
    top: 20%;
    padding-bottom: 0.3rem;
    width: 6.9rem;
    background: url("../assets/item_01.png") no-repeat 0 0,
      url("../assets/pop_2.png") no-repeat left bottom;
    background-size: 100% 1rem;
    background-color: #fff;
    margin-bottom: 0.68rem;
    border-radius: 0 0 0.1rem 0.1rem;
    .close{
        position: absolute;
        text-align: center;
        width: 100%;
        bottom: -0.7rem;
        span{
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            background: url("../assets/xx.png") no-repeat;
            background-size: 100%;
        }
    }
    .tit {
      font-size: 0.36rem;
      font-weight: bold;
      text-align: center;
      height: 1rem;
      line-height: 0.9rem;
      color: #fff;
    }
    .ruleInt {
      padding: 0.5rem 0.3rem;
      height: 4.6rem;
      overflow: scroll;
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
      height: 0.8rem;
      display: inline-block;
      background: #cd4a3c;
      border-radius: 0.5rem;
      line-height: 0.8rem;
      color: #fff;
      font-size: 0.3rem;
    }
  }
    }
     .myPrize{
         padding: 0 0.2rem;
         min-height: 2.6rem;
         max-height: 4.5rem;
         overflow: scroll;
       .tig{
           text-align: center;
           line-height: 0.8rem;
       }
       .item{
           display: flex;
           align-items: center;
           background: #f3f3f3;
           margin-bottom: 0.2rem;
           height: 1.5rem;
           padding: 0 0.2rem;
           img{
               flex-shrink: 0;
               width: 1.3rem;
               height: 1.1rem;
               margin-right:0.2rem;
           }
           .con{
               flex-shrink: 0;
               width: 2.8rem;
               display: flex;
               font-size: 0.3rem;
               flex-direction: column;
                line-height: 0.4rem;
           }
           .btn{
               flex-shrink: 0;
               width: 1.4rem;
               height: 0.6rem;
               background: #f44c4f;
               border-radius: 0.08rem;
               color: #fff;
               font-weight: bold;
               text-align: center;
               line-height: 0.6rem;
               box-shadow: inset -0px -3px 1px rgba(0,0,0,0.2);
           }
       }
  }
  }
}
</style>

