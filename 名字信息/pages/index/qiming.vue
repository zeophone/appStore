<template>
	<view class="p_20">
		<view class="surname-warp m_b20">
			<input v-model="surname" type="text" />
		</view>
		<view class="sex-warp m_b20">
			<text :class="sex==1?'on':''" @click="checkSex(1)">1</text>
			<text :class="sex==2?'on':''" @click="checkSex(2)">2</text>
			<text :class="sex==3?'on':''" @click="checkSex(3)">3</text>
		</view>
		<view class="wuxing-warp m_b20">
			<text :class="{on:w==i}" v-for="(item,i) in wuxing" @click="checkW(i)">{{item.name}}</text>
		</view>
		<button type="primary" @click="submit">submit</button>
	</view>
</template>
<script>
	import qs from 'qs';
	export default {
		data() {
			return {
				sex: 3,
				w:0,
				surname: '',
				wuxing: [{
					name: 'j',
					
					params: {
						birth_date: '2013/12/01 01:24',
						date_type: '1',
						is_leap: '0',
						from_source: 'qm2020',
						birth_address: '浙江省-杭州市-滨江区',
						city_code: '120101'
					}
				}, {
					name: 'm',
					params: {
						birth_date: '2020/01/04 00:10',
						date_type: '1',
						is_leap: '0',
						from_source: 'qm2020',
						birth_address: '浙江省-杭州市-滨江区',
						city_code: '120101'
					}
				}, {
					name: 's',
					params: {
						birth_date: '2011/12/01 09:24',
						date_type: '1',
						is_leap: '0',
						from_source: 'qm2020',
						birth_address: '浙江省-杭州市-滨江区',
						city_code: '120101'
					}
				}, {
					name: 'h',
					params: {
						birth_date: '2019/10/09 17:03',
						date_type: '1',
						is_leap: '0',
						from_source: 'qm2020',
						birth_address: '浙江省-杭州市-滨江区',
						city_code: '120101'
					}
				}, {
					name: 't',
					params: {
						birth_date: '2020/01/09 09:24',
						date_type: '1',
						is_leap: '0',
						from_source: 'qm2020',
						birth_address: '浙江省-杭州市-滨江区',
						city_code: '120101'
					}
				}]
			}
		},
		methods: {
			checkSex(i) {
				this.sex = i;
			},
			checkW(i){
				this.w = i;
			},
			submit(){
				let params = this.wuxing[this.w].params;
				uni.setStorageSync('wuxing',this.w);
				params.surname = this.surname;
				if(this.sex == 3){
					params.sex = 1;
					let id1 ,id2;
					this.getId(params).then(res=>{
						id1 = res
					});
					params.sex = 2;
					this.getId(params).then(res=>{
						id2 = res
					});
					let timer=setInterval(()=>{
						console.log(id1,id2)
						if(id1&&id2){
							
							clearInterval(timer);
							uni.navigateTo({
								url: '../detail/qiming?id1='+id1+'&id2='+id2
							})
						}
					},1000)
				}else{
					params.sex = this.sex;
					let id1;
					this.getId(params).then(res=>{
						id1 = res
					});
					let timer=setInterval(()=>{
						if(id1){
							clearInterval(timer);
							uni.navigateTo({
								url: '../detail/qiming?id1='+id1
							})
						}
					},1000)
				}
			},
			getId(params){
			 return	this.$http.post('/v5/qiming-single/submit',params).then(res=>{
					return res.data.info_id;
				})
			}
		}
	}
</script>
<style lang="scss">
	.surname-warp {
		border: 1px solid #ccc;
		padding: 20upx;
	}

	.sex-warp,.wuxing-warp{
		text-align:center;
		text {
			display: inline-block;
			width: 100upx;
			text-align: center;
			border: 1px solid #ccc;
		}
		text.on{
			background: #4CD964;
			color: #fff;
		}
	}
</style>
