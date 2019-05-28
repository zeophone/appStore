<template>
	<view class="index">
		<view class="index_banner"></view>
		<view class="center lh80 fs32">
			已为<text class="co_red">1000万</text>宝宝提供起名服务
		</view>
		<form>
			<view class="form">
				<view class="uni-form-item uni-column item">
					<view class="title">姓&emsp;&emsp;名：</view>
					<input v-model="name" style="width: 320upx" class="uni-input" placeholder-class="plac" name="input" placeholder="请输入姓名" />
					<view class="radio">
						<text v-for="(item,i) in ['男','女']" :key="i" :class="sex==(i+1)?'checked':''" @click="setSex(i)">{{item}}</text>
					</view>
				</view>
				<view class="uni-form-item uni-column item" @click="birthDate">
					<view class="title">出生时间：</view>
					<input disabled class="uni-input date_input" v-model="date" placeholder-class="plac" name="input" placeholder="请选择出生时间" />
				</view>
				<view class="uni-form-item uni-column item" @click="birthAddress">
					<view class="title">出生地点：</view>
					<input disabled class="uni-input" v-model="region" placeholder-class="plac" name="input" placeholder="请选择出生地点" />
				</view>
				<view class="uni-form-item uni-column item" @click="setCharacter">
					<view class="title">印象标签：</view>
					<input disabled v-model="character" class="uni-input" placeholder-class="plac" name="input" placeholder="请选择期望性格" />
				</view>
			</view>
			<view class="name_type">
				<text v-for="(item,i) in ['类型不限','时尚好听型','文化底蕴型']" :class="{type_bg:name_type==i}" @click="nameTypeHandler(i)" :key="i">{{item}}</text>
			</view>
			<view class="uni-btn-v submit">
				<text class="button" @click="formSubmit()">立即起名</text>
			</view>
		</form>
		<w-youshi></w-youshi>
		<w-picker :mode="mode" startYear="2010" endYear="2019" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
		 themeColor="#f00"></w-picker>
		<w-character @check="saveCharacter" ref="character"></w-character>
		
		<w-footer></w-footer>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import wCharacter from "@/components/w-character/w-character.vue";
	import wFooter from "@/components/w-footer/w-footer.vue";
	import wYoushi from "@/components/w-youshi/w-youshi.vue";
	export default {
		data() {
			return {
				name: '', //姓名
				region: '', //出生地点
				birth_time: '', //出生时间
				date: '', //出生时间与类型
				sex: 1, //性别
				character: '', //期望性格
				tabIndex: 0, //wPicker组件控制
				name_character_text: '', //期望性格标识
				city_code: 120101, //城市代码
				date_type: 1, //1公历 2农历
				is_leap: 0, //1闰月 0不是闰月
				name_type: 0,//名字类型
				tabList: [{
						mode: "dateTime",
						name: "日期时间选择",
						value: [9, 2, 0, 1, 3]
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
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '起小名乳名_起名网_八字起名_周易取名_取名字_起名字大全',
				keywords: '起小名,起乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
				description: '起名网官方取小名小程序，提供宝宝起名、男孩取名、女孩起名、周易起名、八字起名、诗经起名等智能起名字取名字服务。',
				articleTitle: '起小名,取乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
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
			if(uni.getStorageSync('child_params')){
				let data=uni.getStorageSync('child_params')
				this.name=data.name
				this.date_type = data.date_type
				this.is_leap = data.is_leap
				this.sex = data.sex
				this.birth_time = data.birth_date
				if(this.birth_time){
					this.date = this.birth_time + (this.date_type == 1 ? ' 公历 ' : ' 农历 ') + (this.is_leap == 1 ? '闰月' : '')
				}
				this.region = data.birth_address
				this.character=data.character
				this.name_type=data.name_type
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
			wPicker,
			wCharacter,
			wYoushi,
			wFooter
		},
		methods: {
			formSubmit: function() {
				if(this.name==''){
					uni.showToast({
						title:'请输入姓名',
						icon: 'none'
					})
					return
				}
				if(this.birth_time==''){
					uni.showToast({
						title:'请选择出生时间',
						icon: 'none'
					})
					return
				}
				let data = {
					name: this.name,
					sex: this.sex,
					birth_date: this.birth_time,
					date_type: this.date_type,
					is_leap: this.is_leap,
					birth_address: this.region,
					city_code: this.city_code,
					name_type: this.name_type,
					name_character: this.character,
					name_character_text: this.name_character_text,
					app_mchid: uni.getStorageSync('token'),
					zty: 1,
					app: 1,
				}
				uni.setStorageSync('child_params',data)
				uni.navigateTo({
					url: 'list'
				});
			},
			nameTypeHandler: function(i){
				this.name_type=i
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
			setCharacter: function() {
				this.$refs.character.show();
			},
			saveCharacter: function(e) {
				this.character = e.CharacterText
				this.name_character_text = e.charcterName
			},
			setDingzi: function() {
				this.$refs.dingzi.show()
			}
		}
	}
</script>

<style lang="less">
	.index {
		.index_banner {
			height: 421upx;
			width: 100%;
			background: url(https://static.quwangming.com/p_child_name/images/tit.jpg) no-repeat;
			background-size: 100%;
		}

		.form {
			width: 690upx;
			margin: 0 30upx;
			background: #fff;
			padding: 16upx;
			border-radius: 12upx;
			box-sizing: border-box;
			border: 1upx solid #f1f1f1;
			
			.item {
				display: flex;
				padding: 20upx 20upx;
				height: 92upx;
				line-height: 52.5upx;
				border-bottom: 1upx solid #e7e7e7;
				box-sizing: border-box;
			}

			.item:nth-of-type(4) {
				border-bottom: 0;
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
		.name_type{
			display: flex;
			font-size: 28upx;
			margin: 0 30upx;
			margin-top: 30upx;
			text-align: center;
			&>text{
				flex: 1;
				border: 1px solid #ccc;
				padding: 20upx 0;
			}
			.type_bg{
				background: #e8524c;
				color: #fff;
			}
		}
		.submit {
			height: 150upx;
			width: 690upx;
			margin: 40upx 30upx 0;
			display: flex;

			.button {
				width: 100%;
				background: url('https://static.quwangming.com/common/images/qiming_anniu.png') no-repeat;
				background-size: cover;
				color: #fff;
				font-size: 40upx;
				font-weight: 600;
				text-align: center;
				height: 100upx;
				line-height: 100upx;
			}
		}
	}
</style>
