/*
 * @Author: Haolun Song
 * @Date: 2019-07-29 17:17:18
 * @Last Modified by:   Haolun Song
 * @Last Modified time: 2019-07-29 17:17:18
 */
import Cookies from 'js-cookie'

/**
 *
 * @param {*} TokenKey
 */
export function getToken (TokenKey) {
  return Cookies.get(TokenKey)
}
/**
 *
 * @param {*} TokenKey
 * @param {*} token
 */
export function setToken (TokenKey, token) {
  return Cookies.set(TokenKey, token)
}
/**
 *
 * @param {*} TokenKey
 */
export function removeToken (TokenKey) {
  return Cookies.remove(TokenKey)
}
