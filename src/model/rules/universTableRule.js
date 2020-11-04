/*
 * @Author: Haolun Song
 * @Date: 2019-07-01 11:08:38
 * @Last Modified by: Haolun Song
 * @Last Modified time: 2019-11-07 17:25:48
 */
export const universTableRule = {

  expDate: [
    { required: true, message: '请输入预算期间', trigger: 'blur' },
    { required: true, message: '请输入预算期间', trigger: 'change' }
  ],
  expTypeTxt: [
    { required: true, message: '费用事项', trigger: 'blur' },
    { required: true, message: '费用事项', trigger: 'change' }
  ],
  bgtAccount: [
    { required: true, message: '请选择预算科目', trigger: 'blur' },
    { required: true, message: '请选择预算科目', trigger: 'change' }
  ],
  startDate: [
    { required: true, message: '请输入开始日期', trigger: 'blur' },
    { required: true, message: '请输入开始日期', trigger: 'change' }
  ],
  endDate: [
    { required: true, message: '请输入结束日期', trigger: 'blur' },
    { required: true, message: '请输入结束日期', trigger: 'change' }
  ],
  days: [
    { required: true, message: '请输入天数' },
    { required: true, message: '请输入天数', trigger: 'change' },
    { type: 'number', min: 0, message: '天数必须是大于等于零', trigger: 'blur' }
    // {validator: (rule, value, callback) => {
    //   if (value) {
    //     if (/^[0-9]\d*$/.test(value) == false) {
    //       callback(new Error('天数必须是大于等于零'))
    //     } else {
    //       callback()
    //     }
    //   }
    // },
    // trigger: 'blur'},
    // {validator: (rule, value, callback) => {
    //   if (value) {
    //     if (/^[0-9]\d*$/.test(value) === false) {
    //       callback(new Error('天数必须是大于等于零'))
    //     } else if (value <= 0) {
    //       callback(new Error('天数必须是大于等于零'))
    //     } else {
    //       callback()
    //     }
    //   }
    // },
    // trigger: 'change'}
  ],
  cityType: [
    { required: true, message: '请选择城市类型', trigger: 'blur' },
    { required: true, message: '请选择城市类型', trigger: 'change' }
  ],
  policyAmount: [
    { required: true, message: '标准必填', trigger: 'blur' },
    { required: true, message: '标准必填', trigger: 'change' }
  ],
  purpose: [
    { required: true, message: '请选择出差目的', trigger: 'blur' },
    { required: true, message: '请选择出差目的', trigger: 'change' }
  ],
  isUnify: [
    { required: true, message: '请选择是否统付', trigger: 'blur' },
    { required: true, message: '请选择是否统付', trigger: 'change' }
  ],
  transMeans: [
    { required: true, message: '请选择交通工具', trigger: 'blur' },
    { required: true, message: '请选择交通工具', trigger: 'change' }
  ],
  transClass: [
    { required: true, message: '请选择仓位', trigger: 'blur' },
    { required: true, message: '请选择仓位', trigger: 'change' }
  ],
  policyClassTxt: [
    { required: true, message: '仓位标准必填', trigger: 'blur' },
    { required: true, message: '仓位标准必填', trigger: 'change' }
  ],
  // remark: [
  //   { required: true, message: '请输入备注', trigger: 'blur' },
  //   { required: true, message: '请输入备注', trigger: 'change' }
  // ],
  amount: [
    {required: true, message: '请输入金额'},
    {required: true, message: '请输入金额', trigger: 'change'},
    { type: 'number', min: 0.01, message: '金额必须是大于零', trigger: 'blur' }
    // {validator: (rule, value, callback) => {
    //   if (value) {
    //     if (/^[0-9]\d*$/.test(value) == false) {
    //       callback(new Error('金额必须是大于零的数值'))
    //     } else {
    //       callback()
    //     }
    //   }
    // },
    // trigger: 'blur'},
    // {validator: (rule, value, callback) => {
    //   if (value) {
    //     if (/^[0-9]\d*$/.test(value) === false) {
    //       callback(new Error('金额必须是大于零的数值'))
    //     } else if (value <= 0) {
    //       callback(new Error('金额必须是大于零的数值'))
    //     } else {
    //       callback()
    //     }
    //   }
    // },
    // trigger: 'change'}
  ],
  mileage: [

    {validator: (rule, value, callback) => {
      if (value) {
        if (/^[0-9]\d*$/.test(value) == false) {
          callback(new Error('里程必须是数值'))
        } else {
          callback()
        }
      }
    },
    trigger: 'blur'}
  ],
  currency: [
    { required: true, message: '请选择币种', trigger: 'blur' },
    { required: true, message: '请选择币种', trigger: 'change' }
  ],
  invoiceType: [
    { required: true, message: '请选择发票类型', trigger: 'blur' },
    { required: true, message: '请选择发票类型', trigger: 'change' }
  ],
  invoiceAmount: [
    { required: true, message: '请输入发票金额', trigger: 'blur' },
    { required: true, message: '请输入发票金额', trigger: 'change' }
  ],
  invoiceTaxAmount: [
    { required: true, message: '请输入发票税额', trigger: 'blur' },
    { required: true, message: '请输入发票税额', trigger: 'change' }
  ],
  localAmount: [
    { required: true, message: '本币金额不可为空', trigger: 'blur' },
    { required: true, message: '本币金额不可为空', trigger: 'change' }
  ],
  allocationType: [
    { required: true, message: '请选择是否待摊', trigger: 'blur' },
    { required: true, message: '请选择是否待摊', trigger: 'change' }
  ],
  bgtAmountNoTax: [
    { required: true, message: '预算金额不可为空', trigger: 'blur' },
    { required: true, message: '预算金额不可为空', trigger: 'change' }
  ],
  carPlate: [
    { required: true, message: '请输入车牌号', trigger: 'blur' },
    { required: true, message: '请输入车牌号', trigger: 'change' }
  ],

  // author by yangh 19-8-2
  departure: [
    { required: true, message: '请选择出发地', trigger: 'blur' },
    { required: true, message: '请选择出发地', trigger: 'change' }
  ],
  arrival: [
    { required: true, message: '请选择到达地', trigger: 'blur' },
    { required: true, message: '请选择到达地', trigger: 'change' }
  ],
  carNumber: [
    { required: true, message: '请输入车牌号', trigger: 'blur' },
    { required: true, message: '请输入车牌号', trigger: 'change' }
  ],
  rdOrder: [
    { required: true, message: '请输入研发费订单', trigger: 'blur' },
    { required: true, message: '请输入研发费订单', trigger: 'change' }
  ],
  projectName: [
    { required: true, message: '请输入项目名称', trigger: 'blur' },
    { required: true, message: '请输入项目名称', trigger: 'change' }
  ],
  taxAmount: [
    { required: true, message: '请输入税额', trigger: 'blur' },
    { required: true, message: '请输入税额', trigger: 'change' }
  ],
  amountNoTax: [
    { required: true, message: '请输入不含税金额', trigger: 'blur' },
    { required: true, message: '请输入不含税金额', trigger: 'change' }
  ],
  domesticAmount: [
    { required: true, message: '请输入本币金额', trigger: 'blur' },
    { required: true, message: '请输入本币金额', trigger: 'change' }
  ],
  ticketBaf: [
    { required: true, message: '请输入票价及燃油附加费' },
    { required: true, message: '请输入票价及燃油附加费', trigger: 'change' },
    { type: 'number', min: 0.01, message: '票价及燃油附加费必须是大于零', trigger: 'blur' }
    // { min: 0.01, message: '票价及燃油附加费必须是大于零', trigger: 'blur' }
    // {validator: (rule, value, callback) => {
    //   if (value) {
    //     if (value <= 0) {
    //       callback(new Error('票价及燃油附加费必须是大于零'))
    //     } else {
    //       callback()
    //     }
    //   }
    // },
    // trigger: 'blur'},
    // {validator: (rule, value, callback) => {
    //   if (value) {
    //     if (value <= 0) {
    //       callback(new Error('票价及燃油附加费必须是大于零'))
    //     } else {
    //       callback()
    //     }
    //   }
    // },
    // trigger: 'change'}
  ],
  description: [
    { required: true, message: '请输入事由', trigger: 'blur' },
    { required: true, message: '请输入事由', trigger: 'change' }
  ]

}
