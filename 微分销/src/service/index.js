import axios from 'axios';
import Vue from 'vue'

const service = axios.create({
    baseURL: '', // api的base_url  process.env.BASE_API
    timeout: 5000 // request timeout
})

service.interceptors.request.use(config => {
    if (localStorage.getItem('wfx_token')) {
        //携带token操作
        config.headers['token'] = localStorage.getItem('wfx_token')
    }
    return config
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    if (response.data.code == 30000){
            localStorage.removeItem('wfx_token')
            location.reload()
    }else{
        return response.data
    } 
},error => {
        return Promise.reject(error)
})

export default {
    post(url, data) {
        return service({
            method: 'post',
            url,
            data: data,//qs.stringify(data),
            timeout: 30000,
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
    },
    get(url, params) {
        return service({
            method: 'get',
            url,
            params,
            timeout: 30000,
            headers: {

            }
        })
    }
}