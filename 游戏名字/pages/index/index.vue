<template>
	<view class="index">
		<view class="form">
			<view class="input-area">
				<text class="input_lable">姓&emsp;&emsp;名:</text>
				<input type="text" v-model="rn" placeholder="请输入你的名字" placeholder-class="plac" />
			</view>
			<view class="select-area">
				<view class="select_item">
					<text>性别:</text><text class="updown">{{sex_arr[class_id].tit}}</text>
					<view class="down_area" >
						<text v-for="(item,i) in sex_arr" @click="sexSelect(item.num)" :class="{on:item.num==class_id}" :key="i">{{item.tit}}</text>
					</view>
				</view>
				<view class="select_item">
					<text>字数:</text><text class="updown">{{zi_arr[wl].tit}}</text>
					<view class="down_area" >
						<text v-for="(item,i) in zi_arr" @click="ziSelect(item.num)" :class="{on:item.num==wl}" :key="i">{{item.tit}}</text>
					</view>
				</view>
			</view>
			<view class="input-area">
				<text class="input_lable">喜欢的字:</text>
				<input type="text" v-model="like_str" placeholder="请选择你的星座" placeholder-class="plac" />
			</view>
			<view class="input-area" @click="pickerFn(0)">
				<text class="input_lable">出生日期:</text>
				<input disabled type="text" v-model="birthdayStr" placeholder="选择你的出生日期" placeholder-class="plac" />
			</view>
			<view class="input-area" @click="pickerFn(1)">
				<text class="input_lable">出生地点:</text>
				<input disabled type="text" v-model="area_name" placeholder="选择你的出生地点" placeholder-class="plac" />
			</view>
			<view class="input-area" @click="characterPop">
				<text class="input_lable">名字风格:</text>
				<input disabled type="text" v-model="characterStr" placeholder="选择名字风格" placeholder-class="plac" />
			</view>
			<view class="submit-area" @click="submit">
				立即起名
			</view>
		</view>
		<view class="footer">
			© 起名网www.yw11.com 2008-2019 版权所有
		</view>
		<Pop ref="pop" :type="popType" @popVal="popVal"></Pop>
		<wPicker :mode="mode" startYear="1960" endYear="2019" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
		 themeColor="#f00"></wPicker>
	</view>
</template>

<script>
	import Pop from '@/components/pop.vue'
	import wPicker from '@/components/w-picker/w-picker.vue'
	export default {
		data() {
			return {
				rn:'',//	true	string	姓名
				class_id: 0,//	true	int	性别6为女性，7为男性 ,0为不限
				wl:	0,//true	int	网名字数:0不限
				like_str:'',//	false	string	喜欢的字
				year:'',//	true	string	出生年
				month:'',//	true	string	出生月
				day:'',//	true	string	出生日
				hour:'',//	true	string	出生时辰
				minute:'',//	true	string	出生分钟
				date_type:'',//	true	string	日期格式:1.公历,2.农历
				is_leap:'',//	true	string	日期格式:1.公历,2.农历
				area_name:'',//	true	string	出生地
				area_id:'',//	true	string	出生地code
				tid:[],//	true	array	网名风格标签
				app:1,//	true	int	接口来源标识(固定填1)
				
				sex_arr: [{tit: '不限',num: 0},{tit: '男',num: 7},{tit: '女',num: 6}],
				zi_arr: [{tit:'不限',num: 0},{tit:'2字',num: 2},{tit:'3字',num: 3},{tit:'4字',num: 4},{tit:'5字',num: 5},{tit:'6字',num: 6},{tit:'7字及以上',num: 7}],
				birthdayStr: '',
				popType: '2',
				characterStr:'',
				tabIndex: 0, //wPicker组件控制
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
				],
			}
		},
		onLoad() {

		},
		components:{
			Pop,
			wPicker
		},
		computed: {
			mode() {
				return this.tabList[this.tabIndex].mode
			},
			defaultVal() {
				return this.tabList[this.tabIndex].value
			}
		},
		methods: {
			sexSelect(i){
				this.class_id=i
			},
			ziSelect(i){
				this.wl=i
			},
			onConfirm(obj){
				console.log(obj)
			},
			pickerFn(i){
				this.tabIndex=i
				this.$refs.picker.show()
			},
			characterPop(){
				this.$refs.pop.show()
			},
			popVal(obj){
				console.log(obj)
			}
		}
	}
</script>

<style lang="scss">
	.index {
		position: relative;
		min-height: 100%;
		padding-bottom: 100upx;
		box-sizing: border-box;
		.footer {
			width: 100%;
			height: 100upx;
			position: absolute;
			left: 0;
			bottom: 0;
			text-align: center;
			font-size: 28upx;
			color: #999;
			line-height: 100upx;
		}
		.form {
			padding-bottom: 60upx;
						.submit-area {
				height: 100upx;
				width: 650upx;
				margin: 0 auto;
				color: #fff;
				line-height: 100upx;
				text-align: center;
				font-size: 38upx;
				background: url(https://static.quwangming.com/english/images/chinese/sub_bj.png) no-repeat 0 0/100% 100upx;
			}
			.input-area {
				display: flex;
				width: 650upx;
				line-height: 100upx;
				height: 100upx;
				margin: 20upx auto;
				padding: 0 32upx;
				box-sizing: border-box;
				background: url(https://static.quwangming.com/english/images/chinese/input_text_bj.jpg) no-repeat 0 0/650upx 100upx;

				input {
					height: 100upx;

					* {
						height: 100upx;
						line-height: 100upx;
					}
				}

				.input_lable {
					width: 140upx;
					flex-shrink: 0;
					color: #333;
					font-size: 30upx;
					justify-content: space-between;
				}


			}
			.select-area{
				width: 650upx;
				margin: 20upx auto;
				display: flex;
				.select_item{
					width: 320upx;
					line-height: 100upx;
					height: 100upx;
					padding: 0 32upx;
					box-sizing: border-box;
					border: 2px solid #666;
					display: flex;
					font-size: 30upx;
					position: relative;
					text{
						flex: 1;
					}
					.down_area{
						position: absolute;
						width: 160upx;
						left: 50%;
						display: flex;
						top: 100upx;
						z-index: 10;
						line-height: 60upx;
						flex-direction: column;
						background: #f5f5f5;
						border: 1px solid #ccc;
						text-align: center;
						text{border-bottom:1px solid #ccc;}
						transition: all 0.3s;
						transform-origin: center 0;
						transform: scaleY(1);
						border-bottom:0;
						.on{background: #000040;color: #fff;}
					}
				}
				.updown{
					position: relative;
				}
				.updown::after{
			content: '';
			position: absolute;
			border: 10upx solid #999;
			width: 0;
			height: 0upx;
			right: 20upx;
			top: 35upx;
			border-color:transparent transparent #999 #999;
			transform: rotate(-45deg)
			
		}
		.select_item:nth-of-type(1){
					margin-right: 10upx;
				}
			}
		}
	}
</style>
