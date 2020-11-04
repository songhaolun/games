/*
 * @Author: Haolun Song
 * @Date: 2019-07-30 16:21:09
 * @Last Modified by: Haolun Song
 * @Last Modified time: 2019-12-20 09:41:09
 */
export const generalFormItem = { // 通用费用明细
  businessId: '',
  itemNo: '',
  description: '',
  createBy: '',
  createByTxt: '',
  modifyBy: '',
  modifyByTxt: '',
  modifyAt: null,
  createAt: null,

  costType: '', // 费用类型
  costTypeTxt: '', // 费用类型描述
  city: '', // 城市
  cityTxt: '', // 城市描述
  costCenter: '', // 成本中心
  costCenterTxt: '', // 成本中心描述
  internalOrder: '', // 内部订单
  internalOrderTxt: '', // 内部订单描述
  currency: '', //
  currencyTxt: '', //
  startDate: null,
  endDate: null,
  days: 0,
  amount: 0,
  taxRate: 0,
  taxRateTxt: '',
  taxAmount: 0,
  amountNoTax: 0,
  exchangeRate: 1,
  domesticAmount: 0,
  domesticAmountNoTax: 0,
  domesticTaxAmount: 0,
  overLimit: '',

  businessType: '',
  businessTypeTxt: '',
  loanAmount: 0,
  loanDate: null,
  repayDate: null,

  departure: '', // 出发地
  departureTxt: '', // 出发地描述
  arrival: '', // 到达地
  arrivalTxt: '', // 到达地描述
  invoiceType: '', // 发票类型
  invoiceTypeTxt: '',
  inputtaxOut: 0, // 进项税转出
  standAmount: 0, // 标准合计
  projectName: '', // 项目名称
  projectId: '', //  项目ID
  rdOrder: '', // 研发费订单
  rdOrderTxt: '', // 研发费订单描述
  contractNo: '', // 合同编号
  carNumber: '', // 车辆识别号
  carNumberCode: '', // 车辆识别号编码
  startMileage: 0, // 开始里程
  endMileage: 0, // 结束里程
  vehicle: '', // 交通方式
  vehicleTxt: '', // 交通方式描述
  carFerryAmount: 0, // 车船费合计
  trafficAmount: 0, // 交通费合计
  accomStandAmount: 0, // 住宿标准合计
  mealAllowStandAmount: 0, // 误餐补助标准合计
  utransStandAmount: 0, // 市内交通标准合计
  totalAmount: 0, // 费用合计
  formCompanionInfos: [], // 同行人
  companionsTxt: '', // 同行人描述 （前端及时计算）

  paymentCondition: '', // 付款条件
  PaymentConditionTxt: '', // 付款条件描述

  // 资产明细
  assetName: '', // 资产名称
  assetNo: '', // 资产编号
  origValueNoTax: 0, // 资产原值-不含税金额
  origValueTax: 0, // 资产原值-税额
  origValueSum: 0, // 资产原值-含税金额
  relevantCostNoTax: 0, // 相关成本-不含税金额
  relevantCostTax: 0, // 相关成本-税额
  relevantCostSum: 0, // 相关成本-含税金额
  sumAmmountNoTax: 0, // 不含税金额合计
  sumAmmountTax: 0, // 税额合计
  sumAmmount: 0, // 含税金额合计
  leaseTerm: '', // 租赁期限
  ammount: 0, // 金额
  vendor: '', // 供应商
  vendorTxt: '', // 供应商名称
  order: '', // 订单
  totalAmmountComplete: 0, // 累计完成工程量（元）
  estAmmountComplete: 0, // 已暂估完工量（元）
  currEstAmmountComplete: 0, // 本次暂估工程量（元）
  preConsolidationAmmount: 0, // 预转固金额
  cardNo: '', // 卡片编号
  wbs: '', // WBS元素
  wbsName: '',
  consolidationAmmount: 0, // 转固金额
  customer: '', // 客户
  customerTxt: '', // 客户名称

  associatedAccounts: '', // 关联印花税台账
  scopeBusiness: '', // 业务范围
  name: '', // 名称
  sumAmount: '', // 含税金额
  sumAmountTax: '', // 税额
  sumAmountNoTax: '', // 不含税金额
  voucherYear: null, // 原凭证年度
  voucherNum: '', // 原凭证编号
  adjustmentNote: '', // 调整说明
  eliminationPeriod: '', // 冲销期间
  eliminationPeriodTxt: '', // 冲销期间
  writeOffNote: '', // 冲销说明
  businessSort: '', // 业务类别
  businessSortTxt: '', // 业务类别名称
  roomNumber: '', // 房号
  merchant: '', // 客商
  merchantName: '', // 客商名称
  department: '', // 部门
  departmentTxt: '', // 部门名称
  contractTxt: '', // 合同名称

  preAccount: '',
  preAccountTxt: '', // 挂账科目
  bvtyp: '', // 银行序号
  options1: '1', // 选项
  asNo: '', // 分配编码
  prepayment: 0, // 预付金额
  precollected: 0, // 预收金额
  uncollected: 0, // 未收金额

  withholdRemitTax: 0, // 代扣代缴税金
  ticketBaf: 0, // 票价及燃油附加费
  withholdRemitAddedTax: 0, // 代扣代缴增值税

  buildingNumber: '', // 楼栋房号
  buildingNumberTxt: '',
  timeOfRevenue: '', // 收入发生时间
  timeOfRevenueTxt: '',
  propertyWithhold: '', // 产权代扣款
  propertyWithholdTxt: '',
  withholdType: '', // 代扣款类型
  withholdTypeTxt: '',
  salesType: '', // 销售状态
  salesTypeTxt: '',
  safetyFeeScope: '', // 安全费列支范围
  safetyFeeScopeTxt: '', // 安全费列支范围描述
  cipOrder: '', // 在建工程订单
  cipOrderTxt: '', // 在建工程订单描述
  materialType: '', // 物料基本分类
  materialTypeTxt: '',
  transactionNumber: '', // 交易号
  startingDate: null, // 开始日
  endingDate: null, // 到期日
  keyDate: null, // 关键日期
  assessDate: null, // 评估结算日
  writeOffReason: '', // 冲销原因
  writeOffReasonTxt: '', // 冲销原因
  valuationType: '', // 评估类别
  valuationTypeTxt: '' // 评估类别

}
