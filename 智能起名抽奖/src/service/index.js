import axios from 'axios'
import qs from 'qs'

let http = axios.create({
    baseURL: 'https://qiming.yw11.com',
    timeout: 10000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        // "Access-Control-Allow-Origin" : "*"
    }
})

http.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})
http.interceptors.response.use(function (response) {
        return response
}, function (error) {
    return Promise.reject(error)
})

export default {
    query: function (data) {
        return http.post('/api/gift/query',qs.stringify(data))
    },
    lotto: function (data) {
        return http.post('/api/gift/lotto',qs.stringify(data))
    },
    giftlist: function (data) {
        return http.post('/api/gift/giftlist',qs.stringify(data))
    },
    lottolist: function () {
        return http.post('/api/gift/lottolist')
    },
    ewm: function () {
        return http.post('https://qiming.yw11.com/api/public/ad',qs.stringify({cid: 1}))
    }
}