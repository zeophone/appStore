<template>
    <div class="pop" v-if="isShow">
        <div class="bg" @click="close"></div>
        <div class="prize">
            <span class="close" @click="close"></span>
            <p>{{data[num].tit}}</p>
            <img :src="data[num].url" alt="">
            <div class="choujiang" @click="choujiang"></div>
            <div class="myPrize" @click="myPrize"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow: false,
            scrollTop:0,
            num: 0,
            data: {
                0:{
                    url: require('../assets/39.png'),
                    tit: '大师手工起名39元优惠券'
                },
                6:{
                    url: require('../assets/999.png'),
                    tit: '888元育儿电子书大礼包'
                }
            }
        }
    },
    methods:{
        show(i){
            this.num=i
            this.isShow=true
            this.scrollTop = document.scrollingElement.scrollTop;
            document.body.classList.add('bodyCls');
            document.body.style.top = -this.scrollTop + 'px';
        },
        close(){
            document.body.classList.remove('bodyCls');
            document.scrollingElement.scrollTop = this.scrollTop;
            this.isShow=false
        },
        choujiang(){
            this.$emit('replace')
            this.close()
        },
        myPrize(){
            this.$emit('myprize')
            this.close()
        }
    }
}
</script>

<style lang="less" scoped>
.pop{
    z-index: 10;
     position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
        background: rgba(0,0,0,0.6);
    }
    .prize{
        width: 6.42rem;
        height: 8.82rem;
        background: url(../assets/prize.png) no-repeat 0 0;
        background-size: 100%;
        z-index: 11;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: -4.41rem;
        margin-left: -3.21rem;
        p{
            width: 100%;
            position: absolute;
            top: 4rem;
            text-align: center;
            color:#3a287d;
        }
        img{
            position: absolute;
            top: 4.5rem;
            left:1.2rem;
            width: 4rem;
            height: 1.7rem;
        }
        .close{
            position: absolute;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            right: 0;
            top: 1.1rem;

        }
        .choujiang{
            position: absolute;
            top: 6.4rem;
            left:1.6rem;
            width: 3rem;
            height: 0.8rem;
            border-radius: 0.5rem;
        }
        .myPrize{
             position: absolute;
            top: 7.4rem;
            left:1.6rem;
            width: 3rem;
            height: 0.8rem;
            border-radius: 0.5rem;
        }
    }
}
</style>

