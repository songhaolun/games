/*
 * @Author: Haolun Song
 * @Date: 2019-07-30 16:21:20
 * @Last Modified by: Haolun Song
 * @Last Modified time: 2019-12-20 09:42:09
 */
export const tFormPayment = { // 通用付款信息
  businessId: '',
  itemNo: '',
  description: '',
  createBy: '',
  createByTxt: '',
  modifyBy: '',
  modifyByTxt: '',
  createAt: null,
  modifyAt: null,

  vendor: '',
  vendorTxt: '',
  bank: '',
  cnaps: '',
  account: '',
  accountName: '',
  paymentMethod: '',
  paymentMethodTxt: '',
  bankComments: '',
  paymentAmount: 0,
  hangingAmount: 0,
  paidAmount: 0, // 未支付金额
  loanAmount: 0,
  isPublic: '',

  contractNo: '', // 合同编号
  customer: '', // 客户
  customerTxt: '', // 客户名称
  preBusId: '', // 挂账单号
  billSettle: '', // 是否背书票
  preAccount: '', // 挂账科目
  busScope: '', // 业务范围
  busScopeTxt: '', // 业务范围描述
  preDate: null, // 挂账时间
  dueDate: null, // 到期日
  currency: '', // 币种
  currencyTxt: '', // 币种描述
  recommendPayId: '', // 付款建议单号
  unit: '', // 单位
  unitTxt: '', // 单位描述
  preTxt: '', // 挂帐文本
  bvtyp: '', // 银行序号
  vendorAccount: '', // 供应商统驭科目
  vendorAccountTxt: '', // 供应商统驭科目描述
  withholdRemitTax: 0, // 代扣代缴税金
  withholdRemitAddedTax: 0, // 代扣代缴增值税
  payAccount: '', // 付款银行账号
  panyBank: '', // 付款银行名称
  verifiedAmount: 0, // 已核销金额
  balanceAmount: 0, // 供应商余额
  referenceCode: '', // 参考代码
  referenceVoucherId: '', // 参考凭证号
  referenceVoucherYear: '', // 参考凭证年度
  referenceVoucherItem: '', // 参考凭证行项目
  myUrl: '', // 明源跳转地址

  oldBusinessId: '', // 原报账单号
  oldItemNo: '', // 原行项目编号
  oldVendorCode: '', // 原供应商编号
  oldVendorTxt: '', // 原供应商描述
  oldCustomerCode: '', // 原客户编号
  oldCustomerTxt: '', // 原客户描述
  // bvtyp: '', //合作银行类型
  oldReceAccNo: '', // 原收款方账号
  oldReceAccName: '', // 原收款方户名
  oldReceBankNo: '', // 原收款方银行
  oldReceOpbankName: '', // 原收款方开户行名称
  oldReceCnaps: '', // 原收款方开户行CNAPS号
  receAccNo: '', // 收款方账号
  receAccName: '', // 收款方户名
  receBankNo: '', // 收款方银行
  receOpbankName: '', // 收款方开户行名称
  receCnaps: '', // 收款方开户行CNAPS号
  vendorAmount: 0, // 供应商余额
  customerAmount: 0, // 客户余额
  stampType: '', // 印花税类别
  stampTypeTxt: '', // 印花税类别
  businessType2:'', // 业务小类
  businessType2Txt:'' // 业务小类
}
