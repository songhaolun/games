'use strict'
import axios from 'axios'
import {Message} from 'element-ui'
// import store from '../store'
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_URL, // api的base_url
  timeout: 120000 // 请求超时时间2
})
// request拦截器
service.interceptors.request.use(config => {
  // console.log(config)
  // config['Content-Type'] = 'application/json;charset=UTF-8'
  // config.headers = 'Access-Control-Allow-Origin',
  // config.headers = {
  //   'Access-Control-Allow-Origin': '*',
  //   'Content-Type': 'application/json'
  // }
  return config
}, error => {
  console.error(error) // for debug
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    // console.log(response)
    const res = response.data

    // if (res.result == 'NOT_LOGON') {
    //   Message({
    //     showClose: true,
    //     message: res.resultTxt,
    //     type: 'error',
    //     duration: 3000,
    //     onClose: () => {
    //       // store.dispatch('FedLogOut').then(() => {
    //       //   location.reload()// 为了重新实例化vue-router对象 避免bug
    //       // })
    //     }
    //   })
    //   return Promise.reject(res)
    // } else if (res.result != 'S') {
    //   Message({
    //     showClose: true,
    //     message: res.resultTxt,
    //     type: 'error',
    //     duration: 3000
    //   })
    //   return Promise.reject(res)
    // }
    // Object.assign(res,{rspCode : getToken()});
    return res
  },
  error => {
    console.log('error' + error)// for debug
    Message({
      message: error.response.data.message != null ? error.response.data.message : error.message,
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  }
)
export default service
