<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
					url:'https://qiming.yw11.com/english/search/names/masculine'
				}
		},
		onLoad(options) {
			if(options.type){
				if(options.type.length==1){
					this.url='https://qiming.yw11.com/english/search/letter/'+options.type
				}else{
					switch(options.type){
						case '男孩英文名':
						this.url='https://qiming.yw11.com/english/search/names/masculine';
						break
						case '女孩英文名':
						this.url='https://qiming.yw11.com/english/search/names/feminine';
						break
						case '中性英文名':
						this.url='https://qiming.yw11.com/english/search/names/unisex';
						break
						case '好听的英文名':
						this.url='https://qiming.yw11.com/english/search/usage/nice';
						break
						case '流行的英文名':
						this.url='https://qiming.yw11.com/english/search/usage/popular';
						break
					}				
				}				
			}else{
				this.url='https://qiming.yw11.com/english/index/detail/'+options.ename
			}


		}
		
	}
</script>

<style lang="scss">

</style>
