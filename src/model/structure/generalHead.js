/*
 * @Author: Haolun Song
 * @Date: 2019-07-30 16:21:12
 * @Last Modified time: 2019-08-08 20:26:05 */
export const generalHead = { // 通用表头
  // lvl1
  businessId: '',
  processId: '',
  businessType1: '',
  businessType1Txt: '',
  businessType2: '',
  businessType2Txt: '',
  applicant: '',
  applicantTxt: '',
  companyCode: '',
  companyTxt: '',
  department: '',
  departmentTxt: '',
  departmentIndex: 0,
  createByContact: '',
  applicantContact: '',
  description: '',
  createBy: '',
  createByTxt: '',
  modifyBy: '',
  modifyByTxt: '',
  createAt: null,
  modifyAt: null,

  // lvl2
  currency: '',
  currencyTxt: '',
  amount: 0,
  startDate: null,
  endDate: null,
  departure: 0,
  departureTxt: 0,
  arrival: 0,
  arrivalTxt: 0,
  paymentMethod: '',
  paymentMethodTxt: '',
  imagePages: 0,
  invoicePages: 0,
  invoiceAmount: 0,
  verificationAmount: 0,
  paymentAmount: 0,
  outstandAmount: 0,
  days: 0,

  repayerAccount: '',
  reciperAccount: '',
  reciperAccountName: '',
  reciperBank: '',

  restAmount: 0, // 未分配金额 （临时字段）
  // lvl3
  settlementType: '', // 结算方式
  settlementTypeTxt: '', // 结算方式描述
  costCenter: '', // 成本中心
  costCenterTxt: '', // 成本中心描述
  conLiabilityBalance: 0, // 合同负债余额
  businessScope: '', // 业务范围
  reconCpn: '', // 对账单位
  reconCpnTxt: '', // 对账单位描述
  reconDate: '', // 对账日期
  reconResult: '', // 对账结果
  contractNo: '', // 合同编号
  taxAmount: 0, // 税额
  summary: 0, // 价税合计
  amountNoTax: '', // 不含税金额
  vendor: '', // 供应商
  vendorTxt: '', // 供应商描述
  reversalAccount: '', // 是否冲暂估科目
  refBusinessId: '', // 关联单据号
  payDueDate: null, // 付款到期日
  innerCpn: '', // 内部公司
  innerCpnTxt: '', // 内部公司描述
  outerCpn1: '', // 外部公司1
  outerCpn1Txt: '', // 外部公司1描述
  outerCpn2: '', // 外部公司2
  outerCpn2Txt: '', // 外部公司2描述
  paymentTerms: '', // 付款条件
  paymentTermsTxt: '', // 付款条件描述
  creditor: '', // 债权方
  creditorTxt: '', // 债权方描述
  debtor: '', // 债务方
  debtorTxt: '', // 债务方描述

  statementNum: '', // 预制结算单号
  freightAmount: 0, // 运费印花税金额
  dueDate: '', // 付款到期日
  advanceBalance: 0, // 预付款余额
  prefabVoucherNo: '', // 预制凭证号
  invoiceType: '', // 发票类型
  invoiceTypeTxt: '', // 发票类型描述
  customer: '', // 客户编号
  customerTxt: '', // 客户名称
  preBusinessId: '', // 原报账单号
  preVoucherDate: '', // 原凭证日期
  preVoucherNo: '', // 原会计凭证号
  rubricInvoice: '', // 是否需要财务开具红字发票
  preInvoiceType: '', // 原发票类型
  preInvoiceTypeTxt: '', // 原发票类型描述
  invoiceNote: '', // 开票备注
  prefabVoucherYear: null, // 预制凭证会计年度

  wbs: '', // wbs
  wbsTxt: '',
  accountBalances: 0, // 账户余额
  projectFundsMon: 0, // 本月预计资金
  inwardAmountMon: 0, // 本月汇入金额
  projectShipmentVolume: 0, // 本月预计发运量

  // 资产
  voucherNo: '', // 凭证号
  settleStyle: '', // 结算方式
  transferToDept: '', // 资产调入部门
  transferToDeptTxt: '', // 资产调入部门描述
  transferFrDept: '', // 资产调出部门
  transferFrDeptTxt: '', // 资产调出部门描述
  origValueTransfer: 0, // 本次调拨资产总原值
  transferToCorp: '', // 资产调入单位
  transferToCorpTxt: '', // 资产调入单位描述
  transferFrCorp: '', // 资产调出单位
  transferFrCorpTxt: '', // 资产调出单位描述
  valueInvProfit: 0, // 本次盘盈资产总价值
  origValueInvLoss: 0, // 本次盘亏资产总原值
  origValueAbandoned: 0, // 本次报废资产总原值
  valueHandle: 0, // 本次处置资产总价值
  origValueSplit: 0, // 本次拆分资产总原值
  valueLongTermAddition: 0, // 长期待摊费用增加总金额
  origValueBefTransform: 0, // 本次改造前资产总原值
  origValueAfterTransform: 0, // 本次改造后资产总原值
  origValueTransform: 0, // 本次转换资产总原值
  sumValueTransform: 0, // 本次转换总价值
  sumValueAssetTransform: 0, // 本次转换资产总价值
  monSal: null, // 薪酬计提月份
  deductAmount: 0, // 计提总金额
  disbursementAmount: 0, // 发放总金额
  sumAmount: 0, // 金额合计
  applicantLevel: '', // 申请人职级
  applicantPost: '', // 申请人职务
  sumAmountNoTax: 0, // 不含税金额合计
  sumAmountTax: 0, // 税额合计

  bankAccount: '', // 银行账号
  receiver: '', // 收款方

  demander: '', // 资金需求方
  demanderTxt: '', // 资金需求方描述
  demanderBank: '', // 资金需求方开户行
  demanderAccount: '', // 资金需求方账号
  payment: '', // 付款方
  paymentTxt: '', // 付款方描述
  paymentBank: '', // 付款方开户行
  paymentAccount: '', // 付款方账号
  paymentDate: null, // 付款日期
  countAmount: 0, // 统计金额
  options1: '1', // 公司名称1选择
  options2: '1', // 公司名称2选择
  isUFIDA: 'N', // 是否用友(置业)
  isNeedFinanceInvoice: 'N', // 是否启用贷款模块
  // rubricInvoice: 'N', // 是否需要财务开具红字发票
  otherBusinessId: '', // 单据号
  otherBusinessType1: '', // 业务大类
  bank: '', // 银行账号
  receiptBusId: '', // 收款单号
  originBusinessId: '', // 原报账单号
  bizRang: '', // 业务范围
  bizRangTxt: '', //
  compType: '', // 公司类型 SAP/NC
  bvtyp: '', // 银行序号
  demanderAccountType: '', // 资金需求方账号类型
  paymentAccountType: '', // 付款方账号类型
  demanderAccountName: '', // 资金需求方账号描述
  paymentAccountName: '', // 付款方账号描述
  demanderCnaps: '', // 资金需求方联行号
  paymentCnaps: '', // 付款方账号联行号
  clearingVoucherNo: '', // 清账凭证号
  manualEstimationAmount: 0, // 手工暂估金额
  provisionalVoucherNo: '', // 暂估凭证编号
  provisionalVoucherNo2: '', // 冲暂估凭证编号
  internalOrderTxt: '', // 订单号
  internalOrder: '', // 订单号
  prePostingDate: null, // 原过账日期
  preIVVfVoucherNo: '', // 原发票凭证编号
  prePaymentStatus: '', // 原付款状态
  prePaymentStatusTxt: '', // 原付款状态
  quantity: 0, // 数量
  unit: '', // 单位
  unitTxt: '', // 单位描述
  factory: '', // 工厂
  factoryTxt: '', // 工厂描述
  paymentWbs: '', // 付款方WBS
  paymentWbsTxt: '', // 付款方WBS描述
  demanderWbs: '', // 需求方WBS
  demanderWbsTxt: '', // 需求方WBS描述
  writeoffAmount: 0, // 冲销金额
  receiptAmount: 0, // 收款认领金额
  sysInvoiceType: '', // 系统发票类型
  creditDate: null, // 过账日期
  nonBankDirect: 0, // 非银企直联收款清单
  paymentBvtyp: '', // 付款方开户行类型
  demanderBvtyp: '', // 需求方开户行类型
  payFailedBusid: '', // 原付款失败报账单
  buildingNumber: '', // 楼栋房号
  buildingNumberTxt: '',
  businessSort: '', // 业务类别
  businessSortTxt: '', // 业务类别名称
  otherBusiness: '', // 其他业务类别
  otherBusinessTxt: '', // 其他业务类别
  scopeWork: '', // 工作范围
  carryingAmount: 0, // 结转金额
  propertyWithhold: '', // 产权代扣款
  propertyWithholdTxt: '', // 产权代扣款
  simpleTax: false // 是否简易计税
}
