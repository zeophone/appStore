<template>
  <div class="income">
    <header>
      <i class="cubeic-back" @click="back"></i>
      订单明细
    </header>
    <div class="container">
        <div class="list" v-for="(item,i) in list" :key="i">
            <div class="col"><span>订单号：{{item.order_sn}}</span><span>支付状态：{{item.order_status==1?'已支付':'未支付'}}</span></div>
            <div class="col"><span>下单时间：{{item.create_time}}</span><span>佣金：{{item.distritutor_rewards}}</span></div>
        </div>
        <p class="bottom">没有更多了~</p>
    </div>
  </div>
</template>
<script>
import http from "@/service";
export default {
    data(){
        return{
            list: []
        }
    },
    created(){
        http.post('/distributor/count/reward_list').then(res=>{
            this.list=res.data.list
        })
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.income{
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
  }
  .bottom{text-align: center;line-height: 40px;font-size: 14px;}
  .list{
      padding: 10px 20px;
      border-bottom: 1px solid #e1e1e1;
      .col{
          display: flex;
          line-height: 30px;
          font-size: 12px;
          span{flex:1;}
      }
  }
}
</style>

