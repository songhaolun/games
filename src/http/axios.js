import axios from 'axios'
import config from './config'
import Cookies from 'js-cookie'
import router from '@/router'

export default function $axios (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers
    })

    instance.interceptors.request.use(
      config => {
        let token = Cookies.get('token')
        if (token) {
          config.headers.token = token
        } else {
          router.push('/login')
        }
        return config
      },
      error => {
        // batchconsole.log('request:', error)
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          // batchconsole.log('timeout请求超时')
        }
        const errorInfo = error.response
        // batchconsole.log(errorInfo)
        if (errorInfo) {
          error = errorInfo.data
          const errorStatus = errorInfo.status
          router.push({
            path: `/errorpage/${errorStatus}`
          })
        }
        return Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
      response => {
        let data
        if (response.data === undefined) {
          data = JSON.parse(response.request.responseText)
        } else {
          data = response.data
        }
        switch (data.rc) {
          case 1:
            // batchconsole.log(data.desc)
            break
          case 0:
            // batchconsole.log('登录成功')
            break
          default:
        }
        return data
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              break
            case 500:
              err.message = '服务器内部错误'
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              break
            case 505:
              err.message = 'HTTP版本不受支持'
              break
            default:
          }
        }
        console.error(err)
        return Promise.reject(err)
      }
    )

    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}
