<template>
	<view class="pagination">
		<view class="point" v-if="methods==1">
			<text :class="{effects: big==0}"></text>
			<text :class="{effects: big==1}"></text>
			<text :class="{effects: big==2}"></text>
		</view>
		<view class="click" v-else-if="methods==2">
			<view class="warp">
				<text class="prev" :class="{no:current==1}" @click="prevEv">上一页</text>
				<view class="page_num">{{current}}/{{count}}</view>
				<text class="next" :class="{no:current==count}" @click="nextEv">下一页</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				big: 0,
				methods: 2,
			};
		},
		props:{
			count:{
				type: Number
			},
			current:{
				type: Number
			}
		},
		mounted(){
			if(this.methods==1){
				this.point()
			}
		},
		methods:{
			point(){
					let num = 0
				setInterval(()=>{
					this.big=num%3
					num++
				},400)
			},
			prevEv(){
				if(this.current!=1){
					this.$emit('prev',this.current-1)
				}
			},
			nextEv(){
				if(this.current!=this.count){
					this.$emit('next',this.current+1)
				}
			}
		}
	}
</script>

<style lang="less">
.pagination{
	.point{
		height: 60upx;
		text-align: center;
		background: #e1e1e1;
		text{display: inline-block;width: 12upx;height: 12upx;background: #999;border-radius: 50%;margin-right: 15upx;transition: all 0.5s;}
		.effects{transform: scale(1.4); background: #ccc;}
		}
	.click{
		padding: 0 20upx 20upx;
		.warp{
			height: 90upx;
			line-height: 90upx;
			border: 2px solid #000;
			display: flex;
			font-size: 28upx;
			color: #666;
			.prev{
				flex: 2;
				text-align: center;
				border-right: 1px solid #000;
				background: #fff;
			}
			.page_num{
				flex: 3;
				text-align: center;
			}
			.next{
				flex: 2;
				text-align: center;
				border-left: 1px solid #000;
				background: #fff;
			}
			.no{color: #ccc;}
		}
	}
}
</style>
