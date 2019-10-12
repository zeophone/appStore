<template>
  <div class="record">
    <header>
      <i class="cubeic-back" @click="back"></i>
      提现记录
    </header>
    <div class="container">
        <div class="list" v-for="(item,i) in list" :key="i">
            <div class="col"><span>提现时间：{{item.add_time}}</span><span>提现金额：{{item.amount}}</span></div>
            <div class="col"><span>提现姓名：{{item.bank_card}}</span><span>状态：{{item.status}}</span></div>
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
        http.post('/distributor/member/present_record').then(res=>{
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
.record{
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

