<template>
	<view class="content">
		<view class="head_bg"></view>
		<view class="form_warp">
			<view class="form">
				<view class="uni-form-item uni-column item">
					<view class="title">姓&emsp;&emsp;名：</view>
					<input v-model="name" style="width: 320upx" class="uni-input" placeholder-class="plac" name="input" placeholder="请输入姓名" />
					<view class="radio">
						<text v-for="(item,i) in ['男','女']" :key="i" :class="sex==(i+1)?'checked':''" @click="setSex(i)">{{item}}</text>
					</view>
				</view>
				<view class="handle-time" @click="isTime=!isTime"><text class="radio" :class="isTime?'on':''" ></text><text>使用出生时间，考虑五行八字</text></view>
				<view v-show="isTime">
					<view class="uni-form-item uni-column item data-warp" @click="birthDate">
						<view class="title">出生时间：</view>
						<input disabled class="uni-input date_input" v-model="date" placeholder-class="plac" name="input" placeholder="请选择出生时间" />
					</view>
					<view class="line"></view>
					<view class="uni-form-item uni-column item region-warp" @click="birthAddress">
						<view class="title">出生地点：</view>
						<input disabled class="uni-input" v-model="region" placeholder-class="plac" name="input" placeholder="请选择出生地点" />
					</view>
				</view>
			</view>
			<view class="submit" @click="submit">
				立即测名
			</view>
			<view class="order">
				<navigator url="/pages/query/index">订单查询>></navigator>
			</view>
		</view>
		<w-picker :mode="mode" startYear="1940" endYear="2029" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
		 themeColor="#f00"></w-picker>
		<Youshi></Youshi>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/main.vue";
	import Youshi from "@/components/Youshi.vue";
	import qs from 'qs';
	export default {
		data() {
			return {
				isTime: true,
				name: '', //姓名
				region: '', //出生地点
				birth_time: '', //出生时间
				date: '', //出生时间与类型
				sex: 1, //性别
				tabIndex: 0, //wPicker组件控制
				city_code: 120101, //城市代码
				date_type: 1, //1公历 2农历
				is_leap: 0, //1闰月 0不是闰月
				name_type: 0, //名字类型
				tabList: [{
						mode: "dateTime",
						name: "日期时间选择",
						value: [50, 2, 0, 1, 3]
					},
					{
						mode: "region",
						name: "省市区",
						value: [10, 0, 5]
					}
				],
			}
		},
		onLoad() {
			if(uni.getStorageSync('ceming_form')){
				let form=uni.getStorageSync('ceming_form');
				this.region=form.region;
				this.date=form.date;
				this.birth_time=form.birth_time;
				this.is_leap=form.is_leap;
				this.city_code=form.city_code;
				this.date_type=form.date_type;
			}
		},
		computed: {
			mode() {
				return this.tabList[this.tabIndex].mode
			},
			defaultVal() {
				return this.tabList[this.tabIndex].value
			},

		},
		methods: {
			submit: function() {
				if(this.name==''){
					uni.showToast({
						title:'请输入姓名',
						image: '../../static/image/remind.png'
					})
					return;
				}
				if(this.isTime&&this.birth_time==''){
					uni.showToast({
						title:'请选择出生时间',
						image: '../../static/image/remind.png'
					})
					return;
				}
				if(this.birth_time!=''){
					uni.setStorageSync('ceming_form',{
						date:this.date,
						region:this.region,
						birth_time:this.birth_time,
						is_leap:this.is_leap,
						city_code:this.city_code,
						date_type:this.date_type
					})
				}
				let options = {
					test_name: this.name,
					sex: this.sex,
					birth_date: this.isTime?this.birth_time:'',
					date_type:this.date_type,
					is_leap: this.is_leap,
					ztys: 1,
					city_code: this.city_code,
					birth_address:this.region,
					is_test_date: this.isTime?1:0
				}
				uni.navigateTo({
					url: '/pages/middle/ceming?'+qs.stringify(options)
				});
			},
			onConfirm: function(e) {
				if (this.tabIndex == 0) {
					this.birth_time = e.checkArr[0] + '/' + e.checkArr[1] + '/' + e.checkArr[2] + ' ' + e.checkArr[3] + ':' + e.checkArr[
						4]
					this.date_type = e.date_type
					this.is_leap = e.is_leap
					this.date = this.birth_time + (this.date_type == 1 ? ' 公历 ' : ' 农历 ') + (this.is_leap == 1 ? '闰月' : '')
				} else {
					this.region = e.checkArr.join('-')
					this.city_code = e.defaultVal.join('')
				}
			},
			birthDate: function() {
				this.tabIndex = 0;
				this.$refs.picker.show();
			},
			birthAddress: function() {
				this.tabIndex = 1;
				this.$refs.picker.show();
			},
			setSex: function(i) {
				this.sex = i + 1
			}
		},
		components: {
			wPicker,
			Youshi
		}
	}
</script>

<style lang="scss" scoped>
	.head_bg {
		background: url('https://static.quwangming.com/newqiming/images/m/ceming_201902/banner.jpg') no-repeat;
		height: 360upx;
		background-size: 100%;
	}

	.form_warp {
		background: url('https://static.quwangming.com/newqiming/images/m/ceming_201902/banner_footer.jpg') no-repeat;
		height: 686upx;
		background-size: cover;
	}

	.form {
		width: 690upx;
		margin: 0 30upx;
		box-sizing: border-box;

		.handle-time {
			height: 100upx;
			display: flex;
			align-items: center;
			color: #e1e1e1;
			font-size: 32upx;
			padding-left: 20upx;

			.radio {
				flex-shrink: 0;
				margin-right: 20upx;
				background: #c8c8c8;
				width: 36upx;
				height: 36upx;
			}

			.radio.on {
				background: #ffb400;
				position: relative;
			}

			.radio.on:after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 20upx;
				height: 10upx;
				border: 2px solid #fff;
				border-top: 0;
				border-right: 0;
				transform: translate(-50%,-60%) rotate(-45deg);
			}
		}

		.line {
			padding: 0 30upx;
			height: 1px;
			background: #fff;
		}

		.item {
			display: flex;
			align-items: center;
			height: 120upx;
			line-height: 52.5upx;
			background: #fff;
			border-radius: 12upx;
			box-sizing: border-box;
			padding-left: 32upx;
		}

		.data-warp {
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		}

		.region-warp {
			border-top-right-radius: 0;
			border-top-left-radius: 0;
		}

		.title {
			flex-shrink: 0;
			width: 160upx;
			font-size: 32upx;
			color: #333;
		}

		input {
			flex-shrink: 0;
			font-size: 32upx;
		}

		.radio {
			flex-shrink: 0;
			width: 120upx;
			display: flex;
			font-size: 30upx;

			text {
				flex-shrink: 0;
				display: inline-block;
				width: 60upx;
				margin-right: 20upx;
				height: 60upx;
				background: #c8c8c8;
				text-align: center;
				color: #fff;
				border-radius: 50%;
				line-height: 60upx;
			}

			.checked {
				background: #ffb400;
			}
		}
	}

	.submit {
		background-color: #ffb400;
		color: #fff;
		width: 670upx;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		border-radius: 12upx;
		margin: 40upx auto;
	}

	.order {
		text-align: center;
		font-size: 28upx;
		color: #fff;
	}
</style>
