/*
 * @Author: IBMer
 * @Date: 2018-05-29 17:17:29
 * @Last Modified time: 2019-08-07 16:51:06 */
import {
  default as api
} from '../../utils/api'

import {
  generalForm,
  generalHead,
  generalFormItem,
  recipt,
  tFormPayment,
  invoiceDetail,
  tFormContract,
  collectionClaimSlip
} from '@/model'
/**
 * FormateDate return String
 * @param {Date} date
 * @param {String} fmt
 */
export const formatDate = function (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    let str = o[k] + ''
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function format (d) {
  // var m=d.getMonth()+1;
  // return  d.getFullYear()+'-'+m+'-'+d.getDate()+" "+d.getHours+":"+d.getMinutes+":"+d.getSeconds;
  return this.formatDate(d, 'yyyy-MM-dd HH:mm:ss')
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
};

/**
 * @description long类型时间戳转换为String
 * @param {long} time
 * @param {String} formatTemp
 */
export const longToDate = function (time, formatTemp) {
  if (!isNotNull(formatTemp)) {
    formatTemp = 'yyyy-MM-dd'
  }
  var date1 = new Date()
  date1.setTime(time)
  return baseUtil.formatDate(date1, formatTemp)
}

/**
 *
 * @param {Array} list
 * @param {Array} opList
 */
export const searchhelp = function (list, opList) {
  let temp = list.length

  return new Promise((resolve, reject) => {
    if (list != null && list.length > 0) {
      list.forEach(item => {
        api({
          url: isNotNull(item.path) ? (item.path) : ('/GalaxyFSSC/searchhelp/' + item.url),
          method: isNotNull(item.method) ? item.method : 'post',
          params: item.params

        }).then((res) => {
          opList[item.dic] = []
          for (var j = 0; j < res.length; j++) {
            opList[item.dic].push(res[j])
          }
          temp--
          if (temp <= 0) {
            resolve()
          }
          // console.log(opList)
        }).catch((err) => {
          temp--
          if (temp <= 0) {
            resolve()
          }
          console.log(err)
        })
      })
    } else {
      resolve()
    }
  })
}

/**
 * InitOptionsByDicChildren
 * @param {Array} params
 * @param {object} opList
 */
export const dicChildren = function (params, opList) {
  api({
    url: '/rest/dic/children',
    method: 'post',
    data: params
  }).then((res) => {
    if (res.data == null) {
      return
    }
    for (var i = 0; i < params.length; i++) {
      if (res.data[params[i].dicId] != null && undefined != res.data[params[i].dicId]) {
        if (params[i].dicId == 'DIC_PROJECT') {
          opList[params[i].dicId] = []
          opList[params[i].dicId].push({
            code: '0',
            desc: '无项目'
          })
          for (var j = 0; j < res.data[params[i].dicId].length; j++) {
            opList[params[i].dicId].push(res.data[params[i].dicId][j])
          }
        } else {
          opList[params[i].dicId] = res.data[params[i].dicId]
        }
      }
    }
  }).catch((err) => {
    console.log(err)
  })
}

/**
 *InitOptionsByDicList
 * @param {Array} paramsDic
 * @param {object} opList
 */
export const dicList = function (paramsDic, opList) {
  api({
    url: '/rest/dic/list',
    method: 'post',
    data: paramsDic
  }).then((res) => {
    if (res.data == null) {
      return
    }
    for (var i = 0; i < paramsDic.length; i++) {
      if (res.data[paramsDic[i].dicId] != null && undefined != res.data[paramsDic[i].dicId]) {
        opList[paramsDic[i].dicId] = res.data[paramsDic[i].dicId]
      }
    }
  }).catch((err) => {
    console.log(err)
  })
}

/**
 * 常用日期选项
 */
export const pickerOptions = {
  shortcuts: [{
    text: '最近一天',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一周',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
}
/**
 * 时间相减
 * @param {开始时间} dateFrom
 * @param {结束时间} dateTo
 */
export function substractDate (dateFrom, dateTo) {
  if (!dateFrom || !dateTo) {
    return null
  }
  if (undefined === dateFrom.getTime) {
    dateFrom = new Date(dateFrom)
  }
  if (undefined === dateTo.getTime) {
    dateTo = new Date(dateTo)
  }
  let timeFrom = dateFrom.getTime()
  let timeTo = dateTo.getTime()
  let betweenDays = (timeTo - timeFrom) / (1000 * 3600 * 24)
  return parseInt(String(betweenDays))
}
/**
 * 时间比较
 * @param {*} dateFrom
 * @param {*} dateTo
 */
export function compareDate (dateFrom, dateTo) {
  if (!isNotNull(dateFrom) || !isNotNull(dateTo)) {
    return null
  }
  let timeFrom = dateFrom.getTime()
  let timeTo = dateTo.getTime()
  if (timeFrom - timeTo > 0) {
    return false
  } else {
    return true
  }
}

/**
 * @description 获取当年最后一天
 */
export function getLastDay () {
  var date = new Date()
  var year = date.getFullYear()
  return new Date(year, 11, 31)
}

/**
 * 判断是否null
 * @param data
 */
export function isNotNull (data) {
  if (data === '' || data === undefined || data === null || data === 'null') {
    return false
  } else {
    // if (Object.keys(data).length === 0) {
    //   return false // 如果为空,返回false
    // }
    return true
  }
}

/**
 * 加法
 * @param {*} arg1
 * @param {*} arg2
 */
export function accAdd (arg1, arg2) {
  var r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  let arg11 = arg1.toString().replace('.', '')
  let arg21 = arg2.toString().replace('.', '')
  if (r1 >= r2) {
    for (var i = 0; i < r1 - r2; i++) {
      arg21 += '0'
    }
  } else {
    for (var i = 0; i < r2 - r1; i++) {
      arg11 += '0'
    }
  }
  let arg12 = parseInt(arg11)
  let arg22 = parseInt(arg21)
  m = Math.pow(10, Math.max(r1, r2))
  return (arg12 + arg22) / m
}
/**
 * 减法
 * @param {*} arg1
 * @param {*} arg2
 */
export function accMinus (arg1, arg2) {
  var r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  let arg11 = arg1.toString().replace('.', '')
  let arg21 = arg2.toString().replace('.', '')
  if (r1 >= r2) {
    for (var i = 0; i < r1 - r2; i++) {
      arg21 += '0'
    }
  } else {
    for (var i = 0; i < r2 - r1; i++) {
      arg11 += '0'
    }
  }
  let arg12 = parseInt(arg11)
  let arg22 = parseInt(arg21)
  m = Math.pow(10, Math.max(r1, r2))
  return (arg12 - arg22) / m
}
/**
 * 乘法
 * @param {*} arg1
 * @param {*} arg2
 */
export function accMultiply (arg1, arg2) {
  var r1, r2
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  let arg11 = arg1.toString().replace('.', '')
  let arg21 = arg2.toString().replace('.', '')
  if (r1 >= r2) {
    for (var i = 0; i < r1 - r2; i++) {
      arg21 += '0'
    }
  } else {
    for (var i = 0; i < r2 - r1; i++) {
      arg11 += '0'
    }
  }
  let arg12 = parseInt(arg11)
  let arg22 = parseInt(arg21)
  let m1 = Math.pow(10, r1)
  let m2 = Math.pow(10, r2)
  let m = Math.pow(10, Math.max(r1, r2))
  return (arg12 * arg22) / (m * m)
}

/**
 * 除法
 * @param {*} arg1
 * @param {*} arg2
 */
export function accDivide (arg1, arg2) {
  var r1, r2
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  let arg11 = arg1.toString().replace('.', '')
  let arg21 = arg2.toString().replace('.', '')
  if (r1 >= r2) {
    for (var i = 0; i < r1 - r2; i++) {
      arg21 += '0'
    }
  } else {
    for (var i = 0; i < r2 - r1; i++) {
      arg11 += '0'
    }
  }
  let arg12 = parseInt(arg11)
  let arg22 = parseInt(arg21)
  let m1 = Math.pow(10, r1)
  let m2 = Math.pow(10, r2)
  let m = Math.pow(10, Math.max(r1, r2))
  return (arg12 * m1) / (arg22 * m2)
}
// 将数字转换成金额显示
export function toMoney (num) {
  num = num.toFixed(2)
  num = parseFloat(num)
  num = num.toLocaleString()
  return num // 返回的是字符串23,245.12保留2位小数
}
/**
 * 获取描述
 * @param {String} code
 * @param {String} name
 * @param {String} optionList
 */
export function getObjectInOption (code, name, optionList) {
  for (var i = 0; i < optionList.length; i++) {
    if (code === optionList[i][name]) {
      return optionList[i]
    }
  }
  return null
}

/**
 * 删除数组中的某个对象
 * @param {Array} arr
 * @param {Object} val
 */
export function deleteFromArray (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      arr.splice(i, 1)
    }
  }
}
/**
 * 复制对象属性
 * @param {Object} from
 * @param {Object} to
 */
export function copyParams (from, to) {
  for (var name in from) {
    to[name] = from[name]
  }
}
/**
 * 判断对象是否在数组中
 * @param {对象} o
 * @param {数组} arr
 */
export function inArray (o, arr, attrname) {
  if (!baseUtil.isNotNull(attrname)) {
    let b = false
    for (let i in arr) {
      if (arr[i] == o) {
        b = true
      }
    }
    return b
  } else {
    let b = false
    arr.forEach(item => {
      if (item[attrname] == o) {
        b = true
      }
    })
    return b
  }
}

export function formatTaxRate (taxRate, rateList) {
  var res = {
    code: null,
    taxRate: 0
  }
  for (var i = 0; i < rateList.length; i++) {
    if (!isNotNull(rateList[i].attr1)) {
      continue
    }
    var dura = accMinus(taxRate, rateList[i].attr1)
    if (dura > -0.003 && dura < 0.003) {
      res.code = rateList[i].itemCode
      res.taxRate = rateList[i].attr1
    }
  }

  return res
}

export function getDesc (code, list) {
  for (var i = 0; i < list.length; i++) {
    if (code == list[i].code) {
      return list.desc
    }
  }
  return ''
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

export function loadForm (source, target) {
  return new Promise((resolve, reject) => {
    if (isNotNull(source.head)) {
      copyParams(source.head, target.head)
    }

    if (isNotNull(source.itemList)) {
      let list = []
      if (source.itemList.length === 0 && baseUtil.inArray(source.head.docType, ['DZ14', 'DZ15'])) {
        let item = JSON.parse(JSON.stringify(generalFormItem))
        let date1 = new Date()
        let date2 = new Date()
        if (isNotNull(item.startDate)) {
          date1.setTime(item.startDate)
          item.startDate = formatDate(date1, 'yyyy-MM-dd')
        }
        if (isNotNull(item.endDate)) {
          date2.setTime(item.endDate)
          item.endDate = formatDate(date2, 'yyyy-MM-dd')
        }
        if (!isNotNull(item.loanDate)) {
          let date = new Date()
          date.setTime(item.loanDate)
          item.loanDate = formatDate(date, 'yyyy-MM-dd')
        }
        if (!isNotNull(item.repayDate)) {
          let date = new Date()
          date.setTime(item.repayDate)
          item.repayDate = formatDate(date, 'yyyy-MM-dd')
        }
        list[0] = item
        target.itemList = list
      } else {
        for (let i = 0; i < source.itemList.length; i++) {
          let item = JSON.parse(JSON.stringify(generalFormItem))
          copyParams(source.itemList[i], item)
          let date1 = new Date()
          let date2 = new Date()
          if (isNotNull(item.startDate)) {
            date1.setTime(item.startDate)
            item.startDate = formatDate(date1, 'yyyy-MM-dd')
          }
          if (isNotNull(item.endDate)) {
            date2.setTime(item.endDate)
            item.endDate = formatDate(date2, 'yyyy-MM-dd')
          }
          if (!isNotNull(item.loanDate)) {
            let date = new Date()
            date.setTime(item.loanDate)
            item.loanDate = formatDate(date, 'yyyy-MM-dd')
          }
          if (!isNotNull(item.repayDate)) {
            let date = new Date()
            date.setTime(item.repayDate)
            item.repayDate = formatDate(date, 'yyyy-MM-dd')
          }

          list.push(item)
        }
        target.itemList = list
      }
    }

    if (isNotNull(source.reciptList)) {
      // 收款认领清单
      let list1 = []
      for (let j = 0; j < source.reciptList.length; j++) {
        let item = JSON.parse(JSON.stringify(recipt))
        copyParams(source.reciptList[j], item)
        if (isNotNull(item.receiptDate)) {
          let date = new Date()
          date.setTime(item.receiptDate)
          item.receiptDate = formatDate(date, 'yyyy-MM-dd')
        }
        // if (isNotNull(item.createAt)) {
        //   let date = new Date()
        //   date.setTime(item.createAt)
        //   item.createAt = formatDate(date, 'yyyy-MM-dd')
        // }
        // if (isNotNull(item.modifyAt)) {
        //   let date = new Date()
        //   date.setTime(item.modifyAt)
        //   item.modifyAt = formatDate(date, 'yyyy-MM-dd')
        // }
        list1.push(item)
      }
      target.reciptList = list1
    }
    if (isNotNull(source.payment)) {
      target.payment = source.payment
    }

    if (isNotNull(source.contractDetails)) {
      target.contractDetails = source.contractDetails
    }

    if (isNotNull(source.paymentList)) {
      // 付款信息
      let list1 = []
      for (let j = 0; j < source.paymentList.length; j++) {
        let item = JSON.parse(JSON.stringify(tFormPayment))
        copyParams(source.paymentList[j], item)
        // if (isNotNull(item.createAt)) {
        //   let date = new Date()
        //   date.setTime(item.createAt)
        //   item.createAt = formatDate(date, 'yyyy-MM-dd')
        // }
        // if (isNotNull(item.modifyAt)) {
        //   let date = new Date()
        //   date.setTime(item.modifyAt)
        //   item.modifyAt = formatDate(date, 'yyyy-MM-dd')
        // }
        list1.push(item)
      }
      // 分流程类型 初始化长度为一的paymentList
      if (inArray(source.head.docType, ['P12', 'P18', 'FD02'])) {
        if (list1.length === 0) {
          list1[0] = JSON.parse(JSON.stringify(tFormPayment))
          list1[0].businessId = target.head.businessId
        }
      }
      target.paymentList = list1
    }
    if (isNotNull(source.invoiceList)) {
      // 发票信息
      let list1 = []
      for (let j = 0; j < source.invoiceList.length; j++) {
        let item = JSON.parse(JSON.stringify(invoiceDetail))
        copyParams(source.invoiceList[j], item)
        // if (isNotNull(item.createAt)) {
        //   let date = new Date()
        //   date.setTime(item.createAt)
        //   item.createAt = formatDate(date, 'yyyy-MM-dd')
        // }
        // if (isNotNull(item.modifyAt)) {
        //   let date = new Date()
        //   date.setTime(item.modifyAt)
        //   item.modifyAt = formatDate(date, 'yyyy-MM-dd')
        // }
        list1.push(item)
      }
      target.invoiceList = list1
    }
    if (isNotNull(source.contractList)) {
      // 发票信息
      let list = []
      for (let j = 0; j < source.contractList.length; j++) {
        let item = JSON.parse(JSON.stringify(invoiceDetail))
        copyParams(source.contractList[j], item)
        if (isNotNull(item.regdDate)) {
          let date = new Date()
          date.setTime(item.regdDate)
          item.regdDate = formatDate(date, 'yyyy-MM-dd')
        }
        if (isNotNull(item.signDate)) {
          let date = new Date()
          date.setTime(item.signDate)
          item.signDate = formatDate(date, 'yyyy-MM-dd')
        }
        if (isNotNull(item.effectiveDate)) {
          let date = new Date()
          date.setTime(item.effectiveDate)
          item.effectiveDate = formatDate(date, 'yyyy-MM-dd')
        }
        if (isNotNull(item.expirationDate)) {
          let date = new Date()
          date.setTime(item.expirationDate)
          item.expirationDate = formatDate(date, 'yyyy-MM-dd')
        }
        if (isNotNull(item.updateAt)) {
          let date = new Date()
          date.setTime(item.updateAt)
          item.updateAt = formatDate(date, 'yyyy-MM-dd')
        }
        if (isNotNull(item.createAt)) {
          let date = new Date()
          date.setTime(item.createAt)
          item.createAt = formatDate(date, 'yyyy-MM-dd')
        }
        if (isNotNull(item.modifyAt)) {
          let date = new Date()
          date.setTime(item.modifyAt)
          item.modifyAt = formatDate(date, 'yyyy-MM-dd')
        }
        list.push(item)
      }
      /*  if (inArray(source.head.docType, ['A01', 'A02', 'A03', 'A04'])) {
      if (source.contractList.length === 0) {
        list[0] = JSON.parse(JSON.stringify(tFormContract))
        list[0].businessId = source.head.businessId
      }
    } */
      // 合同
      target.contractList = list
    }
    if (isNotNull(source.outstandList)) {
      target.outstandList = source.outstandList
    }

    if (isNotNull(source.refAdvApplies)) {
      target.refAdvApplies = source.refAdvApplies
    }

    if (isNotNull(source.refOAs)) {
      target.refOAs = source.refOAs
    }
    if (isNotNull(source.claimSlipList)) {
      // 收款认领清单
      let list1 = []
      for (let j = 0; j < source.claimSlipList.length; j++) {
        let item = JSON.parse(JSON.stringify(collectionClaimSlip))
        copyParams(source.claimSlipList[j], item)
        list1.push(item)
      }
      target.claimSlipList = list1
    }
    resolve()
  })
}

/**
 * @description 金额转中文大写
 * @param {String} str
 */
export const numberChinese = function (str) {
  var num = parseFloat(str)
  var strOutput = ''
  var strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分'
  num += '00'
  var intPos = num.indexOf('.')
  if (intPos >= 0) {
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2)
  }
  strUnit = strUnit.substr(strUnit.length - num.length)
  for (var i = 0; i < num.length; i++) {
    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1)
  }
  return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, '零元')
}

/**
 * @description 日期转时间
 * @param {String} str
 */
const strToDate = function (str) {
  str = str.replace(/-/g, '/')
  var date = new Date(str)
  return date
}

/**
 * @description 计算日期之间有多少个旅游热季
 * @param {Date} start
 * @param {Date} end
 */
export const countVacationDays = function (start, end) {
  if (!isNotNull(start) || !isNotNull(end)) {
    return 0
  }

  let vacationDays = 0
  let sday = strToDate(start)
  let eday = strToDate(end)

  // console.log(sday + '' + eday)
  while ((eday.getTime() - sday.getTime()) > 0) {
    let month = sday.getMonth()
    let day = sday.getDate()
    let value = month * 100 + day
    // console.log(value)
    if (value >= 515 && value <= 815) {
      vacationDays++
    }
    sday.setDate(sday.getDate() + 1)
  }
  return vacationDays
}

/**
 * @description 数字转千分位模式
 * @param {String} s
 */
const commafy = function (s) {
  let n = 2
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  var l = s.split('.')[0].split('').reverse()
  var r = s.split('.')[1]
  var t = ''
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
}

/**
 * @description 根据单号 业务大类或菜单类型打开表单
 * @param {String} businessId
 * @param {String} businessType1
 * @param {String} docType
 */
const openFormRead = function (businessId, businessType1, docType, uniquename) {
  return new Promise((resolve, reject) => {
    let url = 'http://' + window.location.host + '/galaxy/galaxy.jsp'
    if (isNotNull(docType)) {
      url += '?docType=' + docType + '&businessId=' + businessId +
      '&action=read' + '&uniquename=' + uniquename
      void (window.open(url, '_blank', 'width=600,height=400', true))
      resolve(url)
    } else {
      api({
        url: '/GalaxyFSSC/searchhelp/queryBusinessType',
        method: 'post',
        params: {
          parentId: '',
          showChild: false,
          businessesType: businessType1
        }
      }).then((res) => {
        url += '?docType=' + res[0].attr2 + '&businessId=' + businessId + '&action=read' +
        '&uniquename=' + uniquename
        void (window.open(url, '_blank', 'width=600,height=400', true))
        resolve(url)
      }).catch((err) => {
        reject(err)
      })
    }
  })
}

const decodeParam = function (param) {
  if (isNotNull(param.val)) {
    var pa = window.atob(param.val)
    // batchconsole.log("Pa:"+pa)
    var paramList = pa.split('&')
    for (var i = 0; i < paramList.length; i++) {
      if (isNotNull(paramList[i])) {
        var item = paramList[i].split('=')
        if (isNotNull(item) && item.length > 1) {
          param[item[0]] = item[1]
        }
      }
    }
  }
}

/**
 * @description 清楚NULL
 * @param {Object} obj
 */
const clearNull = function (obj) {
  if (!isNotNull(obj)) {
    return
  }

  for (let name in obj) {
    if (obj[name] === undefined || obj[name] == null) {
      obj[name] = ''
    }
  }
}

/**
 * @descrption 根据参数校验 并输入报错信息到errorMessage
 * @param {Array} list
 * @param {Object} contro
 * @param {Array} checkList
 */
const checkItem = function (list, contro, checkList) {
  let result = true
  for (let i = 0; i < list.length; i++) {
    let first = true
    let item = list[i]
    let index = i + 1
    checkList.forEach(element => {
      let key = element.key
      let value = element.value
      if (!isNotNull(item[key])) {
        result = false
        if (isNotNull(index) && first) {
          contro.errorMessage += ' <br />第' + index + '行中： <br /> '
          first = false
        }
        contro.errorMessage += value + '为空! '
      }
    })
  }

  return result
}

/**
 * @description 根据登录人或申请人查询跨公司组织信息
 * @param {String} applicant
 * @param {Object} opList
 */
const getCrossCompInfo = function (applicant, opList) {
  return new Promise((resolve, reject) => {
    opList.DIC_CROSS_COMP = []
    opList.DIC_CROSS_DEPT = []
    api({
      url: '/GalaxyFSSC/crossCompany/queryCrossCompany',
      method: 'post',
      data: {
        searchTxt: applicant,
        companyCode: ''
      }
    }).then((res) => {
      res.forEach(element => {
        opList.IMPL_CROSS_COMP.push(element)
      })

      let compOptionMap = {}
      opList.IMPL_CROSS_COMP.forEach(element => {
        compOptionMap[element.companyCode] = {
          key: element.companyCode,
          value: element.companyTxt
        }
      })
      for (let name in compOptionMap) {
        opList.DIC_CROSS_COMP.push(compOptionMap[name])
      }
      resolve()
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

const hasAdmin = function (companyCode, rptType, employeeId) {
  return new Promise((resolve, reject) => {
    if (!isNotNull(employeeId)) {
      reject(new Error())
    }

    api({
      url: '/GalaxyFSSC/rptAuth/selectByUserId',
      method: 'get',
      params: {
        companyCode: companyCode,
        rptType: rptType,
        userId: employeeId
      }
    }).then((res) => {
      if (isNotNull(res) && res.length > 0) {
        res.forEach(ele => {
          if (ele.rptType === rptType) {
            resolve()
          }
        })
        reject(new Error())
      } else {
        reject(new Error())
      }
    }).catch((err) => {
      console.log(err)
      reject(new Error())
    })
  })
}
const EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) { element.addEventListener(type, handler, false) } else if (element.attachEvent) { element.attachEvent('on' + type, handler) } else { element['on' + type] = handler }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) { element.removeEventListener(type, handler, false) } else if (element.detachEvent) { element.detachEvent('on' + type, handler) } else { element['on' + type] = handler }
  },
  /**
   * 监听触摸的方向
   * @param target            要绑定监听的目标元素
   * @param isPreventDefault  是否屏蔽掉触摸滑动的默认行为（例如页面的上下滚动，缩放等）
   * @param upCallback        向上滑动的监听回调（若不关心，可以不传，或传false）
   * @param rightCallback     向右滑动的监听回调（若不关心，可以不传，或传false）
   * @param downCallback      向下滑动的监听回调（若不关心，可以不传，或传false）
   * @param leftCallback      向左滑动的监听回调（若不关心，可以不传，或传false）
   */
  listenTouchDirection: function (target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
    this.addHandler(target, 'touchstart', handleTouchEvent)
    this.addHandler(target, 'touchend', handleTouchEvent)
    this.addHandler(target, 'touchmove', handleTouchEvent)
    var startX
    var startY
    function handleTouchEvent (event) {
      switch (event.type) {
        case 'touchstart':
          startX = event.touches[0].pageX
          startY = event.touches[0].pageY
          break
        case 'touchend':
          var spanX = event.changedTouches[0].pageX - startX
          var spanY = event.changedTouches[0].pageY - startY

          if (Math.abs(spanX) > Math.abs(spanY)) { // 认定为水平方向滑动
            if (spanX > 30) { // 向右
              if (rightCallback) { rightCallback() }
            } else if (spanX < -30) { // 向左
              if (leftCallback) { leftCallback() }
            }
          } else { // 认定为垂直方向滑动
            if (spanY > 30) { // 向下
              if (downCallback) { downCallback() }
            } else if (spanY < -30) { // 向上
              if (upCallback) { upCallback() }
            }
          }

          break
        case 'touchmove':
          // 阻止默认行为
          if (isPreventDefault) { event.preventDefault() }
          break
      }
    }
  }
}
export const baseUtil = {
  formatDate: formatDate,
  dicChildren: dicChildren,
  dicList: dicList,
  pickerOptions: pickerOptions,
  substractDate: substractDate,
  compareDate: compareDate,
  isNotNull: isNotNull,
  accAdd: accAdd,
  accDivide: accDivide,
  accMinus: accMinus,
  accMultiply: accMultiply,
  toMoney: toMoney,
  getObjectInOption: getObjectInOption,
  deleteFromArray: deleteFromArray,
  copyParams: copyParams,
  inArray: inArray,
  formatTaxRate: formatTaxRate,
  getDesc: getDesc,
  debounce: debounce,
  searchhelp: searchhelp,
  loadForm: loadForm, // 加载 初始化表单
  longToDate: longToDate,
  numberChinese: numberChinese,
  countVacationDays: countVacationDays,
  strToDate: strToDate,
  commafy: commafy,
  openFormRead: openFormRead,
  decodeParam: decodeParam,
  clearNull: clearNull,
  checkItem: checkItem,
  getLastDay: getLastDay,
  getCrossCompInfo: getCrossCompInfo,
  hasAdmin: hasAdmin,
  EventUtil: EventUtil
}
