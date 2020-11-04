/*
 * @Author: Haolun Song
 * @Date: 2019-10-11 21:22:58
 * @Last Modified by: Haolun Song
 * @Last Modified time: 2020-01-08 15:43:13
 */
/* jshint esversion: 6 */
// import {
//   busMapList
// } from '../conf/busMapList'
// import {
//   loadUiConfig
// } from '../conf/loadUiConfig'
import {
  baseUtil
} from './functions'
import {
  default as api
} from '../../utils/api'

var _this = {}
var _form = {}
var _contro = {}

/**
 * @description 校验函数库
 */
const checkUnits = {
  basefunction: function (form, contro, opList) {
    return new Promise((resolve, reject) => {})
  },
  checkPaymentSplitAmount: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      if (baseUtil.isNotNull(form.paymentList) && form.paymentList.length > 0) {
        let paymentMap = {}
        let vendor = form.paymentList[0].vendor

        let subMin = 0
        let subPaid = 0

        for (let i = 0; i < form.paymentList.length; i++) {
          let item = form.paymentList[i]
          if (item.vendor !== vendor) {
            contro.unsyncMessage += '只可选取一个供应商! <br />'
            reject(new Error('只可选取一个供应商！'))
            return
          }

          if (form.head.compType === 'NC') {
            resolve('success!')
          } else {
            if (item.amount < 0) {
              subMin = baseUtil.accAdd(subMin, item.amount)
            }
            let key = item.businessId2 + '-' + item.accountingYear + '-' + item.itemNo2 + '-' + item.unit
            if (!baseUtil.isNotNull(paymentMap[key])) {
              paymentMap[key] = JSON.parse(JSON.stringify(item))
            } else {
              paymentMap[key].paymentAmount = baseUtil.accAdd(
                paymentMap[key].paymentAmount,
                item.paymentAmount
              )
            }
            if (paymentMap[key].paymentAmount > 0 && paymentMap[key].paymentAmount > paymentMap[key].paidAmount) {
              contro.unsyncMessage += '拆分支付金额合计应小于等于未支付金额! <br />'
              reject(new Error('拆分支付金额合计应小于等于未支付金额!'))
              return
            }
          }
        }

        for (let name in paymentMap) {
          subPaid = baseUtil.accAdd(subPaid, paymentMap[name].verifiedAmount)
        }
        if (baseUtil.accAdd(subPaid, subMin) == 0) {
          resolve('success!')
        } else {
          _this.$confirm('仍有被扣除的款项:' + baseUtil.accAdd(subPaid, subMin) + '元 未被引入！（若不是支付尾款的情形，请忽略本提示）, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            resolve()
          }).catch(() => {
            reject(new Error())
          })
        }
      } else {
        contro.unsyncMessage += '付款明细为空! <br />'
        reject(new Error('付款明细为空'))
      }

      // resolve('success!')
    })
  },
  confirmSave: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      _this.$confirm('请确认是否已经保存修改！', '是否继续', {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  checkVendorIsEqual: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      if (baseUtil.isNotNull(form.paymentList) && form.paymentList.length > 0) {
        let flag = false
        for (let i = 0; i < form.paymentList.length; i++) {
          if (form.paymentList[i].vendorTxt !== form.paymentList[i].accountName) {
            flag = true
            break
          }
        }
        if (flag) {
          _this.$confirm('收款账户名称与供应商名称不一致，请核实确认!', {
            confirmButtonText: '继续',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            resolve()
          }).catch(err => {
            reject(err)
          })
        } else {
          resolve()
        }
      } else {
        resolve()
      }
    })
  },
  checkCustomerIsEqual: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      if (baseUtil.isNotNull(form.paymentList) && form.paymentList.length > 0) {
        let flag = false
        for (let i = 0; i < form.paymentList.length; i++) {
          if (form.paymentList[i].customerTxt !== form.paymentList[i].accountName) {
            flag = true
            break
          }
        }
        if (flag) {
          _this.$confirm('收款账户名称与客户名称不一致，请核实确认!', {
            confirmButtonText: '继续',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            resolve()
          }).catch(err => {
            reject(err)
          })
        } else {
          resolve()
        }
      } else {
        resolve()
      }
    })
  },
  confirmOutlimit: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      _this.$confirm('有费用已经超标请确认！', '是否继续', {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  checkReceiptDateEqual: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      if (baseUtil.isNotNull(form.reciptList) && form.reciptList.length !== 0) {
        let receiptDate = form.reciptList[0].receiptDate
        for (let i = 0; i < form.reciptList.length; i++) {
          if (receiptDate !== form.reciptList[i].receiptDate) {
            contro.unsyncMessage += '批量认领的收款日期必须为同一天！ <br />'
            reject(new Error('批量认领的收款日期必须为同一天!'))
          }
        }
      }
      resolve()
    })
  },
  amountLgZero: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      if (baseUtil.isNotNull(_this)) {
        _this.$refs.formContent.$refs.assGeneralLedgerInfo.$refs.assGeneralLedger.validate((valid) => {
          if (!valid) {
            contro.unsyncMessage += ' 请完整填写表单!<br />'
            reject(new Error('请完整填写表单!'))
          }
        })
      }
      // if (baseUtil.isNotNull(form.itemList) && form.itemList.length !== 0) {
      //   let sumAmmount = form.itemList[0].sumAmmount
      //   if (sumAmmount <= 0) {
      //     contro.unsyncMessage += '【金额】字段为必填 <br />'
      //     reject(new Error('【金额】字段为必填'))
      //   }
      // }
      resolve()
    })
  },
  stampTaxCheck: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      let condition = {
        stampId: '',
        cpnCode: '',
        regDate: '',
        taxAction: '',
        document: '',
        itemNo: '',
        projectId: ''
      }
      condition.document = form.head.businessId
      _this.api({
        url: '/GalaxyFSSC/reportStamp/queryByDocument',
        method: 'post',
        data: condition
      }).then((res) => {
        if (res.length !== 0 && baseUtil.isNotNull(res)) {
          for (let i = 0; i < res.length; i++) {
            if (form.head.wbs !== res[i].projectId) {
              contro.unsyncMessage += ' 表单中的项目名称与关联印花税不一致!<br />'
              reject(new Error('表单中的项目名称与关联印花税不一致!'))
            }
          }
        }
        resolve()
      }).catch((err) => {
        console.log(err)
      })
    })
  },
  checkEditVoucherInfo: function (form, contro, opList) {
    return new Promise((resolve, reject) => {
      if (baseUtil.isNotNull(form.voucher) && baseUtil.isNotNull(form.voucher.vcInfoHead) &&
        baseUtil.isNotNull(form.voucher.vcInfoHead.voucherNo)) {
        resolve()
      } else {
        // _this.$confirm('未检测到会计凭证信息！', '是否继续', {
        //   confirmButtonText: '继续',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   resolve()
        // }).catch(_ => {
        contro.unsyncMessage += '请维护凭证信息!<br />'
        reject(new Error('请维护凭证信息!'))
        // })
      }
    })
  }
}
/**
 * @description 递归校验
 * @param {Array} checkStack
 * @param {Object} form
 * @param {Object} contro
 * @param {Object} opList
 */
const dp = function (checkStack, form, contro, opList) {
  return new Promise((resolve, reject) => {
    if (!baseUtil.isNotNull(checkStack) || checkStack.length === 0) {
      resolve()
    } else {
      if (baseUtil.isNotNull(checkUnits[checkStack[0]])) {
        checkUnits[checkStack[0]](form, contro, opList)
          .then(res => {
            checkStack.splice(0, 1)
            dp(checkStack, form, contro, opList)
              .then((res) => {
                resolve(res)
              }).catch((err) => {
                reject(err)
              })
          }).catch((err) => {
            reject(err)
          })
      } else {
        resolve()
      }
    }
  })
}

/**
 * @description 异步递归校验 驱动
 * @param {object} form
 * @param {object} contro
 * @param {object} opList
 * @param {Vue} $this
 */
const unsyncCheck = function (form, contro, opList, $this, type) {
  return new Promise((resolve, reject) => {
    _this = $this
    let checkStack = []
    contro.unsyncMessage = ''

    if (type === 'apply') {
      if (baseUtil.inArray(contro.reviewPoint, ['financialStaffTask', 'fssc1Task', 'fssc2Task'])) {
        checkStack.push('confirmSave')
      }
      if (baseUtil.inArray(form.head.docType, ['EX02', 'EX03']) && contro.reviewPoint === 'fssc1Task') {
        for (let i = 0; i < form.itemList.length; i++) {
          if (form.itemList[i].overLimit === '金额已超标！') {
            checkStack.push('confirmOutlimit')
            break
          }
        }
      }
      if (baseUtil.isNotNull(_this.$refs.editVoucherForReview)) {
        checkStack.push('checkEditVoucherInfo')
      }
      if (baseUtil.inArray(form.head.docType, ['P08', 'P11', 'P12'])) {
        checkStack.push('checkVendorIsEqual')
      }
      if (baseUtil.inArray(form.head.docType, ['P14', 'P18'])) {
        checkStack.push('checkCustomerIsEqual')
      }
    } else {
      // 根据表单类型 参数 组装校验栈
      // checkStack.push('checkEX02')
      if (baseUtil.inArray(form.head.docType, ['P08', 'P11'])) {
        checkStack.push('checkPaymentSplitAmount')
      }
      if (baseUtil.inArray(form.head.docType, ['P08', 'P11', 'P12'])) {
        checkStack.push('checkVendorIsEqual')
      }
      if (baseUtil.inArray(form.head.docType, ['P14', 'P18'])) {
        checkStack.push('checkCustomerIsEqual')
      }
      if (baseUtil.inArray(form.head.docType, ['P04'])) {
        checkStack.push('checkReceiptDateEqual')
      }
      if (baseUtil.inArray(form.head.businessType1, ['D22', 'D27'])) {
        checkStack.push('amountLgZero')
      }
      if (baseUtil.inArray(form.head.businessType1, ['D04']) && form.head.compType == 'NC') {
        checkStack.push('stampTaxCheck')
      }
    }

    dp(checkStack, form, contro, opList)
      .then(res => {
        resolve(res)
      }).catch((err) => {
        if (baseUtil.isNotNull(contro.unsyncMessage)) {
          _this.$notify({
            dangerouslyUseHTMLString: true,
            duration: 0,
            offset: 100,
            title: '提示',
            message: contro.unsyncMessage,
            type: 'error'
          })
          reject(err)
        }
      })
  })
}

/**
 *
 * @param {Object} requestList
 * @param {Object} form
 * @param {Object} contro
 * @param {Vue} $this
 */
const oneByOneApi = function (requestList, form, contro, $this) {
  if (baseUtil.isNotNull($this)) {
    _this = $this
  }
  return new Promise((resolve, reject) => {
    if (!baseUtil.isNotNull(requestList) || requestList.length === 0) {
      _this.$emit('saveform')
      resolve()
    } else {
      if (baseUtil.isNotNull(requestList[0])) {
        api({
          url: requestList[0].url,
          method: requestList[0].method,
          data: requestList[0].data
        }).then((res) => {
          if (requestList[0].senfType === 'splitVoucher') {
            if (res.TYPE === 'S' && !(baseUtil.inArray(requestList[0].data.mareClear, ['B', 'C']) && res.NUMBER !== '312')) {
              let voucherId = res.MESSAGE_V1
              _this.$notify({
                duration: 0,
                offset: 100,
                title: '提示',
                message: requestList[0].successMessage + voucherId,
                type: 'success'
              })
              requestList[0].elements.forEach(pay => {
                pay.voucherId = voucherId
              })
            } else {
              _this.$notify({
                duration: 0,
                offset: 100,
                title: '提示',
                message: requestList[0].errorMessage + res.MESSAGE,
                type: 'warning'
              })
            }
          } else {
            this.$notify({
              duration: 0,
              offset: 100,
              title: '提示',
              message: '执行成功!',
              type: 'success'
            })
          }

          requestList.splice(0, 1)
          oneByOneApi(requestList, form, contro, null).then(res => {
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        }).catch(err => {
          _this.$notify({
            duration: 0,
            offset: 100,
            title: '提示',
            message: requestList[0].errorMessage,
            type: 'error'
          })
          reject(err)
        })
      } else {
        resolve()
      }
    }
  })
}

const checkEXP = function () {
  let result = true

  if (_form.head.amount <= 0) {
    result = false
    _contro.errorMessage += '请填写费用或金额!<br />'
  }
  return result
}
const checkEX023 = function () {
  let result = true

  if (_form.head.restAmount != 0) {
    result = false
    _contro.errorMessage += '有剩余未分配金额(去除代扣代缴后)!<br />'
  }
  if (_form.head.docType == 'EX02') {
    let minBegin = new Date().getTime()
    _form.itemList.forEach(item => {
      if (baseUtil.isNotNull(item.startDate)) {
        // let date = baseUtil.strToDate(item.startDate)
        // console.log(date)
        // let time = date.getTime()
        let time = item.startDate
        if (time < minBegin) {
          minBegin = time
        }
      }
    })

    for (let i = 0; i < _form.refAdvApplies.length; i++) {
      // let date = baseUtil.strToDate(_form.refAdvApplies[i].advDate)
      // console.log(date)
      // let time = date.getTime()
      let time = _form.refAdvApplies[i].advDate
      if (time > minBegin) {
        _contro.errorMessage += '关联申请单时要求只能在开始和结束日期内填单，且结束日期在系统提单日期之前!<br />'
        result = false
        break
      }
    }
  }

  return result
}
const checkEX05 = function () {
  let result = true
  if (_form.head.amount > _form.head.receiptAmount || _form.head.amount < _form.head.receiptAmount) {
    result = false
    _contro.errorMessage += '还款金额应等于收款认领金额!<br />'
  }
  return result
}
const checkP13 = function () {
  let result = true
  if (_form.paymentList.length == 0 || !baseUtil.isNotNull(_form.paymentList[0].dueDate) ||
    _form.paymentList[0].dueDate == _form.head.originDate) {
    result = false
    _contro.errorMessage += '请填写调整到期日!<br />'
  }
  return result
}

const checkFD01 = function () {
  let result = true
  if (_form.head.businessType1 == 'E01' && !baseUtil.isNotNull(_form.head.demanderBvtyp) &&
      _form.head.compType != 'NC') {
    result = false
    _contro.errorMessage += '资金需求方账号未配置开户行类型!<br />'
  }

  return result
}

const checkP08 = function () {
  let result = true
  if (_form.paymentList.length !== 0) {
    for (let i = 0; i < _form.paymentList.length; i++) {
      if (baseUtil.isNotNull(_form.paymentList[i].businessType2Txt) &&
        baseUtil.isNotNull(_form.paymentList[i].paymentMethod) &&
        baseUtil.isNotNull(_form.paymentList[i].description) &&
        baseUtil.isNotNull(_form.paymentList[i].accountName)) {} else {
        result = false
        _contro.errorMessage += '付款明细中的业务小类，支付方式，账户名，事由是必填字段!<br />'
        return
      }
    }
  }
  return result
}
const checkP11 = function () {
  let result = true
  if (_form.paymentList.length !== 0) {
    for (let i = 0; i < _form.paymentList.length; i++) {
      if (baseUtil.isNotNull(_form.paymentList[i].paymentMethod) &&
        baseUtil.isNotNull(_form.paymentList[i].description) &&
        baseUtil.isNotNull(_form.paymentList[i].accountName)) {} else {
        result = false
        _contro.errorMessage += '付款明细中的支付方式，账户名，事由是必填字段!<br />'
        return
      }
    }
  }
  return result
}

const checkP14 = function () {
  let result = true
  if (_form.head.amount <= 0) {
    result = false
    _contro.errorMessage += '请再次确认您的客户退款金额，必须为正数!<br />'
    return
  }
  if (_form.paymentList.length !== 0) {
    for (let i = 0; i < _form.paymentList.length; i++) {
      if (baseUtil.isNotNull(_form.paymentList[i].paymentMethod) &&
        baseUtil.isNotNull(_form.paymentList[i].accountName)) {} else {
        result = false
        _contro.errorMessage += '付款明细中的支付方式，账户名是必填字段!<br />'
        return
      }
    }
  }
  return result
}
const check04 = function () {
  let result = true
  if (_form.reciptList.length !== 0) {
    for (let i = 0; i < _form.reciptList.length; i++) {
      if (baseUtil.isNotNull(_form.reciptList[i].paymentType)) {} else {
        result = false
        _contro.errorMessage += '款项性质是必填字段!<br />'
        return
      }
    }
  } else {
    result = false
    _contro.errorMessage += '请选择收款认领清单!<br />'
    return
  }
  return result
}

const checkFD02 = function () {
  let result = true
  if (baseUtil.isNotNull(_this)) {
    _this.$refs.repayInfo.$refs.repayInfoForm.validate((valid) => {
      if (!valid) {
        _contro.errorMessage += ' 请完整填写收款信息!<br />'
        result = false
      }
    })
  }
  return result
}
const paymentCheck = function () {
  let result = true
  if (baseUtil.isNotNull(_this)) {
    _this.$refs.VCpaymentInfo.$refs.paymentForm.validate((valid) => {
      if (!valid) {
        _contro.errorMessage += ' 请完整填写付款信息!<br />'
        result = false
      }
    })
  }
  return result
}

// 校验付款方
const checkCpnBankaAccount = function () {
  let head = _this.form.head
  if (!baseUtil.isNotNull(head.bankAccount) || !baseUtil.isNotNull(head.bankAccountTxt)) {
    _contro.errorMessage += ' 请选择付款方信息!<br />'
    return false
  } else {
    return true
  }
}
// 批量收入确认的明细校验
const checkC15 = function () {
  if (_form.reciptList.length === 0) {
    _contro.errorMessage += ' 请选择收入确认明细项!<br />'
    return false
  } else {
    return true
  }
}
// 批量收入冲销的明细校验
const checkC16 = function () {
  if (_form.reciptList.length === 0) {
    _contro.errorMessage += ' 请选择收入冲销明细项!<br />'
    return false
  } else {
    return true
  }
}

/**
 * @description 保存前校验表单 特殊字段
 * @param {*} form
 * @param {*} contro
 * @param {*} $this
 */
const syncCheckBeforeSave = function (form, contro, $this) {
  if (baseUtil.isNotNull($this)) {
    _this = $this
    _form = form
    _contro = contro
  }

  var res = true

  if (baseUtil.inArray(form.head.docType, ['EX01', 'EX02', 'EX03', 'EX04', 'EX05', 'EX06', 'EX07'])) {
    let result = checkEXP()
    res = res && result
  }

  if (baseUtil.inArray(form.head.docType, ['EX02', 'EX03'])) {
    let result = checkEX023()
    res = res && result
  }

  if (baseUtil.inArray(form.head.docType, ['EX05'])) {
    let result = checkEX05()
    res = res && result
  }

  if (baseUtil.inArray(form.head.docType, ['P13'])) {
    let result = checkP13()
    res = res && result
  }

  if (baseUtil.inArray(form.head.docType, ['FD01'])) {
    let result = checkFD01()
    res = res && result
  }
  if (baseUtil.inArray(form.head.docType, ['P08'])) {
    let result = checkP08()
    res = res && result
  }
  if (baseUtil.inArray(form.head.docType, ['P11'])) {
    let result = checkP11()
    res = res && result
  }
  if (baseUtil.inArray(form.head.docType, ['P14'])) {
    let result = checkP14()
    res = res && result
  }
  if (baseUtil.inArray(form.head.docType, ['P04'])) {
    let result = check04()
    res = res && result
  }

  if (baseUtil.inArray(form.head.docType, ['FD02'])) {
    let result = checkFD02()
    res = res && result
  }
  if (baseUtil.inArray(form.head.docType, ['P12', 'P18'])) {
    let result = paymentCheck()
    res = res && result
  }
  if (form.head.businessType1 === 'C15') {
    let result = checkC15()
    res = res && result
  }
  if (form.head.businessType1 === 'C16') {
    let result = checkC16()
    res = res && result
  }

  if (_this.uiInfo.visPaymentMethod &&
    !baseUtil.inArray(form.head.docType, ['DZ01', 'DZ03', 'DZ11', 'DZ06', 'DZ05', 'DZ04']) &&
    !baseUtil.isNotNull(form.head.paymentMethod)) {
    res = false
    contro.errorMessage += ' 请选择付款方式!<br />'
  }

  if (_this.uiInfo.visWbs && _this.uiInfo.visOrderNo) {
    if (!baseUtil.isNotNull(form.head.wbs) && !baseUtil.isNotNull(form.head.internalOrder) && form.head.compType !== 'NC') {
      res = false
      contro.errorMessage += ' wbs与订单至少输入一个!<br />'
    }
    if (baseUtil.isNotNull(form.head.wbs) && baseUtil.isNotNull(form.head.internalOrder) && form.head.compType !== 'NC') {
      res = false
      contro.errorMessage += ' wbs与订单只能输入一个!<br />'
    }
  }

  if (baseUtil.isNotNull(_this.$refs.paymentInfo) &&
    baseUtil.isNotNull(_this.$refs.paymentInfo.$refs.cpnBankaAccount)) {
    let result = checkCpnBankaAccount()
    res = res && result
  }

  return res
}

export const unsyncCheckUtil = {
  unsyncCheck: unsyncCheck,
  oneByOneApi: oneByOneApi,
  syncCheckBeforeSave: syncCheckBeforeSave
}
