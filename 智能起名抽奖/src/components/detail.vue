<template>
  <div class="prizePop" v-if="isShow">
    <div class="bg" @click="close"></div>
    <div class="content">
      <div class="tit">{{title}}</div>
      <div class="header">
        <img :src="url" alt>
        <div class="cent">
          <span>{{name}}</span>
          <span v-if="type!=''">({{type}})</span>
        </div>
      </div>
      <div class="text">{{text}}</div>
      <viewer v-if="picArr[num]" :images="picArr[num]" class="btn">
          <img v-for="src in picArr[num]" :src="src" :key="src">
      </viewer>
      <div class="close">
        <span @click="close()"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      scrollTop: 0,
      title: "奖品介绍",
      url: "",
      name: "",
      type: "",
      text: "",
      num: "",
      picArr: {
          4:[
          require('../assets/ipad/1.jpg'),require('../assets/ipad/2.jpg'),require('../assets/ipad/3.jpg')
      ],5:[
          require('../assets/diaozui/1.jpg'),require('../assets/diaozui/2.jpg'),require('../assets/diaozui/3.jpg')
      ],7:[
          require('../assets/qianming/1.jpg'),require('../assets/qianming/2.jpg'),require('../assets/qianming/3.jpg')
      ],6:[
          require('../assets/yingzhang/1.jpg'),require('../assets/yingzhang/2.jpg'),require('../assets/yingzhang/3.jpg')
      ],2:[
          require('../assets/zhengshu/1.jpg'),require('../assets/zhengshu/2.jpg'),require('../assets/zhengshu/3.jpg')
      ]}
    };
  },
  methods: {
    show(obj) {
        this.num=obj.id
      this.url = obj.url;
      this.name = obj.name;
      this.type = obj.type;
      this.text = obj.text;
      this.isShow = true;
      this.scrollTop = document.scrollingElement.scrollTop;
      document.body.classList.add("bodyCls");
      document.body.style.top = -this.scrollTop + "px";
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
.header{
    display: flex;
    height: 1.6rem;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
    img{
        width: 1.3rem;
        height: 1.1rem;
        margin-right: 0.3rem;
        flex-shrink: 0;
    }
    .cent{
        font-size: 0.26rem;
        display: flex;
        flex-direction: column;
        line-height: 0.4rem;
    }
}
.text{
    padding: 0.3rem 0;
}
.btn{
    width: 100%;
    text-align: center;
    img{
        display: inline-block;
        width: 1.4rem;
        height: 1.4rem;
        margin-right: 0.3rem;
    }
}
  .content {
    position: fixed;
    left: 0.3rem;
    top: 20%;
    width: 6.9rem;
    padding: 0 0.4rem 0.3rem;
    background: url("../assets/item_01.png") no-repeat 0 0,
      url("../assets/pop_2.png") no-repeat left bottom;
    background-size: 100% 1rem;
    background-color: #fff;
    margin-bottom: 0.68rem;
    border-radius: 0 0 0.1rem 0.1rem;
    .close {
      position: absolute;
      text-align: center;
      width: 6.1rem;
      bottom: -0.7rem;
      span {
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
  }
}
</style>

