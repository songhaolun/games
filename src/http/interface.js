import axios from './axios'

// 单独导出
export const login = data => {
  return axios({
    url: '/login',
    method: 'post'
  })
}

export const getUser = () => {
  return axios({
    url: '/user',
    method: 'get'
  })
}

export const getMenu = data => {
  return axios({
    url: '/menu',
    method: 'post',
    data
  })
}

export default {
  login,
  getUser,
  getMenu
}
