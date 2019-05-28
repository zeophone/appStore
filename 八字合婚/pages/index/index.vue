<template>
	<view class="index">
		<view class="info">
			<text class="info_tig" >男方信息</text>
			<view class="input-text">
				<input type="text"  v-model="boy_name" placeholder="姓名" />
			</view>
			<view class="input-text" @click="birthSel(1)">
				<input disabled type="text"  v-model="boy_brith_day_str" placeholder="选择出生日期" />
			</view>
		</view>
		<view class="info">
			<text class="info_tig" >女方信息</text>
			<view class="input-text">
				<input type="text"  v-model="girl_name" placeholder="姓名" />
			</view>
			<view class="input-text" @click="birthSel(2)">
				<input disabled type="text"  v-model="girl_brith_day_str" placeholder="选择出生日期" />
			</view>
		</view>
		<view class="my-info">
			<navigator url="../order/order" >我的测算记录</navigator>
		</view>
		<view class="btn-area">
			<text @click="formSubmit">开始测算</text>
		</view>
		<view class="btn-bottom">
			已有<text>571195</text>人测算
		</view>
		<w-picker :mode="mode" startYear="1960" endYear="2019" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
		 themeColor="#f00"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import qs from 'qs';
	export default {
		data() {
			return {
				boy_name: '',
				boy_brith_day: '',
				boy_brith_day_str: '',
				girl_name: '',
				girl_brith_day: '',
				girl_brith_day_str: '',
				mode:"dateTime",
				defaultVal:[40, 2, 0, 1, 3],
				current: 1
			}
		},
		onLoad() {
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '八字合婚_起名网_姻缘测算_月老姻缘_八字姻缘_姓名配对',
				keywords: '八字合婚,姻缘测算,月老姻缘,八字姻缘,姓名配对',
				description: '起名网官方八字姻缘测算小程序，提供八字合婚,姻缘测算,月老姻缘,八字姻缘,姓名配对。',
				articleTitle: '姻缘测算,八字合婚,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
				releaseDate: '2019-05-23 12:01:30',
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
		methods: {
			formSubmit(){
				let form={
					boy_name: this.boy_name,
					boy_brith_day_str: this.boy_brith_day_str,
					girl_name: this.girl_name,
					girl_brith_day_str: this.girl_brith_day_str,
				}
				for(let key in form){
					if(form[key] ==''){
						uni.showToast({
							title:'请完整填写内容',
							icon:'none'
						})
						return
					}
				}
				uni.setStorageSync('form',form)
				let data={
					boy_name: this.boy_name,
					boy_brith_day: this.boy_brith_day,
					girl_name: this.girl_name,
					girl_brith_day: this.girl_brith_day,
					token: uni.getStorageSync('token')
				}
				uni.navigateTo({
					url: '../pay/pay?'+qs.stringify(data)
				})
			},
			birthSel(i) {
				this.current=i
				this.$refs.picker.show();
			},
			onConfirm(e){
				if(this.current==1){
					this.boy_brith_day=e.checkArr[0] + '-' + e.checkArr[1] + '-' + e.checkArr[2] + ' ' + e.checkArr[3] + ':' + e.checkArr[
						4]
					this.boy_brith_day_str= this.boy_brith_day + (e.date_type == 1 ? ' 公历 ' : ' 农历 ') + (e.is_leap == 1 ? '闰月' : '')
				}else{
					this.girl_brith_day=e.checkArr[0] + '-' + e.checkArr[1] + '-' + e.checkArr[2] + ' ' + e.checkArr[3] + ':' + e.checkArr[
						4] 
					this.girl_brith_day_str = this.girl_brith_day + (e.date_type == 1 ? ' 公历 ' : ' 农历 ') + (e.is_leap == 1 ? '闰月' : '')
				}
				
			}
		},
		components: {
			wPicker
		}
	}
</script>

<style lang="scss">
	.index {
		height: 1600upx;
		padding-top: 500upx;
		box-sizing: border-box;
		background: url("https://qiming.yw11.com/cesuan/hehun/images/bg_01.jpg") no-repeat 0 0/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_02.jpg") no-repeat 0 200upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_03.jpg") no-repeat 0 400upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_04.jpg") no-repeat 0 600upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_05.jpg") no-repeat 0 800upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_06.jpg") no-repeat 0 1000upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_07.jpg") no-repeat 0 1200upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_08.jpg") no-repeat 0 1400upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_09.jpg") no-repeat 0 1600upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_10.jpg") no-repeat 0 1800upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_11.jpg") no-repeat 0 2000upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_12.jpg") no-repeat 0 2200upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_13.jpg") no-repeat 0 2400upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_14.jpg") no-repeat 0 2600upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_15.jpg") no-repeat 0 2800upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_16.jpg") no-repeat 0 3000upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_17.jpg") no-repeat 0 3200upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_18.jpg") no-repeat 0 3400upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_19.jpg") no-repeat 0 3600upx/100% 200upx,
			url("https://qiming.yw11.com/cesuan/hehun/images/bg_20.jpg") no-repeat 0 3800upx/100% 200upx;
		.info {
			position: relative;
			height: 280upx;
			padding: 40upx 80upx 0 140upx;
			box-sizing: border-box;
			.input-text {
				font-size: 38upx;
				height: 80upx;
				padding: 20upx 20upx 0;
				box-sizing: border-box;
				input{
					color: #feffca;
				}
			}
		}

		.info_tig {
			position: absolute;
			writing-mode: vertical-lr;
			font-size: 26upx;
			color: #feffca;
			top: 76upx;
			left: 80upx;
		}

		.btn-area {
			text-align: center;

			text {
				display: block;
				width: 700upx;
				height: 100upx;
				line-height: 100upx;
				color: #feffca;
				font-size: 42upx;
				margin: 0 auto;
				background: url('https://qiming.yw11.com/cesuan/hehun/images/sub_bj.png') no-repeat 0 0/100% 100upx;
			}
		}

		.btn-bottom {
			height: 50upx;
			line-height: 50upx;
			color: #ccc;

			text {
				color: #ffde00;
			}

			font-size: 24upx;
			text-align: center;
		}

		.my-info {
			height: 80upx;
			line-height: 80upx;
			font-size: 26upx;
			color: #fff;
			padding: 0 30upx;
			text-align: right;
			text-decoration: underline;
		}
	}
</style>
