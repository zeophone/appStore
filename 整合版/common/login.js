import store from '../store.js'

function login() {
	return new Promise(function(resolve, reject) {
		uni.login({
			success: (info) => {
				//向服务器请求token
				if (info.code) {
					uni.request({
						// #ifdef MP-BAIDU
						url: store.state.baseUrl + '/api/baiduxcx/get_openid',
						// #endif
						// #ifdef MP-WEIXIN
						url: store.state.baseUrl + '/api/name/get_openid',
						// #endif
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						method: 'POST',
						data: {
							code: info.code,
							app: 1,
							appflag: store.state.appflag
						},
						success: (res) => {
							if (res.data.code == 1) {
								uni.setStorageSync('token', res.data.data.open_id)
								//保存用户信息
								uni.getUserInfo({
									success: (user) => {
										uni.setStorageSync('userInfo', user.userInfo)
									}
								})
								return res.data.data
							} else {
								return res.data.msg
							}
						}
					})
				}

			}
		})
	})

}

export default login
