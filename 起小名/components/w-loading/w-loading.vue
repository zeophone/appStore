<template>
  <div class="loading "  :class="{hide:!loading}">
    <img class="loading_logo"  src="../../static/loading_logo.png">
    <div class="loading_bagua">
        <img  class="loading_zi"  src="../../static/zi.png">
        <img  class="loading_dian"  src="../../static/dian.png">
        <img  class="bagua"  src="../../static/bagua.png">
        <div class="space"></div>
        <div :class="{'hide':loading_time<1}">正在努力加载中...</div>
        <div :class="{'hide':loading_time<2}">音形字义数据分析</div>
        <div :class="{'hide':loading_time<3}">国学喜神分析完成</div>
        <div :class="{'hide':loading_time<4}">三才五格分析完成</div>
        <div :class="{'hide':loading_time<5}">周易卦象分析完成</div>
        <div :class="{'hide':loading_time<6}">生肖星座分析完成</div>
    </div>
</div>
</template>
<script>
export default {
  name: "load-view",
  data(){
    return {
      loading_time:1,
	  loading: false
    }
  },
	watch:{
		loading(val){
			if(val){
				// uni.hideTabBar()
				let timer=setInterval(() => {
						if(this.loading_time < 6){
							this.loading_time++
						}else{
							clearInterval(timer)
						}
					}, 1000);
			}
		}
	},
	methods: {
		show(){
			this.loading=true;
		},
		close(){
			this.loading_time=1
			this.loading=false
		}
	}
}
</script>

<style scoped>
/*loading部分*/
.loading{position: fixed;top:0;bottom: 0;left: 0;right: 0;z-index:100000;background-color: #ede9e6;}
.loading_logo{position: absolute;bottom: 30upx;left: 50%;transform: translate(-50%, 0);z-index:10001;width: 195upx;height:76upx;}
.loading_bagua{position: absolute;top: 20%;left: 50%;transform: translate(-50%, 0);z-index:10001;text-align: center;}
.loading_bagua img{position: absolute;top: 0;left: 0; width: 300upx;height:300upx;z-index:10002;}
.loading_bagua .loading_dian{transform: rotate(360deg);animation: rotation 2.5s linear infinite;}
.loading_bagua .loading_zi{transform: rotate(360deg);animation: rotationFan 2.5s linear infinite;}
.loading_bagua div{font-size: 30upx;}
.space{width: 300upx;height: 300upx;}
.hide{ opacity: 0; visibility: hidden; height:0; overflow: hidden; }
@keyframes rotation{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes rotationFan{from {transform: rotate(360deg);}to {transform: rotate(0deg);}}
@keyframes pulse{0%{ transform: scale(1);}50%{ transform: scale(.95);}100%{ transform: scale(1);}}
</style>
