import axios from '../axios'

export const findMenuTree = () => {
  return axios({
    url: '/menu/findTree',
    method: 'get'
  })
}
export const findNavTree = (params) => {
  return axios({
    url: '/menu/findNavTree',
    method: 'get',
    params
  })
}
export const save = (data) => {
  return axios({
    url: '/menu/save',
    method: 'post',
    data
  })
}
export const batchDelete = (data) => {
  return axios({
    url: '/menu/delete',
    method: 'post',
    data
  })
}
