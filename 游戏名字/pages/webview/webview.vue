<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	import qs from 'qs'
	export default {
		data(){
			return {
					url:''
				}
		},
		onLoad(options) {
			if(options.order_sn){
				this.url='https://qiming.yw11.com/wangming/order/detail?'+qs.stringify(options)
			}else{
				this.url='https://qiming.yw11.com/wangming/index/detail?'+qs.stringify(options)
			}
				
		}
		
	}
</script>

<style lang="scss">

</style>
