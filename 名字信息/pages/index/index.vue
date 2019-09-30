<template>
	<view class="content">
		<view class="container">
			<input class="input" v-model="name" type="text" value="" />
			<view  class="submit" @click="submit">submit</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ''
			}
		},
		onLoad() {

		},
		methods: {
			submit(){
				if(this.name==''){
					uni.showToast({
						title:'请输入名字',
						icon: 'none'
					})
					return;
				}
				uni.navigateTo({
					url:'../detail/detail?name='+this.name
				})
			}
		}
	}
</script>

<style>
	.container{height: 300upx;display: flex;align-items: center;justify-content: center;}
	.container .input{border: 1px solid #e1e1e1;height: 80upx;margin: 20upx;padding: 0 20upx;}
	.container .submit{border: 1px solid #e1e1e1;height: 80upx;line-height: 80upx;background: #0073CF;color: #fff;font-size: 14px;padding: 0 20upx;}
</style>
