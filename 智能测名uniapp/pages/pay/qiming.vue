<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.$http.post('/api/nameorder/order_view',{}).then(res=>{
				
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
