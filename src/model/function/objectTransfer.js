/*
 * @Description: 前后端对象转化
 * @Author: Haolun Song
 * @Date: 2019-07-29 20:19:26
 * @Last Modified time: 2019-08-15 10:33:05 */
import {
  busMapList
} from '../conf/busMapList'
import {
  loadUiConfig
} from '../conf/loadUiConfig'
import {
  baseUtil
} from './functions'
import {
  default as api
} from '../../utils/api'

/**
 * @description 后台类型转前端对象
 * @param {Object} source
 * @param {String} type
 */
const DB2FR = function (source, type) {
  var target = {}
  for (var i = 0; i < busMapList[type].length; i++) {
    var element = busMapList[type][i]
    if (undefined === source[element.DB] || source[element.DB] == null) {
      target[element.FR] = null
    } else {
      target[element.FR] = source[element.DB]
      target[element.FR].docType = type
    }
  }

  return target
}

/**
 * @description 前台对象转后端类型
 * @param {Object} source
 * @param {String} type
 */
const FR2DB = function (source, type) {
  var target = {}
  for (var doc in busMapList) {
    if (doc == type) {
      busMapList[doc].forEach(element => {
        if (undefined == source[element.FR] || source[element.FR] == null) {
          target[element.DB] = null
        } else {
          target[element.DB] = source[element.FR]
          target[element.DB].docType = type
        }
      })
      return target
    }
  }
}

/**
 * @description 根据业务大小类 加载UiInfo
 * @param {Object} uiInfo
 * @param {Object} head
 */
const loadSubType = function (uiInfo, head) {
  if (baseUtil.isNotNull(head) && baseUtil.isNotNull(head.docType)) {
    if (head.docType === 'EX06' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'A09') {
        let info = loadUiConfig.EX0601
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'A12') {
        let info = loadUiConfig.EX0602
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'A11') {
        let info = loadUiConfig.EX0603
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'A10') {
        let info = loadUiConfig.EX0604
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'P01' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'C15') {
        let info = loadUiConfig.P0101
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'C02') {
        let info = loadUiConfig.P0102
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'C01') {
        let info = loadUiConfig.P0103
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'P03' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'C03') {
        let info = loadUiConfig.P0301
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'C12') {
        let info = loadUiConfig.P0302
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'C16') {
        let info = loadUiConfig.P0303
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'P12' && baseUtil.isNotNull(head.businessType2)) {
      if (head.businessType2 === 'B0103') {
        let info = loadUiConfig.P12TRAIN
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'B0111') {
        let info = loadUiConfig.P12ENGIN
        baseUtil.copyParams(info, uiInfo)
      } else {
        let info = loadUiConfig.P12DEF
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'P16' && baseUtil.isNotNull(head.businessType2)) {
      if (head.businessType2 === 'B0502' && head.compType == 'NC') {
        let info = loadUiConfig.P1601
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'P17' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'B12') {
        head.options1 = '2'
        head.options2 = '2'
      } else if (head.businessType1 === 'B13') {
        head.options1 = '2'
        head.options2 = '1'
      }
      if (head.businessType1 === 'B16') {
        let info = loadUiConfig.P1701
        baseUtil.copyParams(info, uiInfo)
        head.options1 = '2'
        head.options2 = '1'
      }
    }
    if (head.docType === 'P22' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'C06') {
        head.options1 = '1'
        head.options2 = '1'
      } else if (head.businessType1 === 'C13') {
        head.options1 = '1'
        head.options2 = '2'
      } else if (head.businessType1 === 'C14') {
        head.options1 = '1'
        head.options2 = '2'
        let info = loadUiConfig.P2201
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'DZ01' && baseUtil.isNotNull(head.businessType2)) {
      if (head.businessType2 === 'S0101') {
        let info = loadUiConfig.DZ0101
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0102') {
        let info = loadUiConfig.DZ0102
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0103') {
        let info = loadUiConfig.DZ0103
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0104') {
        let info = loadUiConfig.DZ0104
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0105') {
        let info = loadUiConfig.DZ0105
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0106') {
        let info = loadUiConfig.DZ0106
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'DZ02' && baseUtil.isNotNull(head.businessType2)) {
      if (head.businessType2 === 'S0201') {
        let info = loadUiConfig.DZ0201
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0202') {
        let info = loadUiConfig.DZ0202
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S1001') {
        let info = loadUiConfig.DZ0203
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0601') {
        let info = loadUiConfig.DZ0204
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0602') {
        let info = loadUiConfig.DZ0211
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0501') {
        let info = loadUiConfig.DZ0205
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0401') {
        let info = loadUiConfig.DZ0206
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0301') {
        let info = loadUiConfig.DZ0207
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0701') {
        let info = loadUiConfig.DZ0208
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0801') {
        let info = loadUiConfig.DZ0209
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0901') {
        let info = loadUiConfig.DZ0210
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType2 === 'S0302') {
        let info = loadUiConfig.DZ0212
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'DZ03' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'S11') {
        let info = loadUiConfig.DZ0301
        baseUtil.copyParams(info, uiInfo)
        if (head.businessType2 === 'S1101') {
          let info = loadUiConfig.DZ030101
          baseUtil.copyParams(info, uiInfo)
        }
        if (head.businessType2 === 'S1102') {
          let info = loadUiConfig.DZ030102
          baseUtil.copyParams(info, uiInfo)
        }
      } else if (head.businessType1 === 'S12') {
        let info = loadUiConfig.DZ0302
        baseUtil.copyParams(info, uiInfo)
        if (head.businessType2 === 'S1201') {
          let info = loadUiConfig.DZ030201
          baseUtil.copyParams(info, uiInfo)
        }
        if (head.businessType2 === 'S1202') {
          let info = loadUiConfig.DZ030202
          baseUtil.copyParams(info, uiInfo)
        }
      }
    }
    if (head.docType === 'DZ04' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'S13') {
        let info = loadUiConfig.DZ0401
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'S14') {
        let info = loadUiConfig.DZ0402
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'S15') {
        let info = loadUiConfig.DZ0403
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'DZ05' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'D01') {
        let info = loadUiConfig.DZ0501
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'D02') {
        let info = loadUiConfig.DZ0502
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'D03') {
        let info = loadUiConfig.DZ0504
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'D28') {
        let info = loadUiConfig.DZ0503
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'D32') {
        let info = loadUiConfig.DZ0505
        baseUtil.copyParams(info, uiInfo)
      }
      if (baseUtil.isNotNull(head.businessType2)) {
        if (head.businessType2 === 'D3201') {
          let info = loadUiConfig.DZ050101
          baseUtil.copyParams(info, uiInfo)
        } else if (head.businessType2 === 'D0101') {
          let info = loadUiConfig.DZ050501
          baseUtil.copyParams(info, uiInfo)
        }
      }
    }
    if (head.docType === 'DZ06' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'D04') {
        let info = loadUiConfig.DZ0601
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'D05') {
        let info = loadUiConfig.DZ0602
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'D24') {
        let info = loadUiConfig.DZ0603
        baseUtil.copyParams(info, uiInfo)
      } else if (head.businessType1 === 'D07') {
        let info = loadUiConfig.DZ0604
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'DZ11' && baseUtil.isNotNull(head.businessType1)) {
      if (!baseUtil.inArray(head.businessType1, ['D10'])) { // 非计提专项 ,（除划扣）
        let info = loadUiConfig.DZ1101
        baseUtil.copyParams(info, uiInfo)
      }
      if (head.businessType1 === 'D08') { // 长短期借款、应付债券
        let info = loadUiConfig.DZ1102
        baseUtil.copyParams(info, uiInfo)
      }
      if (!baseUtil.inArray(head.businessType2, ['D2502', 'D2504', 'D2501', 'D2901'])) { // 通用头信息
        let info = loadUiConfig.DZ1103
        baseUtil.copyParams(info, uiInfo)
      }
      if (baseUtil.inArray(head.businessType2, ['D2901', 'D2501'])) { // 置业 原材料入账
        let info = loadUiConfig.DZ1108
        baseUtil.copyParams(info, uiInfo)
      }
      if (baseUtil.inArray(head.businessType2, ['D2502', 'D2504'])) { // 置业（原材料出账，库存商品出库）
        let info = loadUiConfig.DZ1104
        baseUtil.copyParams(info, uiInfo)
      }
      if (!baseUtil.inArray(head.businessType2, ['D2502', 'D2504', 'D2505']) &&
        !baseUtil.inArray(head.businessType1, ['D10', 'D13', 'D19', 'D18', 'D20'])) { // 通用有发票类别金额统计
        let info = loadUiConfig.DZ1105
        baseUtil.copyParams(info, uiInfo)
      }
      if (baseUtil.inArray(head.businessType2, ['D2502', 'D2504', 'D2505']) ||
        baseUtil.inArray(head.businessType1, ['D10', 'D13', 'D19', 'D18', 'D20'])) { // 通用无发票类别金额统计
        let info = loadUiConfig.DZ1106
        baseUtil.copyParams(info, uiInfo)
      }
      if (baseUtil.inArray(head.businessType2, ['D2902', 'D2507', 'D2508'])) {
        let info = loadUiConfig.DZ1107
        baseUtil.copyParams(info, uiInfo)
      }

      if (baseUtil.inArray(head.businessType2, ['D0902'])) {
        let info = loadUiConfig.DZ1110
        baseUtil.copyParams(info, uiInfo)
      }
      if (baseUtil.inArray(head.businessType1, ['D25'])) { // 置业
        let info = loadUiConfig.DZ1109
        baseUtil.copyParams(info, uiInfo)
      }
      if (baseUtil.inArray(head.businessType2, ['D31'])) { // ETC费用
        let info = loadUiConfig.DZ1112
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'DZ12' && baseUtil.isNotNull(head.businessType2)) {
      if (head.businessType2 === 'D0301') {
        let info = loadUiConfig.DZ1201
        baseUtil.copyParams(info, uiInfo)
      }
    }
    if (head.docType === 'DZ14' && baseUtil.isNotNull(head.businessType1)) {
      if (head.businessType1 === 'D22') {
        let info = loadUiConfig.DZ1401
        baseUtil.copyParams(info, uiInfo)
      }
      if (head.businessType1 === 'D23') {
        let info = loadUiConfig.DZ1402
        baseUtil.copyParams(info, uiInfo)
      }
      if (head.businessType1 === 'D27') {
        let info = loadUiConfig.DZ1403
        baseUtil.copyParams(info, uiInfo)
      }
    }
  }
}

/**
 * @description 根据AD账号/uniqueName获取employeeId
 * @param {String} ad
 * @param {String} empl
 */
const getEmplByAd = function (ad) {
  return new Promise((resolve, reject) => {
    if (baseUtil.isNotNull(ad)) {
      ad = ad.toUpperCase()
      api({
        url: '/GalaxyFSSC/searchhelp/queryEmployeeInfo',
        method: 'post',
        params: {
          employeeId: ad
        }
      }).then((res) => {
        if (baseUtil.isNotNull(res.key)) {
          resolve({
            uniquename: res.attr1,
            employeeId: res.key,
            displayname: res.value
          })
        } else {
          // resolve({
          //   uniquename: ad,
          //   employeeId: '10001692',
          //   displayname: '那仁满都拉'
          // })
          reject(new Error(' 登录人不合法!请检查url是否正确 '))
        }
      }).catch((_err) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        // reject(' 未知的制单人!请检查url是否正确 ')
        // resolve({
        //   uniquename: ad,
        //   employeeId: '10001692',
        //   displayname: '那仁满都拉'
        // })
        reject(new Error(' 登录人不合法!请检查url是否正确 '))
      })
    } else {
      // reject(' 未知的制单人!请检查url是否正确 ')

      // resolve({
      //   uniquename: ad,
      //   employeeId: '10001692',
      //   displayname: '那仁满都拉'
      // })
      reject(new Error(' 登录人不合法!请检查url是否正确 '))
    }
  })
}

// 加载表单
const loadFormByBusinessIdAndDocType = function (businessId, docType, form) {
  return new Promise((resolve, reject) => {
    var url = ''
    var param = {}
    switch (docType) {
      case 'EX01':
        url = '/GalaxyFSSC/advApply/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'EX02':
        url = '/GalaxyFSSC/reimburse/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'EX03':
        url = '/GalaxyFSSC/reimburse/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'EX07':
        url = '/GalaxyFSSC/reimburse/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'EX04':
        url = '/GalaxyFSSC/loan/queryFormInfo'
        param = {
          businessId: businessId
        }
        break
      case 'EX05':
        url = '/GalaxyFSSC/repay/queryFormInfo'
        param = {
          businessId: businessId
        }
        break
      case 'EX06':
        url = '/GalaxyFSSC/reimburse/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'P01':
        url = '/GalaxyFSSC/receipt/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'P02':
        url = '/GalaxyFSSC/receipt/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'P03':
        url = '/GalaxyFSSC/receipt/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'P04':
        url = '/GalaxyFSSC/receipt/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'P05':
        url = '/GalaxyFSSC/recon/queryReconForm'
        param = {
          businessId: businessId
        }
        break
      case 'P06':
        url = '/GalaxyFSSC/recon/queryReconForm'
        param = {
          businessId: businessId
        }
        break
      case 'P07':
        url = '/GalaxyFSSC/recon/queryReconForm'
        param = {
          businessId: businessId
        }
        break

      case 'P08':
        url = '/GalaxyFSSC/payment/queryPayForm'
        param = {
          businessId: businessId
        }
        break
      case 'P09':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P19':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P20':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P10':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P12':
        url = '/GalaxyFSSC/payment/queryPayForm'
        param = {
          businessId: businessId
        }
        break
      case 'P18':
        url = '/GalaxyFSSC/payment/queryPayForm'
        param = {
          businessId: businessId
        }
        break
      case 'P13':
        url = '/GalaxyFSSC/payment/queryPayForm'
        param = {
          businessId: businessId
        }
        break
      case 'P16':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P17':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P25':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P22':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P23':
        url = '/GalaxyFSSC/commonForm/queryCommonForm'
        param = {
          businessId: businessId
        }
        break
      case 'P11':
        url = '/GalaxyFSSC/payment/queryPayForm'
        param = {
          businessId: businessId
        }
        break
      case 'P14':
        url = '/GalaxyFSSC/payment/queryPayForm'
        param = {
          businessId: businessId
        }
        break
      case 'P15':
        url = '/GalaxyFSSC/ivvf/queryIvvfForm'
        param = {
          businessId: businessId
        }
        break
      case 'P21':
        url = '/GalaxyFSSC/ivvf/queryIvvfForm'
        param = {
          businessId: businessId
        }
        break
      case 'P24':
        url = '/GalaxyFSSC/ivvf/queryIvvfForm'
        param = {
          businessId: businessId
        }
        break
      case 'FD02':
        url = '/GalaxyFSSC/paidFail/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ01':
        url = '/GalaxyFSSC/asset/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ02':
        url = '/GalaxyFSSC/asset/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ03':
        url = '/GalaxyFSSC/asset/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ04':
        url = '/GalaxyFSSC/asset/queryForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ05':
        url = '/GalaxyFSSC/salary/querySalaryForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ06':
        url = '/GalaxyFSSC/account/searchForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ09':
        url = '/GalaxyFSSC/account/searchForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ11':
        url = '/GalaxyFSSC/account/searchForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ14':
        url = '/GalaxyFSSC/account/searchForm'
        param = {
          businessId: businessId
        }
        break
      case 'DZ15':
        url = '/GalaxyFSSC/account/searchForm'
        param = {
          businessId: businessId
        }
        break
      case 'FD01':
        url = '/GalaxyFSSC/allocate/queryHeader'
        param = {
          businessId: businessId
        }
        break
    }
    if (baseUtil.isNotNull(url)) {
      api({
        url: url,
        method: 'get',
        params: param
      }).then((res) => {
        var getForm = DB2FR(res, docType)

        // 根据返回结果刷新、加载表单
        baseUtil.loadForm(getForm, form)
        form.head.docType = docType
        // TODO 资产获取合同

        resolve('success')
      }).catch((err) => {
        reject(err)
      })
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('加载表单失败 未知的流程类型！')
    }
  })
}
const detailByBeforeSave = function (form) {
  if (baseUtil.isNotNull(form.itemList) && Object.keys(form.itemList).length !== 0) {
    form.itemList[0].businessId = form.head.businessId
  }
  return new Promise((resolve, reject) => {
    let url = ''
    let param = {}
    let docType = form.head.docType
    switch (docType) {
      case 'DZ14':
        baseUtil.isNotNull(form.itemList[0].itemNo) ? url = '/GalaxyFSSC/account/modifyAccountDetail'
          : url = '/GalaxyFSSC/account/createAccountDetail'
        param = {
          formAccountHead: form.head,
          formAccountDetail: form.itemList[0]
        }
        break
      case 'DZ15':
        baseUtil.isNotNull(form.itemList[0].itemNo) ? url = '/GalaxyFSSC/account/modifyAccountDetail'
          : url = '/GalaxyFSSC/account/createAccountDetail'
        param = {
          formAccountHead: form.head,
          formAccountDetail: form.itemList[0]
        }
        break
      case 'P15':
        if (baseUtil.isNotNull(form.invoiceList) && Object.keys(form.invoiceList).length !== 0) {
          url = '/GalaxyFSSC/ivvf/modifyForm'
          param = {
            formIvvfHead: form.head,
            formIvvfDetails: form.invoiceList
          }
        }
        break
      case 'P21':
        if (baseUtil.isNotNull(form.invoiceList) && Object.keys(form.invoiceList).length !== 0) {
          url = '/GalaxyFSSC/ivvf/modifyForm'
          param = {
            formIvvfHead: form.head,
            formIvvfDetails: form.invoiceList
          }
        }
        break
      case 'FD02':
        if (baseUtil.isNotNull(form.paymentList) && form.paymentList.length !== 0) {
          form.paymentList[0].businessId = form.head.businessId
        }
        if (baseUtil.isNotNull(form.paymentList) && form.paymentList.length !== 0) {
          if (baseUtil.isNotNull(form.paymentList[0].itemNo)) {
            url = '/GalaxyFSSC/paidFail/modifyDetail'
          } else {
            url = '/GalaxyFSSC/paidFail/createDetail'
          }
          param = {
            formPaidFailHead: form.head,
            formPaidFailDetail: form.paymentList[0]
          }
        }
        break
      default:
        resolve()
        return
    }
    if (baseUtil.isNotNull(url)) {
      api({
        url: url,
        method: 'post',
        data: param
      }).then((res) => {
        let reform = DB2FR(res, form.head.docType)
        // 根据返回结果刷新、加载表单
        baseUtil.loadForm(reform, form)
        // console.log(form)
        form.head = reform.head
        if (baseUtil.isNotNull(reform.itemList)) {
          form.itemList = reform.itemList
        }
        if (baseUtil.isNotNull(reform.paymentList)) {
          form.paymentList = reform.paymentList
        }
        form.head.docType = docType
        resolve(form)
      }).catch((err) => {
        reject(err)
      })
    } else {
      resolve()
    }
  })
}
export const objTrans = {
  DB2FR: DB2FR,
  FR2DB: FR2DB,
  loadSubType: loadSubType,
  getEmplByAd: getEmplByAd,
  loadFormByBusinessIdAndDocType: loadFormByBusinessIdAndDocType,
  detailByBeforeSave: detailByBeforeSave
}
