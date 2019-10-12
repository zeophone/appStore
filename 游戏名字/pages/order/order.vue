<template>
	<view class="order">

		<!-- #ifndef H5 -->
		<view class="miniOrder">
			<view class="userInfo" v-if="userInfo">
				<image :src="userInfo.avatarUrl" mode=""></image>
				<view class="user_status">
					<text>{{userInfo.nickName}}</text>
					<text v-if="orderList">起名订单记录共{{orderList.length}}条</text>
				</view>
			</view>
			<button v-else type="primary" open-type="getUserInfo" @getuserinfo="loginAuth">授权登陆</button>
		</view>
		<view class="tig" v-if="userInfo">
			查询订单结果如下<text class="kefu" @click="call">有疑问?联系客服</text>
		</view>
		<!-- #endif -->

		<!-- #ifdef H5 -->
		<view class="page">
			<view class="bg">
				<text class="bg_l bg_angle"></text>
				<text class="bg_r bg_angle"></text>
				<text class="bg_bl bg_angle"></text>
				<text class="bg_br bg_angle"></text>
				<input type="number" v-model="mobile" placeholder="请输入下单的手机号码" />
				<view class="search" @click="search">
				</view>
			</view>
		</view>
		<view class="tig" v-if="orderList&&orderList.length>0">
			查询<text class="check_mob">{{orderList[0].mobile}}</text>结果如下<text class="kefu" @click="call">有疑问?联系客服</text>
		</view>
		<!-- #endif -->

		<view class="order_list" v-if="orderList&&orderList.length>0">
			<view class="order_item" v-for="(item,i) in orderList" :key="i">
				<view class="head">
					<text class="order_sn">订单号：{{item.order_sn}}</text><text class="status">{{item.order_status==1?'已支付':'未支付'}}</text>
				</view>
				<view class="content">
					<view class="">
						<text class="content_title">{{item.title}}</text><text class="money">￥{{item.money}}</text>
					</view>
					<view class="child_item">姓名：{{item.params.real_name}}</view>
				</view>
				<view class="foot" v-if="item.order_status==1">
					<text @click="orderNext(i)">查看名字</text>
				</view>
				<view class="" v-if="item.order_status!=1">
					<!-- #ifdef MP-BAIDU -->
					<op-baidu :orderSn="item.order_sn"></op-baidu>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<op-h5 :orderSn="item.order_sn"></op-h5>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<view v-if="isEmpty" class="center">未查询到相关记录</view>
	</view>
</template>

<script>
	import qs from 'qs'
	import Login from '../../common/login.js'
	import opBaidu from '../../components/w-pay/op-baidu.vue'
	import opH5 from '../../components/w-pay/op-h5.vue'
	export default {
		data() {
			return {
				mobile: '',
				orderList: [],
				userInfo: null,
				isEmpty: false
			};
		},
		components: {
			opBaidu,
			opH5
		},
		onShow() {
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '起网名_起游戏名_八字起名_周易取名_取名字_起名字大全',
				keywords: '起名,取名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
				description: '起名网官方取名小程序，提供宝宝起名、男孩取名、女孩起名、周易起名、八字起名、诗经起名等智能起名字取名字服务。',
				articleTitle: '起名,取名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
				releaseDate: '2019-05-15 12:01:30',
				image: '',
				video: '',
				visit: '',
				likes: '',
				comments: '',
				collects: '',
				shares: '',
				followers: '',
				success: function() {
					console.log('页面基础信息设置完成');
				}
			})
			// #endif

		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			call() {
				console.log('call 18163728777')
				uni.makePhoneCall({
					phoneNumber: '18163728777'
				});
			},
			getUserInfo() {
				if (uni.getStorageSync('userInfo')) {
					this.userInfo = uni.getStorageSync('userInfo')
					uni.showLoading({
						title: '查询中'
					});
					uni.request({
						url: this.$store.state.baseUrl + '/api/netname/query',
						method: 'POST',
						data: {
							app_mchid: uni.getStorageSync('token'),
							app: 1
						},
						header: {
							"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
						},
						success: (res) => {
							console.log(res)
							uni.hideLoading()
							if (res.data.code == 1) {
								this.orderList = res.data.data.order_list
								if (this.orderList.length == 0) {
									this.isEmpty = true
								}
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: 'none'
								})
							}
						}
					});
				}
			},
			loginAuth() {
				Login().then(() => {
					this.getUserInfo()
				})
			},
			search() {
				this.orderList = null
				if (this.mobile == '') {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					})
				} else if (this.mobile.length != 11) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: 'none'
					})
				} else {
					uni.showLoading({
						title: '查询中'
					});
					uni.request({
						url: this.$store.state.baseUrl + '/api/nameorder/order_query',
						method: 'POST',
						data: {
							mobile: this.mobile,
							app: 1
						},
						header: {
							"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
						},
						success: (res) => {
							uni.hideLoading()
							if (res.data.data.length > 0) {
								this.orderList = res.data.data
							} else {
								uni.showToast({
									title: '未查询相关到信息',
									icon: 'none'
								})
							}
						}
					});
				}
			},
			orderNext(i) {
				let params = {
					order_sn: this.orderList[i].order_sn
				}
				uni.navigateTo({
					url: '../webview/webview?' + qs.stringify(params)
				});

			}
		}
	}
</script>

<style lang="less">
	.order {
		position: relative;
		padding: 10upx;

		.userInfo {
			padding: 20upx 40upx;
			height: 80upx;
			display: flex;

			image {
				height: 80upx;
				width: 80upx;
				border-radius: 50%;
				margin-right: 20upx;
			}

			.user_status {
				display: flex;
				flex-direction: column;
				font-size: 24upx;
				color: #999;

				text:nth-of-type(1) {
					font-size: 36upx;
					color: #484848;
				}
			}
		}

		.tig {
			font-size: 26upx;
			padding: 10upx 30upx;
			background: #ffffff;

			.kefu {
				float: right;
				color: #1c75d1;
			}

			.check_mob {
				color: #e3434f;
			}
		}

		.order_list {
			padding: 30upx 20upx;
			background: #f5f5f5;

			.foot {
				height: 90upx;
				padding-right: 30upx;
				border-top: 1px solid #ccc;

				text {
					background: #000040;
					width: 160upx;
					font-size: 28upx;
					text-align: center;
					color: #fff;
					line-height: 60upx;
					height: 60upx;
					margin-top: 15upx;
					border-radius: 8upx;
					display: inline-block;
					float: right;
				}
			}

			.order_item {
				border: 4upx solid #000;
				margin-bottom: 20upx;
				background: #fff;

				.content {
					padding: 30upx 20upx;

					.content_title {
						width: 550upx;
						display: inline-block;
						font-size: 30upx;
					}

					.child_item {
						color: #999;
						font-size: 28upx;
					}

					.money {
						color: #e3434f;
						float: right;
					}
				}

				.head {
					height: 80upx;
					line-height: 80upx;
					padding: 0 20upx 0 70upx;
					font-size: 30upx;
					color: #666666;
					border-bottom: 1px solid #ccc;
					background: url('https://static.quwangming.com/p_child_name/images/icon_gua.png') no-repeat;
					background-size: 40upx 40upx;
					background-position: 20upx 20upx;
				}

				.status {
					float: right;
					color: #2c9209;
				}
			}






		}

		input {
			width: 580upx;
		}

		.search {
			background: url('https://static.quwangming.com/newqiming/images/m/chuantong/icon_fdj.png') no-repeat;
			height: 50upx;
			width: 50upx;
			background-size: 50upx 50upx;
			position: absolute;
			right: 20upx;
			top: 20upx;
		}

	}
</style>
