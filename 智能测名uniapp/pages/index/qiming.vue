<template>
	<view class="index">
		<view class="container">
			<form>
				<view class="form">
					<view class="uni-form-item uni-column item">
						<view class="title">姓&emsp;&emsp;氏：</view>
						<input v-model="surname" style="width: 350upx" class="uni-input" placeholder-class="plac" name="input"
						 placeholder="请输入姓氏" />
						<view class="radio">
							<text v-for="(item,i) in ['男','女']" :key="i" :class="sex==(i+1)?'checked':''" @click="setSex(i)">{{item}}</text>
						</view>
					</view>
					<view class="uni-form-item uni-column item" @click="birthDate">
						<view class="title">出生时间：</view>
						<input disabled class="uni-input date_input" v-model="date" style="width: 480upx" placeholder-class="plac" name="input" placeholder="请选择出生时间" />
					</view>
					<view class="uni-form-item uni-column item" @click="birthAddress">
						<view class="title">出生地点：</view>
						<input disabled class="uni-input" v-model="region" style="width: 480upx" placeholder-class="plac" name="input" placeholder="请选择出生地点" />
					</view>
					<view class="uni-form-item uni-column item" @click="setCharacter">
						<view class="title">期望性格：</view>
						<input disabled v-model="character" style="width: 480upx" class="uni-input" placeholder-class="plac" name="input" placeholder="请选择期望性格" />
					</view>
					<view class="uni-form-item uni-column item">
						<view class="title">定&emsp;&emsp;字：</view>
						<input v-model="dingzi" maxlength="1" style="width: 350upx" class="uni-input" placeholder-class="plac" name="input"
						 placeholder="请输入定字内容(选填)" />
						<view class="radio">
							<text v-for="(item,i) in ['首','末']" :key="i" :class="fix_pos==(i+1)?'checked':''" @click="setDingzi(i)">{{item}}</text>
						</view>
					</view>
				</view>
				<view class="uni-btn-v submit" @click="formSubmit()">立即起名</view>
			</form>
		</view>
		<OrderScroll/>
		<Youshi/>
		<Picker :mode="mode" startYear="1960" endYear="2029" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
		 themeColor="#f00"></Picker>
		<Character @check="saveCharacter" ref="character"></Character>
		<Footer/>
	</view>
</template>

<script>
	import Picker from "@/components/w-picker/main.vue";
	import Character from "@/components/Character.vue";
	import OrderScroll from "@/components/OrderScroll/main.vue";
	import Youshi from "@/components/Youshi/main.vue";
	import Footer from "@/components/Footer/main.vue";
	import qs from 'qs'
	export default {
		data() {
			return {
				surname: '', //姓氏
				region: '', //出生地点
				birth_time: '', //出生时间
				date: '', //出生时间与类型
				sex: 1, //性别,
				dingzi: '', //定字内容
				fix_pos:1,//定字位置
				character: '', //期望性格
				tabIndex: 0, //wPicker组件控制
				name_character_text: '', //期望性格标识
				city_code: 120101, //城市代码
				date_type: 1, //1公历 2农历
				is_leap: 0, //1闰月 0不是闰月
				tabList: [{
						mode: "dateTime",
						name: "日期时间选择",
						value: [59, 6, 0, 1, 3]
					},
					{
						mode: "region",
						name: "省市区",
						value: [10, 0, 5]
					}
				],

			}
		},
		onTabItemTap(){
			location.href='https://qm.qumingdashi.com/qm2020';
			return;
		},
		mounted(){
			uni.switchTab({
				url:'/pages/index/ceming'
			})
		},
		onLoad() {
			var _this = this
			if (uni.getStorageSync('params')) {
				var data = uni.getStorageSync('params')
				_this.surname = data.surname
				_this.date_type = data.date_type
				_this.is_leap = data.is_leap
				_this.sex = data.sex
				_this.birth_time = data.birth_time
				if (_this.birth_time) {
					_this.date = _this.birth_time + (_this.date_type == 1 ? ' 公历 ' : ' 农历 ') + (_this.is_leap == 1 ? '闰月' : '')
				}
				_this.region = data.birth_address
				_this.name_character_text = data.name_character_text
				_this.character = data.name_character
			}
		},
		methods: {
			formSubmit: function(e) {
				var data = {
					surname: this.surname,
					sex: this.sex,
					birth_time: this.birth_time,
					date_type: this.date_type,
					is_leap: this.is_leap,
					fix_word:[],
					fix_position: [],
					birth_address: this.region,
					city_code: this.city_code,
					name_character_text: this.name_character_text,
					name_character: this.character,
					ztys: 0
				}
				if(this.dingzi!=''){
					data.fix_word[0]=this.dingzi;
					data.fix_position[0]=this.fix_pos;
				}
				uni.setStorageSync('params', data)
				uni.navigateTo({
					url: '/pages/middle/qiming?' + qs.stringify(data)
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
			},
			setDingzi: function(i) {
				this.fix_pos = i + 1
			},
			setCharacter: function() {
				this.$refs.character.show();
			},
			saveCharacter: function(e) {
				this.character = e.CharacterText
				this.name_character_text = e.charcterName
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
		components: {
			Picker,
			Character,
			OrderScroll,
			Youshi,
			Footer
		}
	}
</script>
<style lang="less">
	.index {
		position: relative;
		background: #f5f5f5;

		.date_input {
			width: 460upx;
		}

		.container {
			background: url('https://static.quwangming.com/newqiming/images/m/chuantong/banner.jpg') no-repeat;
			padding-top: 360upx;
			width: 100%;
			background-size: 750upx 580upx;
		}

		.form {
			padding: 0 20upx;
			background:#f8f8f8;
			.item {
				display: flex;
				padding: 20upx 20upx;
				height: 100upx;
				align-items: center;
				border-bottom: 1upx solid #e7e7e7;
				box-sizing: border-box;
				background: #fff;
				position: relative;
				top: -40upx;
			}
			.item:nth-of-type(1) {
				border-top-right-radius: 12upx;
				border-top-left-radius: 12upx;
			}

			.item:nth-of-type(4) {
				border-bottom: 0;
				border-bottom-right-radius: 12upx;
				border-bottom-left-radius: 12upx;
			}

			.item:nth-of-type(5) {
				border-bottom: 0;
				border-radius: 12upx;
				top: 0;
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
					background: #e8524c;
				}
			}
		}
		.submit {
			width: 690upx;
			background: url('https://static.quwangming.com/common/images/qiming_anniu.png') no-repeat;
			background-size: cover;
			color: #fff;
			font-size: 40upx;
			font-weight: 600;
			text-align: center;
			height: 100upx;
			line-height: 100upx;
			margin:60upx auto 20upx;
		}
	}
</style>
