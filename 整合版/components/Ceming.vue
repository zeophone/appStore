<template>
	<view>
		<view class="ceming">
			<view class="text1">热门在线测名</view>
			<view class="form">
				<view class="input-area">
					<text class="input_lable">姓&emsp;&emsp;氏:</text>
					<input type="text" v-model="surname" placeholder="请输入姓氏" placeholder-class="plac" />
					<view class="input_select">
						<text :class="sex==1?'on':''" @click="sex=1">女</text>
						<text :class="sex==3?'on':''" @click="sex=3">男</text>
					</view>
				</view>
				<view class="input-area" @click="openPicker(0)">
					<text class="input_lable">出生时间:</text>
					<input disabled type="text" v-model="date" placeholder="请选择宝宝的出生时间" placeholder-class="plac" />
				</view>
				<view class="input-area" @click="openPicker(1)">
					<text class="input_lable">出生地点:</text>
					<input disabled type="text" v-model="region" placeholder="请选择宝宝的出生地点" placeholder-class="plac" />
				</view>
				<view class="submit-area" @click="submit">
					立即测名
				</view>
			</view>
		</view>
		<w-picker :mode="mode" startYear="2016" endYear="2019" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
		 themeColor="#f00"></w-picker>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components:{
			wPicker
		},
		data() {
			return {
				surname: '', //姓氏
				region: '', //出生地点
				birth_time: '', //出生时间
				date: '', //出生时间与类型
				sex: 1, //性别
				character: '', //期望性格
				tabIndex: 0, //wPicker组件控制
				name_character_text: '', //期望性格标识
				dingzi: '', //定字内容
				fix_position: '', //定字类型组
				fix_word: '', //定字内容组
				city_code: 120101, //城市代码
				date_type: 1, //1公历 2农历
				is_leap: 0, //1闰月 0不是闰月
				tabList: [{
						mode: "dateTime",
						name: "日期时间选择",
						value: [2, 2, 0, 1, 3]
					},
					{
						mode: "region",
						name: "省市区",
						value: [10, 0, 5]
					}
				]
			};
		},
		methods:{
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
			openPicker: function(i) {
				this.tabIndex = i;
				this.$refs.picker.show();
			},
			setSex: function(i) {
				this.sex = i + 1
			},
		},
		computed: {
			mode() {
				return this.tabList[this.tabIndex].mode
			},
			defaultVal() {
				return this.tabList[this.tabIndex].value
			},

		}
	}
</script>

<style lang="scss">
	$border: 1px solid #d1d1d1;
	.title_head {
		color: #fff;
		font-size: 40upx;
		text-align: center;
		line-height: 68upx;
		padding-top: 10upx;
	}
	.ceming {
		background: #fff;
		border-top: $border;
		background: url(https://m.yw11.com/v1/images/in_app_bj.jpg) no-repeat 0 -60upx;
		background-size: 100%;

		.text1 {
			@extend .title_head;
			margin-bottom: 60upx;
		}
			.form {
			font-size: 32upx;
		
			.input-area {
				display: flex;
				width: 690upx;
				line-height: 100upx;
				height: 100upx;
				margin: 20upx auto;
				padding: 0 32upx;
				box-sizing: border-box;
				background: url(https://static.quwangming.com/english/images/chinese/input_text_bj.jpg) no-repeat 0 0/690upx 100upx;
		
				input {
					height: 100upx;
		
					* {
						height: 100upx;
						line-height: 100upx;
					}
				}
		
				.input_lable {
					width: 150upx;
					flex-shrink: 0;
					color: #333;
				}
		
				.input_select {
					display: flex;
					flex-shrink: 0;
					flex-direction: row-reverse;
					width: 146upx;
					padding-top: 28upx;
		
					text {
						font-size: 28upx;
						text-align: center;
						line-height: 44upx;
						width: 44upx;
						height: 44upx;
						border-radius: 50%;
						background: #c8c8c8;
						color: #fff;
						margin-left: 10upx;
					}
		
					.on {
						background: #caa456;
					}
				}
		
			}
		
			.submit-area {
				height: 100upx;
				width: 690upx;
				margin: 0 auto;
				color: #fff;
				line-height: 100upx;
				text-align: center;
				font-size: 38upx;
				background: url(https://static.quwangming.com/english/images/chinese/sub_bj.png) no-repeat 0 0/100% 100upx;
			}
		}
	}
</style>
