<template>
	<view class="pay">
		<view class="order_info" v-if="data">
			<view class="order_sn">
				{{tig}}
			</view>
			<view class="order_data">
				<view class="item">
					<text>{{form.boy_name}}</text>
					<text class="brith">{{form.boy_brith_day_str}}</text>
				</view>
				<view class="item">
					<text>{{form.girl_name}}</text>
					<text class="brith">{{form.girl_brith_day_str}}</text>
				</view>
			</view>
			
		</view>
		<view class="order_result" v-if="result">
				<view class="result_title">
					{{form.boy_name}}和{{form.girl_name}}的合婚结果
				</view>
				<view class="btn item_title">
					第一: {{form.boy_name}}先生的命格
				</view>
				<view class="item_content">
					<view class="">
						生肖：{{result.shengxiao1}} 命宫：{{result.m_n}} 头胎：{{result.erzi}}
					</view>
					<view class="">
						十神：{{result.shishen1}} 日主：{{result.rizhu1}}
					</view>
					<view class="">
						乾造：{{result.qianzao1}} 
					</view>
					<view class="">
						支十神：{{result.zhishishen1}} 
					</view>
					<view class="">
						十神：{{result.shishen_for1}}
					</view>
				</view>
				<view class="btn item_title">
					第二: {{form.girl_name}}女士的命格
				</view>
				<view class="item_content">
					<view class="">
						生肖：{{result.shengxiao2}} 命宫：{{result.m_v}} 头胎：{{result.erzi_a}}
					</view>
					<view class="">
						十神：{{result.shishen2}} 日主：{{result.rizhu2}}
					</view>
					<view class="">
						乾造：{{result.qianzao2}} 
					</view>
					<view class="">
						支十神：{{result.zhishishen2}} 
					</view>
					<view class="">
						十神：{{result.shishen_for2}}
					</view>
				</view>
				<view class="btn item_title">
					第三: 名师点评
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_dsdp_arr"></rich-text>
				</view>
				<view class="btn item_title">
					第四: 命运合盘
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_xg_arr"></rich-text>
				</view>
				<view class="btn item_title">
					第五: 命中注定
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_mzzd_arr"></rich-text>
				</view>
				<view class="btn item_title">
					第六: 心有灵犀
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_hpzs_arr"></rich-text>
				</view>
				<view class="btn item_title">
					第七: 相扶相旺
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_xfxw_arr"></rich-text>
				</view>
				<view class="btn item_title">
					第八: 天长地久
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_tcdj_arr"></rich-text>
				</view>
				<view class="btn item_title">
					第九: 魅力相惜
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_mlxx_arr"></rich-text>
				</view>
				<view class="btn item_title">
					第十: 子女同步
				</view>
				<view class="item_content">
					<rich-text :nodes="result.wenan_zntb_arr"></rich-text>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tig: '正在测算中...',
				data: null,
				form: null,
				result: null
			};
		},
		onLoad(options) {
			
			this.form = uni.getStorageSync('form')
			uni.request({
				url: this.$store.state.baseUrl + '/calculation/index/hehun',
				method: 'POST',
				data: options,
				header: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
				},
				success: (res) => {
					if (res.data.code == 1) {
						this.data = res.data.data
						this.getResult(this.data.order_sn)
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
				}
			})

		},
		methods: {
			getResult(sn) {
				uni.request({
					url: this.$store.state.baseUrl + '/calculation/index/hehun',
					method: 'POST',
					data: {
						order_sn: sn,
						is_free:1,
						"token":uni.getStorageSync('token')
					},
					header: {
						"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
					},
					success: (res) => {
						if (res.data.code == 1) {
							setTimeout(() => {
							this.tig = "测算完成，请下滑查看结果"
							this.result=res.data.data
						}, 2000);
						} else {
							this.tig=res.data.msg
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.pay {
		min-height: 1400upx;
		padding-top: 500upx;
		box-sizing: border-box;
		background: url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_01.jpg") no-repeat 0 0/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_02.jpg") no-repeat 0 200upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_03.jpg") no-repeat 0 400upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_04.jpg") no-repeat 0 600upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_05.jpg") no-repeat 0 800upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_06.jpg") no-repeat 0 1000upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_07.jpg") no-repeat 0 1200upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/pay_bg_08.jpg") no-repeat 0 1400upx/100% 272upx,
			url('https://qiming.yw11.com/cesuan/hehun/images/body_bj.jpg') repeat-y 0 1672upx/100% 844upx;

		.order_info {
			color: #fff;
		}
		.order_sn {
			text-align: center;
			font-size: 28upx;
			height: 60upx;
			line-height: 60upx;
		}

		.order_data {
			display: flex;
			padding: 100upx 30upx 0;
			box-sizing: border-box;
			.item {
				display: flex;
				flex-direction: column;
				text-align: center;
				flex: 1;
				font-size: 48upx;
			}

			.brith {
				font-size: 24upx;
				color: #ccc;
			}
		}

		.order_result {
			text-align: center;
			padding-top: 400upx;
			box-sizing: border-box;
			background: url('https://qiming.yw11.com/cesuan/hehun/images/yuan.png') no-repeat 225upx 320upx/300upx;
			.btn {
				display: block;
				width: 700upx;
				height: 100upx;
				line-height: 100upx;
				color: #feffca;
				font-size: 42upx;
				margin: 0 auto;
				background: url('https://qiming.yw11.com/cesuan/hehun/images/sub_bj.png') no-repeat 0 0/100% 100upx;
			}
			.result_title{
				color: #feffca;
				font-size: 60upx;
				font-weight: 700;
				text-align: center;
				margin-bottom: 40upx;
			}
			.item_title{
				text-align: left;
				padding-left: 50upx;
				box-sizing: border-box;
				font-size: 36upx;
				font-weight: 700;
				margin-bottom: 20upx;
			}
			.item_content{
				width: 700upx;
				text-align: left;
				color: #e1e1ff;
				padding: 30upx;
				box-sizing: border-box;
				line-height: 50upx;
				font-size: 30upx;
				margin: 0 auto 20upx;
				background: url('https://qiming.yw11.com/cesuan/hehun/images/text_t.png') no-repeat 0 0/100% 86upx,
				url('https://qiming.yw11.com/cesuan/hehun/images/text_c.png') repeat-y 0 86upx/100% 20upx,
				url('https://qiming.yw11.com/cesuan/hehun/images/text_b.png') no-repeat left bottom/100% 86upx;
			}
		}
	}
</style>
