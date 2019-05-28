.u-w-page,
.u-w-view,
.u-w-text,
.u-w-input {
  /*font-family:Helvetica Neue, Helvetica,Microsoft Yahei,Arial, sans-serif; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.u-w-page {
  height: 100%;
  background-color: #ededed;
  /*background:#ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bj {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ededed;
  /*background:#ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:-1; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.dis_flex {
  display: flex;
  flex-direction: row;
}

.dis_cneter {
  align-items: center;
  justify-content: center;
}

.flex_flow_c {
  /*flex-flow:column; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.flex_wrap {
  flex-wrap: wrap;
}

.flex {
  flex: 1;
}

.dis_inblock {
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*vertical-align:top; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.none {
  display: none;
}

.href {
  width: 646px;
  height: 101px;
  line-height: 101px;
  text-align: center;
  background-size: cover;
  color: #fff;
  font-size: 34px;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.yw11.com/xchengxu/yw11/btn_bj.png) no-repeat;
  /*background:url(https://images.yw11.com/xchengxu/yw11/btn_bj.png) no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*margin:0 auto; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.button {
  height: 96px;
  line-height: 96px;
  text-align: center;
  font-size: 36px;
  color: #fff;
  border-radius: 88px;
  border: 0;
  background-color: #e14d4d;
  align-items: center;
  justify-content: center;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#e14d4d; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*outline:none; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.button.disabled {
  height: 84rpx;
  border: 2rpx solid #e6e6e6;
  background: #fff;
  color: #999;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
button::after {
  border: none;
}
*/

.button-hover,
.navigator-hover {
  opacity: .8;
}

.my_modal_bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  background-color: #000;
  /*background:#000; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:100; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*visibility:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.my_modal_bg.show {
  opacity: .3;
  visibility: visible;
  transition: all .3s;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
*/

.border2 {
  border: 2px dotted #bfdacb;
}

.triangle-facing-right {
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  border-right-width: 3px;
  border-style: solid;
  border-right-color: #dadada;
  border-bottom-width: 3px;
  border-style: solid;
  border-bottom-color: #dadada;
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-right:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.triangle-facing-left {
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  border-left-width: 3px;
  border-style: solid;
  border-left-color: #dadada;
  border-bottom-width: 3px;
  border-style: solid;
  border-bottom-color: #dadada;
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-left:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.triangle-facing-top {
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  border-right-width: 3px;
  border-style: solid;
  border-right-color: #dadada;
  border-bottom-width: 3px;
  border-style: solid;
  border-bottom-color: #dadada;
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-right:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.triangle-facing-bottom {
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  border-right-width: 3px;
  border-style: solid;
  border-right-color: #dadada;
  border-bottom-width: 3px;
  border-style: solid;
  border-bottom-color: #dadada;
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-right:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:3px solid #dadada; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.triangle_left {
  display: none;
  display: none;
  border-top-width: 14px;
  border-style: solid;
  border-top-color: transparent;
  border-right-width: 24px;
  border-style: solid;
  border-right-color: #ededed;
  border-bottom-width: 14px;
  border-style: solid;
  border-bottom-color: transparent;
  /*width:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*height:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-right:24px solid #ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.triangle_right {
  display: none;
  display: none;
  border-top-width: 14px;
  border-style: solid;
  border-top-color: transparent;
  border-left-width: 24px;
  border-style: solid;
  border-left-color: #ededed;
  border-bottom-width: 14px;
  border-style: solid;
  border-bottom-color: transparent;
  /*width:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*height:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-left:24px solid #ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.triangle_top {
  display: none;
  display: none;
  border-left-width: 14px;
  border-style: solid;
  border-left-color: transparent;
  border-bottom-width: 24px;
  border-style: solid;
  border-bottom-color: #ededed;
  border-right-width: 14px;
  border-style: solid;
  border-right-color: transparent;
  /*width:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*height:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-left:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:24px solid #ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-right:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.triangle_bottom {
  display: none;
  display: none;
  border-left-width: 14px;
  border-style: solid;
  border-left-color: transparent;
  border-top-width: 24px;
  border-style: solid;
  border-top-color: #ededed;
  border-right-width: 14px;
  border-style: solid;
  border-right-color: transparent;
  /*width:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*height:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-left:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top:24px solid #ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-right:14px solid transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.h_10 {
  height: 20px;
}

.w_150 {
  width: 150px;
}

.b_b1 {
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: #ededed;
  /*border-bottom:2px solid #ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.b_t_1 {
  border-top-width: 2px;
  border-style: solid;
  border-top-color: #d9d9d9;
  /*border-top:2px solid #d9d9d9; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.b_b_1 {
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: #d9d9d9;
  /*border-bottom:2px solid #d9d9d9; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.none_b1 {
  border-bottom-width: 0;
  /*border-bottom:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.p_15 {
  padding: 30px;
}

.p_8 {
  padding: 16px;
}

.relative {
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.more {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #d21933;
}

.more_rt {
  right: -15px;
  top: -5px;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.more_r {
  right: 50px;
  top: 375px;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translateY(-50%); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.dis_center_x {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.back_color_fff {
  background-color: #fff;
}

.border_r {
  border-right-width: 1px;
  border-style: solid;
  border-right-color: #ededed;
  /*border-right:1px solid #ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.f_s_24 {
  font-size: 24px;
}

.f_s_28 {
  font-size: 28px;
}

.f_s_30 {
  font-size: 30px;
}

.f_s_32 {
  font-size: 32px;
}

.f_s_34 {
  font-size: 34px;
}

.f_s_36 {
  font-size: 36px;
}

.f_s_40 {
  font-size: 40px;
}

.color_aaa {
  color: #aaa;
}

.color_999 {
  color: #999;
}

.color_666 {
  color: #666;
}

.color_333 {
  color: #333;
}

.color_000 {
  color: #000;
}

.p_t5 {
  padding-top: 10px;
}

.p_t10 {
  padding-top: 20px;
}

.p_t15 {
  padding-top: 30px;
}

.p_t20 {
  padding-top: 40px;
}

.p_t25 {
  padding-top: 50px;
}

.p_t30 {
  padding-top: 60px;
}

.p_b5 {
  padding-bottom: 10px;
}

.p_b10 {
  padding-bottom: 20px;
}

.p_b15 {
  padding-bottom: 30px;
}

.p_b20 {
  padding-bottom: 40px;
}

.p_t25 {
  padding-bottom: 50px;
}

.p_b30 {
  padding-bottom: 60px;
}

.p_l10 {
  padding-left: 20px;
}

.p_l15 {
  padding-left: 30px;
}

.p_r10 {
  padding-right: 20px;
}

.p_r15 {
  padding-right: 30px;
}

.m_t1 {
  margin-top: -2px;
}

.m_t5 {
  margin-top: 10px;
}

.m_t10 {
  margin-top: 20px;
}

.m_t15 {
  margin-top: 30px;
}

.m_t20 {
  margin-top: 40px;
}

.m_t30 {
  margin-top: 60px;
}

.m_r15 {
  margin-right: 30px;
}

.m_b5 {
  margin-bottom: 10px;
}

.m_b10 {
  margin-bottom: 20px;
}

.m_b15 {
  margin-bottom: 30px;
}

.m_b20 {
  margin-bottom: 40px;
}

.m_l5 {
  margin-left: 10px;
}

.m_l10 {
  margin-left: 20px;
}

.m_l15 {
  margin-left: 30px;
}

.m_l20 {
  margin-left: 40px;
}

.b {
  font-weight: bold;
}

.l_h130 {
  line-height: 1.3;
}

.t_a_l {
  text-align: left;
  align-items: center;
  justify-content: center;
}

.t_a_c {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.t_a_r {
  text-align: right;
  align-items: center;
  justify-content: center;
}

.si_12 {
  font-size: 24px;
}

.si_110 {
  font-size: 110%;
}

.si_120 {
  font-size: 120%;
}

.si_130 {
  font-size: 130%;
}

.si_140 {
  font-size: 140%;
}

.si_150 {
  font-size: 150%;
}

.si_160 {
  font-size: 160%;
}

.si_170 {
  font-size: 170%;
}

.si_170 {
  font-size: 180%;
}

.si_190 {
  font-size: 190%;
}

.si_200 {
  font-size: 200%;
}

.co_red {
  color: #f00;
}

.co_blue {
  color: #0e4e90;
}

.co_green {
  color: #1c9916;
}

.co_hui {
  color: #999;
}

.co_j {
  color: #b8860b;
}

.co_m {
  color: #008000;
}

.co_s {
  color: #0073cf;
}

.co_h {
  color: #e25822;
}

.co_t {
  color: #a67b5b;
}

.back_j {
  background-color: #b8860b;
  /*background:#b8860b; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_m {
  background-color: #008000;
  /*background:#008000; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_s {
  background-color: #0073cf;
  /*background:#0073cf; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_h {
  background-color: #e25822;
  /*background:#e25822; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_t {
  background-color: #a67b5b;
  /*background:#a67b5b; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_red {
  background-color: #f00;
  /*background:#f00; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_blue {
  background-color: #0099ff;
  /*background:#0099ff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_green {
  background-color: #1c9916;
  /*background:#1c9916; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_white {
  background-color: #fff;
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.back_gray {
  background-color: #ededed;
  /*background:#ededed; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.tx_40 {
  width: 40px;
  height: 40px;
}

.tx_60 {
  width: 60px;
  height: 60px;
}

.tx_80 {
  width: 80px;
  height: 80px;
}

.tx_100 {
  width: 100px;
  height: 100px;
}

.name {
  padding: 0 24px;
}

.name .mz {
  padding-right: 30px;
}

.name .mz .u-w-navigator,
.name .mz .u-w-text {
  font-size: 72px;
  color: #1f1f1f;
  line-height: 1.25;
}

.name .fs {
  text-align: center;
  padding: 26px 0;
  align-items: center;
  justify-content: center;
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.name .fs>view>view:first-child {
  font-size: 52rpx;
  color: #b08f53;
  font-weight: 700;
}
*/

.name .fs .p {
  font-size: 20px;
  color: #333;
  line-height: 1;
}

.name .fs .sj {
  left: 375px;
  bottom: -2px;
  padding: 10px 10px 0;
  height: 8px;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translateX(-50%); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*overflow:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.name .fs .sj .u-w-icon {
  width: 30px;
  height: 30px;
  border: 2px solid #d7d7d7;
  transform: rotate(45deg);
  background-color: #fff;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*margin:0 auto; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.name .btn {
  text-align: right;
  align-items: center;
  justify-content: center;
}

.name .btn .u-w-view,
.name .btn .u-w-navigator,
.name .btn.u-w-button {
  height: 68px;
  line-height: 68px;
  padding: 0 30px;
  color: #fff;
  font-size: 30px;
  border-radius: 6px;
  background-color: #000040;
  /*background:#000040; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.name.gf .fs>view>view:first-child {
  color: #de2f44;
  font-size: 60rpx;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.name.gf .btn>button {
  background: #de2f44;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.btn.bx>button {
  background: #fcfcfc !important;
  border: 2rpx solid #dedede;
  border-radius: 4rpx;
  color: #999;
  padding: 0 14rpx !important;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.btn.bx>button icon {
  width: 27rpx;
  height: 26rpx;
  display: inline-block;
  vertical-align: top;
  margin: 20rpx 10rpx 0 0;
  background: url(https://images.yw11.com/xchengxu/yw11/star.png) no-repeat;
  background-size: cover;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.btn.bx.on>button {
  background: #000040 !important;
  border: 2rpx solid #000040;
  color: #fff;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.btn.bx.on>button icon {
  background-position-y: bottom;
  margin-top: 18rpx;
}
*/

.fs_xx {
  font-size: 24px;
  margin: 0 24px;
  padding-bottom: 26px;
  border-top-width: 2px;
  border-style: solid;
  border-top-color: #e2e2e2;
  /*border-top:2px solid #e2e2e2; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx.dis_flex.flex {
  padding-top: 26px;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.fs_xx>.dis_flex>.flex:nth-child(2) {
  margin: 0 50rpx;
}
*/

.fs_xx .text .u-w-text {
  color: #757575;
}

.fs_xx .bili.u-w-view,
.fs_xx .bili .u-w-text {
  width: 100%;
  height: 14px;
  border-radius: 14px;
  background-color: #e4e4e4;
  /*background:#e4e4e4; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx .bili.u-w-view {
  margin-top: 10px;
}

.fs_xx .bili .u-w-text {
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx .bili01 .u-w-text {
  background-color: #ccd2ac;
  /*background:#ccd2ac; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx .bili02 .u-w-text {
  background-color: #acd2b0;
  /*background:#acd2b0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx .bili03 .u-w-text {
  background-color: #b0d9e1;
  /*background:#b0d9e1; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx .bili04 .u-w-text {
  background-color: #b2bbd8;
  /*background:#b2bbd8; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx .bili05 .u-w-text {
  background-color: #d3bcd4;
  /*background:#d3bcd4; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fs_xx .bili06 .u-w-text {
  background-color: #edc3ce;
  /*background:#edc3ce; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.zi_js {
  margin: 0 24px;
  padding: 26px 0 10px;
  border-top-width: 2px;
  border-style: solid;
  border-top-color: #e2e2e2;
  /*border-top:2px solid #e2e2e2; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.zi_js .dt {
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
  color: #333;
  font-size: 50px;
  background-size: cover;
  margin-right: 20px;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.yw11.com/xchengxu/yw11/tian.png) no-repeat;
  /*background:url(https://images.yw11.com/xchengxu/yw11/tian.png) no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.zi_js .dd {
  font-size: 28px;
  padding-top: 24px;
  margin-bottom: 24px;
  border-top-width: 2px;
  border-style: solid;
  border-top-color: #e2e2e2;
  /*display:-webkit-box; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*box-orient:vertical; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*line-clamp:2; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*overflow:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top:2px solid #e2e2e2; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.zi_js .dl:first-child .dt {
  margin-top: 0;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.zi_js .dl:first-child .dd {
  padding-top: 0;
  border: 0;
}
*/

.fixed {
  height: 128px;
}

.fixed .con {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*box-shadow:0 -2px 8px rgba(0, 0, 0, 0.2); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:2; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fixed .btn {
  height: 96px;
  border-radius: 96px;
  color: #fff;
  font-size: 32px;
  background-color: #de2f44;
  /*background:#de2f44; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fixed .btn .u-w-icon {
  width: 32px;
  height: 32px;
  background-size: cover;
  margin-right: 10px;
  background-image: url(https://images.yw11.com/xchengxu/yw11/icon_fx.png) no-repeat;
  /*background:url(https://images.yw11.com/xchengxu/yw11/icon_fx.png) no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.fixed .btn.orange {
  background: #ff6a48;
  padding: 0 60rpx;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.fixed .btn.b_t_r_r_0 {
  border-top-right-radius: 0;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.fixed .btn.b_b_r_r_0 {
  border-bottom-right-radius: 0;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.fixed .btn.b_t_l_r_0 {
  border-top-left-radius: 0;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.fixed .btn.b_b_l_r_0 {
  border-bottom-left-radius: 0;
}
*/

.fixed_xx_box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:101; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top-left-radius:20px; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top-right-radius:20px; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*overflow:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translateY(100%); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fixed_xx_box .tit {
  font-size: 34px;
  color: #fff;
  text-align: center;
  height: 88px;
  line-height: 88px;
  align-items: center;
  justify-content: center;
  background-color: #000040;
  /*background:#000040; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fixed_xx_box .tit .u-w-view {
  right: 0;
  top: 0;
  padding: 30px;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fixed_xx_box .tit .u-w-icon {
  width: 26px;
  height: 26px;
  background-size: cover;
  background-image: url(https://images.yw11.com/xchengxu/yw11/close.png) no-repeat;
  /*background:url(https://images.yw11.com/xchengxu/yw11/close.png) no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.fixed_xx_box .jbxx .xx {
  padding-right: 58px;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.fixed_xx_box.show {
  transform: translateY(0%);
  transition: all .3s;
}
*/

.tc {
  padding: 30px;
}

.tc .radio {
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*overflow:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.tc .radio:first-child {
  margin-top: 0;
}
*/

.tc .radio .num {
  padding: 28px 0 20px;
  background-color: #f9f9f9;
  /*background:#f9f9f9; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.tc .radio .num .p {
  font-size: 34px;
  color: #333;
  line-height: 1.3;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.tc .radio .num .p:last-child {
  font-size: 36rpx;
}
*/

.tc .radio .price {
  padding: 16px 30px;
  width: 160px;
  border-top-width: 2px;
  border-style: solid;
  border-top-color: #cfcfcf;
  /*border-top:2px solid #cfcfcf; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.tc .radio .price .p {
  font-size: 24px;
  line-height: 1.2;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.tc .radio .price .p:first-child {
  font-size: 58rpx;
  color: #c72a2a;
}
*/

.tc .radio .price .p .u-w-text {
  text-decoration: line-through;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.tc .radio .price .p:first-child text {
  text-decoration: none;
  font-size: 32rpx;
}
*/

.tc .radio .checked {
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background-size: cover;
  display: none;
  background-image: url(https://images.yw11.com/xchengxu/yw11/radio.png) no-repeat;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:url(https://images.yw11.com/xchengxu/yw11/radio.png) no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.tc .radio .mbian {
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  border: 2px solid #cfcfcf;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.tc .radio .u-w-radio {
  display: none;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.tc .radio.on .checked,
.tc .radio.on .mbian {
  display: block;
}
*/

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.tc .radio.on .mbian {
  border: 5rpx solid #c72a2a;
}
*/

.pack {
  text-align: center;
  font-size: 24px;
  line-height: 44px;
  align-items: center;
  justify-content: center;
}

.pack .u-w-navigator {
  padding: 0 10px;
  color: #333;
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*vertical-align:top; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.pack .u-w-navigator .u-w-text {
  padding: 0 18px 0 36px;
}

.pack .u-w-navigator .u-w-icon {
  width: 13px;
  height: 22px;
  background-size: cover;
  background-image: url(https://images.yw11.com/xchengxu/yw11/pack_jt_r.png) no-repeat;
  /*background:url(https://images.yw11.com/xchengxu/yw11/pack_jt_r.png) no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*vertical-align:middle; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.submit .button {
  border-radius: 6px;
}

.submit .pay {
  display: flex;
  flex-direction: row;
  background-color: #09bb07;
  /*background:#09bb07; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.submit .pay .u-w-icon {
  width: 52px;
  height: 52px;
  background-size: cover;
  margin-right: 10px;
  background-image: url(https://images.yw11.com/xchengxu/yw11/pay.png) no-repeat;
  /*background:url(https://images.yw11.com/xchengxu/yw11/pay.png) no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.submit .fx {
  font-size: 28px;
}

.rowplate .table {
  border-width: 2px;
}

.rowplate .table,
.rowplate .th,
.rowplate .td {
  /*box-sizing:border-box; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.rowplate .tr {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.rowplate .th,
.rowplate .td {
  border: 2px dotted #bfdacb;
  border-width: 0;
  text-align: center;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
}

.rowplate .th {
  width: 170px;
  font-size: 26px;
  color: #999;
  /*vertical-align:middle; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.rowplate .td {
  flex: 1;
  font-size: 26px;
}

.wx_chart .flex {
  margin-top: 10px;
  height: 20px;
  background-color: #f2f2f2;
  /*background:#f2f2f2; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.wx_chart .flex .u-w-view {
  height: 20px;
}

.wx_chart .text {
  padding-left: 20px;
  width: 124px;
  font-size: 30px;
  line-height: 1.5;
}

.wx_text {
  font-size: 30px;
  line-height: 1.5;
}

.wg_tu {
  font-size: 30px;
  background-color: #fff;
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:1; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.wg_tu .xian {
  width: 30px;
  padding: 40px 0;
}

.wg_tu .text {
  text-align: center;
  padding: 0 32px;
  align-items: center;
  justify-content: center;
}

.wg_tu .text03 {
  padding: 40px 32px;
}

.wg_tu .text04 {
  text-align: center;
  padding: 20px 0;
  border-top-width: 2px;
  border-style: solid;
  border-top-color: #999;
  align-items: center;
  justify-content: center;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*clear:both; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top:2px solid #999; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.wg_tu .text .u-w-view {
  line-height: 78px;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.wg_tu .text .u-w-text {
  line-height: 320px;
}

.wg_tu .xian .line {
  border: 2px solid #999;
  margin: 4px 0;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.wg_tu .xian01 .line {
  height: 226px;
  border-right-width: 0;
  /*border-right:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.wg_tu .xian02 .line {
  height: 70px;
  border-left-width: 0;
  /*border-left:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.zygx {
  font-size: 24px;
  color: #999;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.zygx,
.gx {
  width: 100%;
}

.text_box {
  padding: 38px 0 0;
}

.text_box .u-w-view {
  height: 66px;
  font-size: 24px;
  line-height: 66px;
  padding: 0 4px;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.text_box view:last-child {
  margin-top: 8rpx;
}
*/

.kuang {
  width: 10px;
  padding: 38px 0 0;
}

.kuang .u-w-text {
  height: 50px;
  width: 6px;
  border: 2px solid #e1e1e1;
  margin-top: 6px;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.kuang text:last-child {
  margin-top: 18rpx;
}
*/

.kuang_l .u-w-text {
  border-right-color: #fff;
}

.kuang_r .u-w-text {
  border-left-color: #fff;
}

.gx_box {
  padding: 0 4px;
}

.gx_tit {
  margin-bottom: 6px;
}

.gx_block .flex {
  height: 18px;
  margin-bottom: 6px;
  background-color: #666;
  /*background:#666; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.gx_block .gx_0 .u-w-text {
  margin-right: 4px;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.gx_block .gx_0 text:last-child {
  margin: 0 0 0 2rpx;
}
*/

.gx_block .gx_on .u-w-text {
  background-color: #f00;
  /*background:#f00; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.box {
  padding: 15px;
  background-color: white;
  background-image: url(https://images.yw11.com/xchengxu/yw11/box_bj_j_01.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_j_02.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_j_03.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_j_04.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_j_t.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_j_b.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_j_l.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_j_r.jpg);
  background-size: 15px 15px;
  /*background-repeat:no-repeat,no-repeat,no-repeat,no-repeat,repeat-x,repeat-x,repeat-y,repeat-y; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background-position:left top,right top,right bottom,left bottom,0 top,0 bottom,left 0,right 0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.box .con {
  background-image: url(https://images.yw11.com/xchengxu/yw11/box_bj_yj_01.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_yj_02.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_yj_03.jpg),url(https://images.yw11.com/xchengxu/yw11/box_bj_yj_04.jpg);
  background-size: 15px 15px;
  /*background-repeat:no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background-position:left top,right top,right bottom,left bottom; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.box02 {
  background-image: url(https://images.yw11.com/xchengxu/yw11/box02_bj_j_l.jpg),url(https://images.yw11.com/xchengxu/yw11/box02_bj_j_r.jpg),url(https://images.yw11.com/xchengxu/yw11/box02_bj_j_t.jpg),url(https://images.yw11.com/xchengxu/yw11/box02_bj_j_b.jpg);
  background-size: 15px 628px,15rpx 628px,720rpx 15px,720rpx 15px;
  /*background-repeat:no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background-position:left top,right top,left top,left bottom; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.btn_top {
  width: 80%;
  font-size: 36px;
  padding: 0;
  border-radius: 30px;
  position: fixed;
  top: 375px;
  left: 75px;
  right: 75px;
  opacity: 0;
  background-color: #fff;
  /*font-weight:400; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*white-space:nowrap; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*box-shadow:4px 4px 14px rgba(102,102,102,.6); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:10000; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*visibility:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translateY(-50%) scale(1.1); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transition:all .3s; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bd_h {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}

.bd_c {
  padding: 36px;
  padding-top: 0;
}



.bd_c .p .u-w-text {
  font-size: 28px;
  color: #999;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bd_c .item {
  padding: 20px;
  line-height: 48px;
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: rgba(0,0,0,.1);
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*box-sizing:border-box; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-bottom:2px solid rgba(0,0,0,.1); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.bd_c .item>view:first-child {
  margin-right: 16rpx;
}
*/

.bd_c .item.u-w-view {
  /*white-space:normal; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bd_c .item.u-w-view .dis_inblock {
  margin-bottom: 12px;
  /*white-space:nowrap; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.bd_c .item>view .dis_inblock:last-child {
  margin-bottom: 0;
}
*/

.bd_c .item .u-w-button {
  padding: 0;
  color: #0894ec;
  font-size: 36px;
  line-height: 48px;
  border-radius: inherit;
  background-color: none;
  display: flex;
  display: flex;
  /*background:none; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*width:auto; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*height:auto; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.bd_c .item button.button-hover,
.bd_b view.button-hover {
  background: rgba(0, 0, 0, 0.15);
}
*/

.bd_c .item .u-w-icon {
  width: 36px;
  height: 36px;
  margin: 4px 8px 0;
  background-size: cover;
  background-image: url(https://images.yw11.com/common/images/suspension-m-bg.png);
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*vertical-align:top; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:url(https://images.yw11.com/common/images/suspension-m-bg.png); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}



.bd_c .item .wx {
  /*background-position:center bottom; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bd_c .item .a {
  color: #0894ec;
}

.bd_c .item .strong {
  color: #090;
  padding: 0 10px;
  font-weight: bold;
  background-color: #eee;
  /*display:inline-block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#eee; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bd_c .small {
  color: #999;
  font-size: 30px;
  padding-top: 20px;
}

.bd_b .u-w-view {
  text-align: center;
  line-height: 100px;
  align-items: center;
  justify-content: center;
  background-color: rgba(200,200,200,.1);
  border-top-width: 2px;
  border-style: solid;
  border-top-color: rgba(0,0,0,.1);
  /*background:rgba(200,200,200,.1); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top:2px solid rgba(0,0,0,.1); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.btn_top.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(-50%) scale(1);
}
*/

.select_box,
.exper_info_ok {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: left;
  font-size: 34.2848px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-top-width: 0;
  /*z-index:10000; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*border-top:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translateY(100%); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.select_box .s_tit,
.exper_info_ok .s_tit {
  padding: 0 30px;
  height: 90px;
  line-height: 90px;
  font-size: 32px;
  margin-bottom: 16px;
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: #ccc;
  /*border-bottom:2px solid #ccc; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.select_box .s_tit .u-w-text,
.exper_info_ok .s_tit .u-w-text {
  font-size: 28px;
  color: #ccc;
  padding-left: 20px;
}

.select_box .close,
.exper_info_ok .close {
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 28px;
  font-size: 28px;
  color: #333;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*display:box; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.select_box .s_box,
.exper_info_ok .s_box {
  padding: 0 14px 32px 30px;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.select_box .s_box .boy.none,
.select_box .s_box .girl.none {
  display: none;
}
*/

.select_box .u-w-checkbox-group {
  /*overflow:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.select_box .u-w-label {
  padding: 0 30px;
  line-height: 64px;
  color: #333;
  margin: 16px 14px 0 0;
  border-radius: 64px;
  font-size: 32px;
  background-color: #eee;
  /*float:left; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#eee; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.select_box label.on {
  background: #eb4b01;
  color: #fff;
}
*/

.select_box .s_box .ts {
  font-size: 24px;
  color: #f00;
  line-height: 40px;
  padding-top: 22px;
}

.select_box .s_box .u-w-input {
  display: none;
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.select_box.show,
.exper_info_ok.show {
  transform: translateY(0%);
  transition: all .3s;
}
*/

.bqhz {
  position: fixed;
  right: 20px;
  bottom: 150px;
  width: 60px;
  border-radius: 0;
  padding: 28px 0;
  line-height: 1.1;
  color: #fff;
  font-size: 28px;
  background-image: url(https://images.yw11.com/xchengxu/yw11/bqhz.png),url(https://images.yw11.com/xchengxu/yw11/bqhz.png);
  background-size: 200px 28px;
  /*background-color:transparent; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background-repeat:no-repeat; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background-position:left top,right bottom; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bqhz.u-w-view {
  background-size: 200px 28px;
  padding: 6px 12px;
  background-image: url(https://images.yw11.com/xchengxu/yw11/bqhz.png) -70px top repeat-y;
  /*background:url(https://images.yw11.com/xchengxu/yw11/bqhz.png) -70px top repeat-y; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.bqhz.u-w-view .u-w-text {
  font-size: 20px;
  /*display:block; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.time_box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /*z-index:10000; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*background:#fff; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translateY(100%); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.time_box.show {
  transform: translateY(0%);
  transition: all .3s;
}
*/

.search {
  width: 32px;
  height: 32px;
  top: 22px;
  right: -42px;
  padding: 10px;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:5; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transition:all .5s; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

/*
uniapp comment: unsupported selector.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)
.search.show {
  right: 58rpx;
}
*/

.loading {
  width: 100%;
  height: 100%;
  /*position:relative; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.loading_bg {
  width: 105%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  /*z-index:10000; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.loading_logo {
  bottom: 30px;
  left: 375px;
  width: 26%;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translate(-50%, 0); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:10001; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.loading_bagua {
  top: 195px;
  left: 375px;
  width: 25%;
  text-align: center;
  align-items: center;
  justify-content: center;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*transform:translate(-50%, 0); uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:10001; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.loading_bagua .u-w-image {
  top: 0;
  left: 0;
  width: 184px;
  height: 184px;
  /*position:absolute; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*z-index:10002; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.loading_bagua .dian {
  transform: rotate(360deg);
  animation-name: rotation;
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /*animation:rotation 2.5s linear infinite; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.loading_bagua .zi {
  transform: rotate(360deg);
  animation-name: rotationFan;
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  /*animation:rotationFan 2.5s linear infinite; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

.loading_bagua .u-w-view {
  font-size: 20px;
  text-align: left;
  align-items: center;
  justify-content: center;
}

.hide {
  opacity: 0;
  display: none;
  /*visibility:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*height:0; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
  /*overflow:hidden; uniapp comment: unsupported style.[兼容写法参考](http://ask.dcloud.net.cn/article/13170)*/
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotationFan {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}