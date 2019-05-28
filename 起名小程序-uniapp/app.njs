require('./polyfill.js');
/**
* DCloud统计服务类似于快应用里的友盟或阿拉丁，可登录 http://dev.dcloud.net.cn 查看统计数据
* 使用该服务可在一点看到所有渠道的运营数据，避免登陆不同渠道的后台，更方便的掌握业务运营状态。
* 如不需要此服务，请注释掉本行代码
*/
require('./dcloud_stat.js');  

//app.js
App({
  globalData: {
    userInfo: null,
    app: 1,
    appflag: 'qmw', //'scbz',//qmw
    openId: await uni.getStorageSync('openId'),
    baseUrl: 'https://qiming.yw11.com', //'http://test.yw11.com'//https://qiming.yw11.com
    systemInfo: await uni.getSystemInfoSync()
  },

  onLaunch: function (res) {
    //调用API从本地缓存中获取数据
    if (!this.globalData.openId) {
      this.userLogin();
    }
  },

  isEmptyObject: function (e) {
    //对象是否为空；判断是否是第一次授权，非第一次授权且授权失败则进行提醒
    var t;
    for (t in e) return !1;
    return !0;
  },
  // 获取openid
  userLogin: async function () {
    return new Promise((resolve, reject) => {
      //uniapp comment: unsupported api.[兼容写法参考](http://ask.dcloud.net.cn/article/13168)
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            //发起网络请求
            uni.fetch.fetch(uni.parseArgs({
              url: this.globalData.baseUrl + '/api/name/get_openid',
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: 'POST',
              data: {
                code: res.code,
                app: this.globalData.app,
                appflag: this.globalData.appflag
              },
              success: res => {
                console.log(res, 11);
                var openid = res.data.data.open_id;
                this.globalData.openId = openid;
                await uni.setStorageSync('openId', openid);
                resolve({
                  data: openid
                });
              },
              fail: function (res) {}
            }, {
              page: 'app',
              method: 'request'
            }));
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    });
  },
  // 请求红包接口
  givePacket: function (openId) {
    return new Promise((resolve, reject) => {
      uni.fetch.fetch(uni.parseArgs({
        url: this.globalData.baseUrl + '/api/public/red_packet',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        data: {
          app_mchid: this.globalData.openId || openId.data,
          appflag: this.globalData.appflag,
          app: this.globalData.app
        },
        success: function (res) {
          resolve(res);
        }
      }, {
        page: 'app',
        method: 'request'
      }));
    });
  },
  // 请求红包列表接口
  redPacketList: function (type) {
    return new Promise((resolve, reject) => {
      uni.fetch.fetch(uni.parseArgs({
        url: this.globalData.baseUrl + '/api/public/redpacket_list',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        data: {
          app_mchid: this.globalData.openId,
          appflag: this.globalData.appflag,
          app: this.globalData.app,
          type: type
        },
        success: function (res) {
          resolve(res);
        }
      }, {
        page: 'app',
        method: 'request'
      }));
    });
  }
}, {
  path: 'app',
  module: module,
  exports: exports,
  $app_require$: $app_require$,
  wxs: typeof _$wxs$_ === 'undefined' ? {} : _$wxs$_
});
  