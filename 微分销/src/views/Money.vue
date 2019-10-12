<template>
  <div class="money">
    <header>
      <i class="cubeic-back" @click="back"></i>
      佣金提现
    </header>
    <div class="container">
      <div class="alipay">
        <label for="ali">支付宝账号:</label>
        <input id="ali" type="text" v-model="ali_num" placeholder="请输入支付宝账号" />
      </div>
      <div class="alipay">
        <label for="ali">账户姓名:</label>
        <input id="ali" type="text" v-model="ali_name" placeholder="请输入支付宝实名认证名" />
      </div>
      <div class="money-warp">
        <h3>提现金额</h3>
        <div class="value">
          <span>￥</span>
          <input v-model="value" type="number" @change="valueChange" placeholder="0" />
        </div>
        <div class="tig">
          <span>佣金余额￥{{balance}}，</span>
          <span @click="allMoney">全部转出</span>
        </div>
      </div>
      <div class="submit" @click="submit">确认提现</div>
      <p class="tigs">* 提现金额必须大于1元且为整数</p>
    </div>
  </div>
</template>
<script>
import http from "@/service";
export default {
  data() {
    return {
      value: "",
      ali_num: "",
      ali_name: "",
      balance: "0.00", //	float	可提现佣金
      rewards_y: "0.00", //	float	昨日佣金
      rewards_total: "0.00", //	float	累计佣金
      rewards_a: "0.00", //	float	已提现佣金
      rewards_c: "0.00", //	float	提现中金额
      cash: [] //array	佣金比例
    };
  },
  created() {
    this.userInfo();
    if (localStorage.getItem("money_form")) {
      let form = JSON.parse(localStorage.getItem("money_form"));
      this.ali_num = form.ali_num;
      this.ali_name = form.ali_name;
    }
  },
  methods: {
    submit() {
      if (this.ali_num == "") {
        const toast = this.$createToast({
          txt: "支付宝账号不能为空",
          type: "text"
        });
        toast.show();
        return;
      } else if (this.ali_name == "") {
        const toast = this.$createToast({
          txt: "账户姓名不能为空",
          type: "text"
        });
        toast.show();
        return;
      } else if (parseFloat(this.value) < 1) {
        const toast = this.$createToast({
          txt: "提现金额必须大于1元",
          type: "text"
        });
        toast.show();
        return;
      } else if (parseFloat(this.value) % 1 !== 0) {
        const toast = this.$createToast({
          txt: "提现金额必须为整数",
          type: "text"
        });
        toast.show();
        return;
      } else if (parseFloat(this.value) > parseFloat(this.balance)) {
        const toast = this.$createToast({
          txt: "提现金额不能大于余额",
          type: "text"
        });
        toast.show();
        return;
      }

      http
        .post("/distributor/bank/apply_wap", {
          amount: this.value,
          card: this.ali_num,
          username: this.ali_name
        })
        .then(res => {
          if (res.code == 1) {
            let money_form = {
              ali_num: this.ali_num,
              ali_name: this.ali_name
            };
            localStorage.setItem("money_form", JSON.stringify(money_form));
            let conf = confirm("提现成功");
            if (conf) {
              this.$router.replace("/commission");
            }
          } else {
            const toast = this.$createToast({
              txt: res.msg,
              type: "text"
            });
            toast.show();
          }
        });
    },
    allMoney() {
      this.value = this.balance;
    },
    valueChange() {
      function Money(value, num) {
        num = num > 0 && num <= 20 ? num : 2;

        value =
          parseFloat((value + "").replace(/[^\d\.-]/g, "")).toFixed(num) + ""; //将金额转成比如 123.45的字符串

        var valueArr = value.split(".")[0].split(""); //将字符串的数变成数组

        const valueFloat = value.split(".")[1]; // 取到 小数点后的值

        let valueString = "";

        for (let i = 0; i < valueArr.length; i++) {
          valueString +=
            valueArr[i] +
            ((i + 1) % 3 == 0 && i + 1 != valueArr.length ? "" : "");
        }

        const money = valueString.split("").join("") + "." + valueFloat; //拼接上小数位
        return money;
      }
      this.value = Money(this.value, 2);
    },
    back() {
      this.$router.go(-1);
    },
    userInfo() {
      http.post("/distributor/count/reward_general").then(res => {
        if (res.code == 1) {
          this.balance = res.data.balance;
          this.rewards_y = res.data.rewards_y;
          this.rewards_total = res.data.rewards_total;
          this.rewards_a = res.data.rewards_a;
          this.rewards_c = res.data.rewards_c;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.tigs {
  line-height: 40px;
  font-size: 6px;
  color: #999;
}
.money {
  font-size: 32 * 0.5px;
  .container {
    padding: 0 20px;
  }
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
  .alipay {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    label {
      margin-right: 10px;
    }
    input {
      outline: none;
    }
    border-bottom: 1px solid #e1e1e1;
  }
  .money-warp {
    padding-top: 20px;
    margin-bottom: 20px;
    h3 {
      font-size: 14px;
    }
    .value {
      display: flex;
      height: 80px;
      line-height: 80px;
      font-size: 36px;
      border-bottom: 1px solid #e1e1e1;
      input {
        outline: none;
      }
    }
    .tig {
      font-size: 12px;
      line-height: 40px;
      span:nth-child(1) {
        color: #999;
      }
      span:nth-child(2) {
        color: #1c8dc9;
      }
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
</style>

