<template>
	<view>
		<view class="order_detail">
			<view v-if="current==1">
				<view class="page" v-if="order_info">
					<view class="bg head">
						<text class="bg_l bg_angle"></text>
						<text class="bg_r bg_angle"></text>
						<text class="bg_bl bg_angle"></text>
						<text class="bg_br bg_angle"></text>
						<view class="content">
							<text class="head_title"><text class="head_top">基本信息</text></text>
							<view class="item">
								<view class=""><text>姓&emsp;&emsp;名：</text>{{order_info.name}}</view>
								<view class=""><text>性&emsp;&emsp;别：</text>{{order_info.sex==1?'男':'女'}}</view>
							</view>
							<view class="item">
								<text>出生时间：</text>{{order_info.birth_date}}
							</view>
							<view class="item">
								<text>出生地点：</text>{{order_info.birth_address}}
							</view>
						</view>
					</view>
				</view>

			</view>
			<view v-if="list">
				<view class="page" v-for="(item,i) in list" :key="i">
					<view class="bg">
						<text class="bg_l bg_angle"></text>
						<text class="bg_r bg_angle"></text>
						<text class="bg_bl bg_angle"></text>
						<text class="bg_br bg_angle"></text>
						<view class="head">
							<view class="head_name"><text>{{item.child_name}}</text></view>
							<view class="head_score">
								<view class="sounds_score">{{item.sounds_score}}<text>分</text></view>
								<view class="text">综合评分</view>
							</view>
						</view>
						<view class="score">
							<view class="col">
								<view class="item">
									<text>好听内涵&emsp;{{item.total_score}}分</text>
									<text class="item_bg"><text :style="{width:item.total_score+'%',background: '#ccd2ac'}"></text></text>
								</view>
								<view class="item">
									<text>国学得分&emsp;{{item.luck_god_score}}分</text>
									<text class="item_bg"><text :style="{width:item.luck_god_score+'%',background: '#acd2b0'}"></text></text>
								</view>
								<view class="item">
									<text>生肖属相&emsp;{{item.zodiac_score}}分</text>
									<text class="item_bg"><text :style="{width:item.zodiac_score+'%',background: '#b0d9e1'}"></text></text>
								</view>
							</view>
							<view class="col">
								<view class="item">
									<text>星座特征&emsp;{{item.constellation_score}}分</text>
									<text class="item_bg"><text :style="{width:item.constellation_score+'%',background: '#b2bbd8'}"></text></text>
								</view>
								<view class="item">
									<text>五格数理&emsp;{{item.three_five_score}}分</text>
									<text class="item_bg"><text :style="{width:item.three_five_score+'%',background: '#d3bcd4'}"></text></text>
								</view>
								<view class="item">
									<text>周易卦象&emsp;{{item.eight_score}}分</text>
									<text class="item_bg"><text :style="{width:item.eight_score+'%',background: '#edc3ce'}"></text></text>
								</view>
							</view>
						</view>
						<view class="child meaning">
							<view class="titel">
								名字来源
							</view>
							<view class="meaning_list" v-for="(o,n) in item.name_meaning" :key="n">
								<view v-if="n<2">{{o}}</view>
							</view>
							<view class="read_more">
								<view class="read_more_mask">
								</view>
								<view class="read_more_btn">
									<text class="name_detail" @click="detail(i)">名字详情</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<w-pagination @next="nextPage" @prev="prevPage" :count="count" :current="current"></w-pagination>
		<w-loading ref="loading"></w-loading>
	</view>
</template>

<script>
	import wLoading from "@/components/w-loading/w-loading.vue";
	import wPagination from "@/components/w-pagination/w-pagination.vue";
	import qs from 'qs'
	export default {
		data() {
			return {
				order_info: null,
				headConl: false,
				list: null,
				order_sn: null,
				current: 1,
				total: 0,
				count: 0
			}
		},
		components: {
			wLoading,
			wPagination
		},
		onLoad(options) {
			this.total = options.name_total
			this.order_sn = options.order_sn
			this.count = Math.ceil(this.total / 10)
			this.request(1);
			
		},
		methods: {
			detail(i) {
				let data = {
					app_mchid: uni.getStorageSync('token'),
					name_id: this.list[i].name_id,
					tk: this.list[i].tk,
					order_forms: 2,
					app: 1
				}
				uni.navigateTo({
					url: '../child_name/child_name?' + qs.stringify(data)
				});
			},
			nextPage(p) {
				this.current = p
				this.request(p)
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			prevPage(p) {
				this.current = p
				this.request(p)
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			request(p) {
				this.$nextTick(() => {
					this.$refs.loading.show();
				})

				uni.request({
					url: this.$store.state.baseUrl+'/api/child/order_detail',
					method: 'GET',
					data: {
						order_sn: this.order_sn,
						app: 1,
						p: p,
						ps: 10
					},
					success: (res) => {
						this.$refs.loading.close()
						if (res.data.code == 1){
							this.list = res.data.data.list
							this.order_info = res.data.data.order_info
						}else {
							uni.showModal({
								title: '提示',
								content: res.data.msg,
								success: function(res) {
									if (res.confirm) {
										uni.navigateBack()
									} else if (res.cancel) {
										uni.navigateBack()
									}
								}
							});
							return
						}
						
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.order_detail {
		padding: 20upx 20upx 10upx;
		background: #f1f1f1;

		.page {
			background: #fff;
		}

		.order_btn {
			width: 500upx;
			height: 80upx;
			border-radius: 8upx;
			margin: 20upx auto;
			text-align: center;
			font-size: 28upx;
			line-height: 80upx;
			color: #fff;

		}

		.btn1 {
			background: #000040;
		}

		.btn2 {
			background: #f05654;
		}

		.order_status {
			text-align: center;
			font-size: 36upx;
			font-weight: 700;
			line-height: 100upx;
		}

		.order_tig {
			text-align: center;
			font-size: 28upx;
			line-height: 50upx;

			text {
				display: inline-block;
				padding: 0 20upx;
				background: #f5f5f5;
				border-radius: 8upx;
			}
		}

		.order_yes {
			display: inline-block;
			width: 60upx;
			height: 60upx;
			background: url('http://test.yw11.com/assets/newqiming/images/m/chuantong/icon_g.png') no-repeat;
			background-size: 60upx 60upx;
			margin-right: 20upx;
			position: relative;
			top: 16upx;
		}

		.head {
			position: relative;

			.read_more {
				position: absolute;
				left: 0;
				bottom: 10upx;
				width: 100%;
				border-right: 1px solid #ccc;
				height: 500upx;
				text-align: center;
			}

			.read_more_mask {
				height: 400upx;
				background: -webkit-gradient(linear, 0 top, 0 bottom, from(rgba(255, 255, 255, 0)), to(#fff));

			}

			.read_more_btn {
				height: 100upx;
				text-align: center;
				background: #ffffff;

				.name_detail {
					border: 1px solid #ca0c16;
					color: #ca0c16;
					display: inline-block;
					width: 60%;
					height: 60upx;
					line-height: 60upx;
					border-radius: 8upx;
				}
			}

		}

		.page {
			.bg {
				.content {
					font-size: 32upx;
					.head_title {
						text-align: center;
						display: inline-block;
						width: 100%;
						padding-bottom: 30upx;

						.head_top {
							background: #e3434f;
							line-height: 40upx;
							border: 1upx solid #000;
							border-top: 0;
							font-size: 28upx;
							color: #fff;
							border-bottom-left-radius: 8upx;
							border-bottom-right-radius: 8upx;
							display: inline-block;
							vertical-align: top;
							margin-top: -20upx;
							padding: 4upx 30upx;
						}
					}

					.item>view {
						display: inline-block;
						width: 50%;
					}

					.item {
						margin-bottom: 20upx;

						text {
							color: #888;
							font-size: 28upx;
						}
					}
				}


				.head {
					display: flex;
					height: 160upx;
					border-bottom: 1px solid #ccc;

					.head_name {
						font-size: 58upx;
						flex-shrink: 0;
						width: 500upx;
					}

					.head_score {
						display: flex;
						flex-direction: column;

						.sounds_score {
							color: #e25822;
							font-size: 68upx;

							text {
								font-size: 24upx;
							}
						}

						.text {
							font-size: 24upx;
							position: relative;
							color: #666;
						}

						.text:after {
							content: '';
							position: absolute;
							width: 20upx;
							height: 20upx;
							border: 1upx solid #ccc;
							border-bottom: 0;
							border-right: 0;
							bottom: -40upx;
							left: 36upx;
							transform: rotate(45deg)
						}
					}
				}

				.score {
					margin-top: 20upx;
					padding-bottom: 20upx;
					border-bottom: 1upx solid #ccc;

					.col {
						display: flex;

						.item {
							flex: 1;
							font-size: 24upx;
							color: #666;
							line-height: 40upx;
							text-align: center;
							display: flex;
							flex-direction: column;
							margin-bottom: 10upx;
						}

						.item_bg {
							margin-left: 25upx;
							width: 160upx;
							height: 15upx;
							background: #f5f5f5;
							border-radius: 10upx;
							position: relative;

							text {
								height: 15upx;
								position: absolute;
								left: 0;
								border-radius: 10upx;
							}
						}
					}
				}

				.meaning {
					position: relative;

					.meaning_list {
						margin-bottom: 10upx;
					}

					.read_more {
						position: absolute;
						bottom: 0;
						left: 0;
						width: 100%;

						.read_more_mask {
							height: 140upx;
							background: -webkit-gradient(linear, 0 top, 0 bottom, from(rgba(255, 255, 255, 0)), to(#fff));
						}

						.read_more_btn {
							background: #fff;
							height: 90upx;
							display: flex;

							.name_detail {
								flex-shrink: 0;
								width: 100%;
								height: 70upx;
								text-align: center;
								background: #000040;
								color: #fff;
								line-height: 70upx;
								border-radius: 10upx;
							}

							.name_bx {
								width: 150upx;
								text-align: center;
								height: 70upx;
								border: 1upx solid #ccc;
								line-height: 70upx;
								background: #f5f5f5;
								border-radius: 10upx;
								margin-left: 20upx;
								position: relative;
								color: #999;
								font-size: 26upx;

							}

							.name_bx.on {
								width: 150upx;
								text-align: center;
								height: 70upx;
								border: 1upx solid #000040;
								line-height: 70upx;
								background: #000040 !important;
								border-radius: 10upx;
								margin-left: 20upx;
								position: relative;
								color: #fff;
								font-size: 26upx;
							}
						}
					}
				}
			}

			.child {
				color: #333;
				font-size: 30upx;
				padding-top: 20upx;

				.titel {
					padding-left: 30upx;
					border-left: 8upx solid #e3434f;
					line-height: 34upx;
					margin: 30upx 0;
					font-weight: 600;
					font-size: 34upx;
				}

				.article {
					text-indent: 2em;
					line-height: 42upx;
				}

				.five {
					.list {
						display: flex;
					}

					.list_bg {
						flex-shrink: 0;
						width: 500upx;
						height: 20upx;
						background: #f5f5f5;
						margin: 10upx 10upx 0;
						position: relative;

						text {
							display: inline-block;
							height: 20upx;
							position: absolute;
						}
					}

					.list:nth-of-type(1) {
						color: #b8860b;
					}

					.list:nth-of-type(2) {
						color: #008000;
					}

					.list:nth-of-type(3) {
						color: #0073cf;
					}

					.list:nth-of-type(4) {
						color: #e25822;
					}

					.list:nth-of-type(5) {
						color: #a67b5b;
					}
				}
			}
		}


	}

	.ordercx {
		padding: 10upx;
		line-height: 1.1;
		position: fixed;
		bottom: 20%;
		right: 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 60upx;
		z-index: 10;
	}
</style>
