/*
 * @Author: Haolun Song
 * @Date: 2019-07-01 11:08:10
 * @Last Modified by: Haolun Song
 * @Last Modified time: 2019-11-21 15:36:57
 */
export const headFormRule = {
  applyAmount: [
    {required: true, message: '申请金额需大于零', trigger: 'blur'},
    {required: true, message: '申请金额需大于零', trigger: 'change'}

  ],
  remark: [
    { required: true, message: '请输入事由', trigger: 'blur' },
    { required: true, message: '请输入事由', trigger: 'change' }
  ],
  busType: [
    { required: true, message: '请选择费用事项', trigger: 'blur' },
    { required: true, message: '请选择费用事项', trigger: 'change' }
  ],
  busTypeLvl3Txt: [
    { required: true, message: '请选择费用事项', trigger: 'blur' },
    { required: true, message: '请选择费用事项', trigger: 'change' }
  ],
  bgtAccount: [
    { required: true, message: '请选择预算科目', trigger: 'blur' },
    { required: true, message: '请选择预算科目', trigger: 'change' }
  ],
  // project: [
  //   { required: true, message: '请选择项目', trigger: 'blur' },
  //   { required: true, message: '请选择项目', trigger: 'change' }
  // ],
  bgtPhase: [
    { required: true, message: '请选择阶段', trigger: 'blur' },
    { required: true, message: '请选择阶段', trigger: 'change' }
  ],
  bgtProj: [
    { required: true, message: '请选择专项', trigger: 'blur' },
    { required: true, message: '请选择专项', trigger: 'change' }
  ],
  loanType: [
    { required: true, message: '请选择借款/预付类型', trigger: 'blur' },
    { required: true, message: '请选择借款/预付类型', trigger: 'change' }
  ],

  // author by yangh 2019-7-25
  refPreReqBusinessId: [
    { required: true, message: '请输入事前申请单号', trigger: 'blur' },
    { required: true, message: '请输入事前申请单号', trigger: 'change' }
  ],
  refOAId: [
    { required: true, message: '请输入关联OA申请', trigger: 'blur' },
    { required: true, message: '请输入关联OA申请', trigger: 'change' }
  ],
  graphNum: [
    { required: true, message: '请输入影像张数', trigger: 'blur' },
    { required: true, message: '请输入影像张数', trigger: 'change' }
  ],
  InvoiceNum: [
    { required: true, message: '请输入发票张数', trigger: 'blur' },
    { required: true, message: '请输入发票张数', trigger: 'change' }
  ],
  contact: [
    { required: true, message: '请输入制单人联系方式', trigger: 'blur' },
    { required: true, message: '请输入制单人联系方式', trigger: 'change' }
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
    { required: true, message: '请输入出差天数', trigger: 'blur' },
    { required: true, message: '请输入出差天数', trigger: 'change' },
    {validator: (rule, value, callback) => {
      if (value) {
        if (/^[0-9]\d*$/.test(value) == false) {
          callback(new Error('出差天数必须是大于等于零'))
        } else {
          callback()
        }
      }
    },
    trigger: 'blur'},
    {validator: (rule, value, callback) => {
      if (value) {
        if (/^[0-9]\d*$/.test(value) === false) {
          callback(new Error('出差天数必须是大于等于零'))
        } else if (value <= 0) {
          callback(new Error('出差天数必须是大于等于零'))
        } else {
          callback()
        }
      }
    },
    trigger: 'change'}
  ],
  startPoint: [
    { required: true, message: '请输入出发地', trigger: 'blur' },
    { required: true, message: '请输入出发地', trigger: 'change' }
  ],
  endPoint: [
    { required: true, message: '请输入到达地', trigger: 'blur' },
    { required: true, message: '请输入到达地', trigger: 'change' }
  ],
  amount: [
    { required: true, message: '请输入金额', trigger: 'blur' },
    { required: true, message: '请输入金额', trigger: 'change' }
  ],
  currency: [
    { required: true, message: '请输入币种', trigger: 'blur' },
    { required: true, message: '请输入币种', trigger: 'change' }
  ],
  rubricInvoice: [
    { required: true, message: '请选择是否需要财务开具红字发票', trigger: 'blur' },
    { required: true, message: '请选择是否需要财务开具红字发票', trigger: 'change' }
  ],
  preBusinessId: [
    { required: true, message: '请输入原报账单号', trigger: 'blur' },
    { required: true, message: '请输入原报账单号', trigger: 'change' }
  ],
  preVoucherDate: [
    { required: true, message: '请输入原凭证日期', trigger: 'blur' },
    { required: true, message: '请输入原凭证日期', trigger: 'change' }
  ],
  preVoucherNo: [
    { required: true, message: '请输入原会计凭证号', trigger: 'blur' },
    { required: true, message: '请输入原会计凭证号', trigger: 'change' }
  ],
  preInvoiceType: [
    { required: true, message: '请选择原开票状态', trigger: 'blur' },
    { required: true, message: '请选择原开票状态', trigger: 'change' }
  ],
  // orderNo: [
  //   { required: false, message: '请输入订单号', trigger: 'blur' },
  //   { required: false, message: '请输入订单号', trigger: 'change' }
  // ],
  // wbs: [
  //   { required: false, message: '请输入WBS', trigger: 'blur' },
  //   { required: false, message: '请输入WBS', trigger: 'change' }
  // ],
  invoiceCategory: [
    { required: true, message: '请选择开票类别', trigger: 'blur' },
    { required: true, message: '请选择开票类别', trigger: 'change' }
  ],
  checkDate: [
    { required: true, message: '请输入对账日期', trigger: 'blur' },
    { required: true, message: '请输入对账日期', trigger: 'change' }
  ],
  customerName: [
    { required: true, message: '请输入客户名称', trigger: 'blur' },
    { required: true, message: '请输入客户名称', trigger: 'change' }
  ],
  summary: [
    { required: true, message: '请输入价税合计', trigger: 'blur' },
    { required: true, message: '请输入价税合计', trigger: 'change' }
  ],
  conLiabilityBalance: [
    { required: true, message: '请输入合同负债余额', trigger: 'blur' },
    { required: true, message: '请输入合同负债余额', trigger: 'change' }
  ],
  prefabVoucherYear: [
    { required: true, message: '请输入预制凭证会计年度', trigger: 'blur' },
    { required: true, message: '请输入预制凭证会计年度', trigger: 'change' }
  ],
  innerCpn: [
    { required: true, message: '请输入内部公司', trigger: 'blur' },
    { required: true, message: '请输入内部公司', trigger: 'change' }
  ],
  outerCpn1: [
    { required: true, message: '请输入债务方', trigger: 'blur' },
    { required: true, message: '请输入债务方', trigger: 'change' }
  ],
  outerCpn2: [
    { required: true, message: '请输入债权方', trigger: 'blur' },
    { required: true, message: '请输入债权方', trigger: 'change' }
  ],
  amountNoTax: [
    { required: true, message: '请输入不含税金额', trigger: 'blur' },
    { required: true, message: '请输入不含税金额', trigger: 'change' }
  ],
  sumAmount: [
    { required: true, message: '请输入合计金额', trigger: 'blur' },
    { required: true, message: '请输入合计金额', trigger: 'change' }
  ],
  vendor: [
    { required: true, message: '请输入供应商名称', trigger: 'blur' },
    { required: true, message: '请输入供应商名称', trigger: 'change' }
  ],
  creditor: [
    { required: true, message: '请输入债权方', trigger: 'blur' },
    { required: true, message: '请输入债权方', trigger: 'change' }
  ],
  debtor: [
    { required: true, message: '请输入债务方', trigger: 'blur' },
    { required: true, message: '请输入债务方', trigger: 'change' }
  ],
  costCenter: [
    { required: true, message: '请选择成本中心', trigger: 'blur' },
    { required: true, message: '请选择成本中心', trigger: 'change' }
  ],
  quantity: [
    { required: true, message: '请输入数量', trigger: 'blur' },
    { required: true, message: '请输入数量', trigger: 'change' }
  ],
  unit: [
    { required: true, message: '请选择度量单位', trigger: 'blur' },
    { required: true, message: '请选择度量单位', trigger: 'change' }
  ],
  customerTxt: [
    { required: true, message: '请输入客户', trigger: 'blur' },
    { required: true, message: '请输入客户', trigger: 'change' }
  ],
  description: [
    { required: true, message: '请输入事由', trigger: 'blur' },
    { required: true, message: '请输入事由', trigger: 'change' }
  ],
  payDueDate: [
    { required: true, message: '请选择付款到期日', trigger: 'blur' },
    { required: true, message: '请选择付款到期日', trigger: 'change' }
  ],
  paymentTerms: [
    { required: true, message: '请选择付款条件', trigger: 'blur' },
    { required: true, message: '请选择付款条件', trigger: 'change' }
  ],
  imagePages: [
    { required: true, message: '请输入影像张数', trigger: 'blur' },
    { required: true, message: '请输入影像张数', trigger: 'change' }
  ],
  invoicePages: [
    { required: true, message: '请输入发票张数', trigger: 'blur' },
    { required: true, message: '请输入发票张数', trigger: 'change' }
  ],
  advanceBalance: [
    { required: true, message: '请输入预付款余额', trigger: 'blur' },
    { required: true, message: '请输入预付款余额', trigger: 'change' }
  ],
  prefabVoucherNo: [
    { required: true, message: '请输入预制凭证号', trigger: 'blur' },
    { required: true, message: '请输入预制凭证号', trigger: 'change' }
  ],
  invoiceType: [
    { required: true, message: '请输入开票类别', trigger: 'blur' },
    { required: true, message: '请输入开票类别', trigger: 'change' }
  ],
  createByContact: [
    { required: true, message: '请输入制单人联系方式', trigger: 'blur' },
    { required: true, message: '请输入制单人联系方式', trigger: 'change' }
  ],
  prePaymentStatus: [
    { required: true, message: '请选择原付款状态', trigger: 'blur' },
    { required: true, message: '请选择原付款状态', trigger: 'change' }
  ],
  transferToDept: [
    { required: true, message: '请选择资产调入部门', trigger: 'blur' },
    { required: true, message: '请选择资产调入部门', trigger: 'change' }
  ],
  transferFrDept: [
    { required: true, message: '请选择资产调出部门', trigger: 'blur' },
    { required: true, message: '请选择资产调出部门', trigger: 'change' }
  ],
  transferToCorp: [
    { required: true, message: '请选择资产调入单位', trigger: 'blur' },
    { required: true, message: '请选择资产调入单位', trigger: 'change' }
  ],
  origValueTransfer: [
    { required: true, message: '请输入本次调拨资产总原值', trigger: 'blur' },
    { required: true, message: '请输入本次调拨资产总原值', trigger: 'change' }
  ],
  valueInvProfit: [
    { required: true, message: '请输入本次盘盈资产总价值', trigger: 'blur' },
    { required: true, message: '请输入本次盘盈资产总价值', trigger: 'change' }
  ],
  origValueInvLoss: [
    { required: true, message: '请输入本次盘亏资产总原值', trigger: 'blur' },
    { required: true, message: '请输入本次盘亏资产总原值', trigger: 'change' }
  ],
  origValueAbandoned: [
    { required: true, message: '请输入本次报废资产总原值', trigger: 'blur' },
    { required: true, message: '请输入本次报废资产总原值', trigger: 'change' }
  ],
  valueHandle: [
    { required: true, message: '请输入本次处置资产总价值', trigger: 'blur' },
    { required: true, message: '请输入本次处置资产总价值', trigger: 'change' }
  ],
  origValueSplit: [
    { required: true, message: '请输入本次拆分资产总原值', trigger: 'blur' },
    { required: true, message: '请输入本次拆分资产总原值', trigger: 'change' }
  ],
  valueLongTermAddition: [
    { required: true, message: '请输入长期待摊费用增加总金额', trigger: 'blur' },
    { required: true, message: '请输入长期待摊费用增加总金额', trigger: 'change' }
  ],
  origValueBefTransform: [
    { required: true, message: '请输入本次改造前资产总原值', trigger: 'blur' },
    { required: true, message: '请输入本次改造前资产总原值', trigger: 'change' }
  ],
  origValueAfterTransform: [
    { required: true, message: '请输入本次改造后资产总原值', trigger: 'blur' },
    { required: true, message: '请输入本次改造后资产总原值', trigger: 'change' }
  ],
  origValueTransform: [
    { required: true, message: '请输入本次转换资产总价值', trigger: 'blur' },
    { required: true, message: '请输入本次转换资产总价值', trigger: 'change' }
  ],
  sumAmmount: [
    {required: true, message: '请输入金额'},
    {required: true, message: '请输入金额', trigger: 'change'},
    { type: 'number', min: 0.01, message: '金额必须是大于零', trigger: 'blur' }
  ],
  voucherYear: [
    { required: true, message: '请选择原凭证年度', trigger: 'blur' },
    { required: true, message: '请选择原凭证年度', trigger: 'change' }
  ],
  adjustmentNote: [
    { required: true, message: '请选择调整说明', trigger: 'blur' },
    { required: true, message: '请选择调整说明', trigger: 'change' }
  ],
  writeOffNote: [
    { required: true, message: '请选择冲销原因', trigger: 'blur' },
    { required: true, message: '请选择冲销原因', trigger: 'change' }
  ],
  wbs: [
    { required: true, message: '请选择项目名称', trigger: 'blur' },
    { required: true, message: '请选择项目名称', trigger: 'change' }
  ],
  oldBusinessId: [
    { required: true, message: '请选择原报账单号', trigger: 'blur' },
    { required: true, message: '请选择原报账单号', trigger: 'change' }
  ],
  receAccNo: [
    { required: true, message: '请选择收款方账号', trigger: 'blur' },
    { required: true, message: '请选择收款方账号', trigger: 'change' }
  ],
  otherBusiness: [
    { required: true, message: '请选择其他业务类别', trigger: 'blur' },
    { required: true, message: '请选择其他业务类别', trigger: 'change' }
  ]
}
