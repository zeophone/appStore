<template>
	<view class="order-scroll">
		<text>10年权威起名网 海量数据业内第一 服务5000万+客户</text>
		<view class="scrollWarp" v-if="order_list.length>0">
			<ul v-bind:style="{ transform: 'translateY('+translateY+'%)',transition: 'transform '+transition+'s'}" class="scroll">
				<li v-for="(item,i) in order_list" :key="i">
					<text class="wuji">{{item.title}}</text><text>{{orderSn[i]}}</text><text>{{orderTime[i]}}</text><text>{{item.region}}</text><text class="value">{{item.order_money}}</text>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_list: [], //滾動訂單
				translateY: 0,
				transition: 0.5
			}
		},
		created() {
			var _this = this
			const requestTask = uni.request({
				url: this.$store.state.baseUrl+'/v3/api/nameorder/order_list',
				data: {},
				success: function(res) {
					_this.order_list = res.data.data
					setInterval(function(){
						_this.transition=0.5
						if(_this.translateY== -80){
							_this.transition=0
							_this.translateY=0
						}
						_this.translateY -=100/_this.order_list.length;
					},3000)
				}
			});
			
		},
		computed: {
			orderSn() {
				let arr = []
				for (let i = 0; i < this.order_list.length; i++) {
					let str = this.order_list[i].order_sn.replace(/0\d\d\d/, '***')
					arr.push(str.substr(0, 16))
				}
				return arr
			},
			orderTime() {
				let arr = []
				for (let i = 0; i < this.order_list.length; i++) {
					let str = this.order_list[i].create_time
					let date = new Date(str * 1000)
					let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
					let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + '';
					arr.push(M + D)
				}
				return arr
			}
		}
	}
</script>

<style lang="less">
	.order-scroll {
		text-align: center;
		color: #999;
		font-size: 26upx;
		.scroll{}
		.scrollWarp {
			height: 270upx;
			background: #fff;
			margin: 20upx;
			border-radius: 8upx;
			overflow: hidden;
			padding: 0 20upx;
		}

		.scrollWarp li {
			height: 90upx;
			line-height: 90upx;
			border-top: 1upx solid #f5f5f5;
			display: flex;
			padding-left: 50upx;
			box-sizing: border-box;
		}

		.scrollWarp li text {
			margin-right: 10upx;
		}
		.wuji{
			position: relative;
		}
		.wuji::before {
			content: '';
			height: 40upx;
			width: 40upx;
			background: url('https://static.quwangming.com/v3/newqiming/images/m/chuantong/wuji.png') no-repeat;
			background-size: 40upx 40upx;
			position: absolute;
			left: -50upx;
			top: 26upx;
		}
		.value{
			color:#e86340;
		}
		}
</style>
