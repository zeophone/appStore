<template>
	<view class="index">
		<view class="form">
			<view class="item" @click="showRightPop('city')">
				<input disabled type="text" v-model="city" placeholder="选择城市: 北京" placeholder-class="plac" />
			</view>
			<view class="item flex">
				<input class="company_name" type="text" v-model="company_name" placeholder="字号: 如阿里巴巴" placeholder-class="plac" />
				<view class="company_type" @click="company_open()">
					{{company_type=='1'?'有限公司':'合伙企业'}}<text></text>
					<view class="select" :class="{on:!companyShow}" >
						<text @click.stop="company_select('1')">有限公司</text>
						<text @click.stop="company_select('2')">合伙企业</text>
					</view>
				</view>
			</view>
			<view class="item" @click="showRightPop('line')">
				<input disabled type="text" v-model="company_line" placeholder="选择行业: 科技" placeholder-class="plac" />
			</view>
			<view class="boss" v-show="isShowBoss">
				<view class="item">
					<input type="text" v-model="boss_name" placeholder="法人姓名" placeholder-class="plac" />
				</view>
				<view class="item" @click="pickerOpen(0)">
					<input disabled type="text" v-model="birth_date"  placeholder="出生时间" placeholder-class="plac" />
				</view>
				<view class="item" @click="pickerOpen(1)">
					<input disabled type="text" v-model="birth_area" placeholder="出生地" placeholder-class="plac" />
				</view>
			</view>
			<view class="addBoos" @click="addBossFn"><text :class="{on:isShowBoss}"></text>{{isShowBoss?'不填法人信息':'增加法人信息'}}</view>
			<view class="submit" @click="submit">
				立即公司测名
			</view>
		</view>
		<view class="footer">
			© 起名网www.yw11.com 2008-2019 版权所有
		</view>
		<Wpicker :mode="mode" startYear="1960" endYear="2019" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
		 themeColor="#f00"></Wpicker>
		<right-pop ref="rightPop" :list="list" @select="popResult" :type="popType"></right-pop>
	</view>
</template>

<script>
	import RightPop from '../../components/right-pop.vue'
	import Wpicker from '../../components/w-picker/w-picker.vue'
	import qs from 'qs'
	export default {
		name:'index',
		data() {
			return {
				isShowBoss:false,
				popType: '',
				city: '',
				company_name: '',
				company_type: '1',
				company_line: '',
				boss_name: '',
				sex: '1',
				is_leap: '',
				birth_date: '',
				birth_time: '',
				date_type: '1',
				birth_area: '',
				list:[],
				popData: null,
				companyShow: false,
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
			// #ifdef MP-BAIDU
			swan.setPageInfo({
				title: '公司测名_起名网_八字起名_周易取名_取名字_起名字大全',
				keywords: '公司测名,起乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
				description: '起名网官方公司测名小程序，提供宝宝起名、男孩取名、女孩起名、周易起名、八字起名、诗经起名等智能起名字取名字服务。',
				articleTitle: '公司测名,取乳名,起名字,取名字,宝宝起名,八字起名,周易起名,诗经起名,男孩起名,女孩起名',
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
			uni.request({
				url: 'https://qiming.yw11.com/api/company/get_hot_area_trade',
				data: {
					app:1
				},
				method:'POST',
				header:{
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
				success: (res) => {
					this.popData=res.data.data
				}
			})
		},
		components:{
			RightPop,
			Wpicker
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
			pickerOpen(i){
				this.tabIndex=i
				this.$refs.picker.show();
			},
			onConfirm(e) {
				if (this.tabIndex == 0) {
					this.birth_time = e.checkArr[0] + '/' + e.checkArr[1] + '/' + e.checkArr[2] + ' ' + e.checkArr[3] + ':' + e.checkArr[
						4]
					this.date_type = e.date_type
					this.is_leap = e.is_leap
					this.birth_date = this.birth_time + (this.date_type == 1 ? ' 公历 ' : ' 农历 ') + (this.is_leap == 1 ? '闰月' : '')
				} else {
					this.birth_area = e.checkArr.join('-')
				}
			},
			company_select(i){
				this.company_type=i
				this.companyShow=false
			},
			company_open(){
				console.log(11)
				this.companyShow = !this.companyShow
			},
			submit() {
				let data={
					city: this.city,
					company_name: this.company_name,
					company_type: this.company_type,
					company_line: this.company_line,
				}
				if(data.city==''){
					uni.showToast({
						title: '请选择城市',
						icon: 'none'
					})
					return
				}else if(data.company_name==''){
					uni.showToast({
						title: '请输入公司字号',
						icon: 'none'
					})
					return
				}else if(data.company_line==''){
					uni.showToast({
						title: '请选择行业',
						icon: 'none'
					})
					return
				}
				uni.navigateTo({
					url: '../webview/webview?'+qs.stringify(data)
				})

			},
			addBossFn(){
				this.isShowBoss=!this.isShowBoss
			},
			showRightPop(type){
				if(type=='city'){
					this.list=this.popData.city_list
				}else{
					this.list=this.popData.parent_class_list
				}
				this.popType=type
				this.$refs.rightPop.show()
			},
			popResult(obj){
				if(this.popType=='city'){
					this.city=obj.shortname
				}else{
					this.company_line=obj.class_name
				}
			}
		}
	}
</script>

<style lang="scss">
	.index {
		background: url('https://static.quwangming.com/gsqm/images/m/ce_banner.jpg') no-repeat 0 0/100% 604upx;
		background-color: #fff;
		padding-top: 520upx;
		position: relative;
		min-height: 100%;
		padding-bottom: 100upx;
		box-sizing: border-box;
		.flex{display: flex;}
		.company_type{
			line-height: 120upx;font-size: 32upx;color: #666;
			position: relative;
			flex: 1;
			.on{visibility:hidden;}
			.select{
				position: absolute;
				display: flex;
				flex-direction: column;
				top:120upx;
				background: #f8f8f8;
				border: 1px solid #ccc;
				border-bottom: 0;
				line-height: 60upx;
				z-index: 10;
				text{
					padding: 0 20upx;
					border-bottom: 1px solid #ccc;
				}
				}
		}
		.company_name{
			flex: 2;
		}
		.company_type::after{
			content: '';
			position: absolute;
			border: 10upx solid #999;
			width: 0;
			height: 0upx;
			right: 50upx;
			top: 45upx;
			border-color:transparent transparent #999 #999;
			transform: rotate(-45deg)
			
		}
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
			.addBoos {
				display: flex;
				padding-left: 50upx;
				margin-bottom: 50upx;
				font-size: 30upx;
				line-height: 34upx;
				color: #666;

				text {
					display: inline-block;
					width: 32upx;
					height: 34upx;
					margin-right: 10upx;
					background: url('https://static.quwangming.com/gsqm/images/m/jj.png') no-repeat 0 0/32upx 64upx;
				}
				.on {
					background-position: 0 -30upx;
				}
			}

			.item {
				width: 650upx;
				height: 120upx;
				background: #fff;
				margin: 0 auto 30upx;
				border-radius: 8upx;
				box-shadow: 0 0 12upx rgba(0, 0, 0, .2);

				input {
					height: 120upx;
					padding-left: 20upx;

					* {
						height: 120upx;
						line-height: 120upx;
					}
				}

			}
			
			.submit {
				width: 650upx;
				height: 120upx;
				border-radius: 8upx;
				line-height: 120upx;
				text-align: center;
				margin: 0 auto;
				color: #fff;
				background: #ec6941;
				margin-bottom: 30upx;
			}
		}
	}
</style>
