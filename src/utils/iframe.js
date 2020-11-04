import { baseUrl } from '@/utils/global'

// 菜单转化iframe显示所需要的path
export function getIFramePath (url) {
  let iframeUrl = ''
  if (/^iframe:.*/.test(url)) {
    iframeUrl = url.replace('iframe:', '')
  } else if (/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url.replace('http://', '')
    if (iframeUrl.indexOf(':') !== -1) {
      iframeUrl = iframeUrl.substring(iframeUrl.lastIndexOf(':') + 1)
    }
  }
  return iframeUrl
}
//  转化同IP应用的URL
export function getIFrameUrl (url) {
  let iframeUrl = ''
  if (/^iframe:.*/.test(url)) {
    iframeUrl = baseUrl + url.replace('iframe:', '')
  } else if (/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url
  }
  return iframeUrl
}
