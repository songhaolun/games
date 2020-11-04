/*
 * @Author: Haolun Song
 * @Date: 2019-07-12 19:42:17
 * @Last Modified by: Haolun Song
 * @Last Modified time: 2020-01-09 11:44:27
 */
export const loadUiConfig = {
  EX01: {
    title: '差旅费事前申请',
    leadTitle: '前导界面',
    docDesc: ['差旅费、交通费、培训相关差旅费需在此页面发起事前申请，且交通费通差旅费一同发起'],
    contentComp: 'formContent',

    visContact: true,
    visRemark: true,
    visHeadCurrency: true,
    disabledCurrency: true,
    visReqAmountSum: true,

    visExpArea: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  EX02: {
    title: '事前申请报销单',
    leadTitle: '前导界面',
    docDesc: [
      '事前申请类费用报销：指业务发生前需要通过报账平台发起申请，待批准后实施的业务事项，',
      '包含差旅费、交通费、培训费'
    ],
    contentComp: 'formContent',

    visContact: true,
    visRemark: true,
    visRefPreReqBusinessId: true,
    visRefOAId: true,
    visImageNum: true,
    visInvoiceNum: true,
    // visStartDate: true,
    // visEndDate: true,
    // visDays: true,
    // visSEPoint: true,
    // visCompanion: true,
    visExpCostCenterHead: true,
    visExpArea: true,
    visPaymentInfo: true,
    visCpnBankAccount: true, // 公司银行账号
    visPaymentMethod: true,
    visPayeeArea: true,
    visPayInfoEX02: true,
    visPayInfoCurrency: true,
    displayAmountAttr: 'invoiceAmount', // 显示报账金额字段属性
    displayExpPdf: true, // 费用报销特有
    displayPaymentAttr: 'paymentList|0|vendorTxt', // 收付款方展示名称属性
    visSimpleTax: true // 是否简易计税
  },
  EX03: {
    title: '通用费用报销单',
    leadTitle: '前导界面',
    docDesc: [
      '通用类费用报销：指生产经营过程中不属于安全类、研发类的成本费用报销业务',
      '安全类费用报销：指生产经营过程中归集到安全支出的成本费用报销业务',
      '研发类费用报销：指生产经营过程中归集到研发支出的成本费用报销业务',
      '在建工程类费用报销：指项目建设过程中属于资本化支出的费用报销业务'
    ],
    contentComp: 'formContent',

    visContact: true,
    visRemark: true,
    visImageNum: true,
    visInvoiceNum: true,
    visExpArea: true,
    visPaymentInfo: true,
    visCpnBankAccount: true, // 公司银行账号
    visPaymentMethod: true,
    visPayeeArea: true,
    visPayInfoEX02: true,
    visPayInfoCurrency: true,
    displayAmountAttr: 'invoiceAmount', // 显示报账金额字段属性
    displayExpPdf: true, // 费用报销特有
    displayPaymentAttr: 'paymentList|0|vendorTxt', // 收付款方展示名称属性
    visSimpleTax: true // 是否简易计税
  },
  EX07: {
    title: '开发成本暂估',
    leadTitle: '前导界面',
    docDesc: [
      ' 工程部门在当月工程完成量需要进行暂估时，先在明源系统提起暂估流程，经审核审批通过后，推送到报账平台由共享财务相关人员进行审核后暂估入账。'
    ],
    contentComp: 'formContent',

    visContact: true,
    visRemark: true,
    visImageNum: true,
    // visInvoiceNum: true,
    visExpArea: true,
    visPaymentInfo: true,
    visPaymentMethod: true,
    // visPayeeArea: true,
    // visPayInfoEX02: true,
    visVendor: true,
    disabledPaymentMethod: true,
    visSumInvoiceAmount: true,
    // visPayInfoCurrency: true,
    displayAmountAttr: 'invoiceAmount' // 显示报账金额字段属性
    // displayExpPdf: true, // 费用报销特有
    // displayPaymentAttr: 'paymentList|0|vendorTxt' // 收付款方展示名称属性
  },
  EX04: {
    title: '员工借款单',
    leadTitle: '前导界面',
    docDesc: ['一般借款：指定额内周转金', '特殊借款：指定额外周转金'],
    contentComp: 'formContent',

    visContact: true,
    visRemark: true,
    visPaymentInfo: true,
    paymentLabel: '借款明细',
    visPayInfoCurrency: true,
    visPayInfoAmount: true,

    visExpArea: true,
    visPaymentMethod: true,
    visCpnBankAccount: true, // 公司银行账号
    disabledPaymentMethod: true,
    // visPayeeArea: true
    visAccountDialog: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性

  },
  EX05: {
    title: '还款申请单',
    leadTitle: '前导界面',
    docDesc: null,
    contentComp: 'formContent',

    visImageNum: true,
    visContact: true,
    visRemark: true,
    visPaymentAccount: true,
    visReceiverAccount: true,

    visReceptClaimSelecter: true,
    visPaymentInfo: true,
    paymentLabel: '还款明细',
    visPayInfoCurrency: true,
    visPayInfoAmount: true,
    visPayLoanInfo: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性

  },
  EX06: {
    title: '公司内费用分摊',
    leadTitle: '前导界面',
    docDesc: [
      '通用费用跨部门调整：指同一业务事项费用发生时先归集到特定部门，按照实际业务应调整到发生部门的业务事项',
      '通用费用调整到在建工程：指同一业务事项费用发生时先归集到特定部门，按照业务性质应调整到在建工程的业务事项',
      '通用费用调整到研发费：指同一业务事项费用发生时先归集到特定部门，按照业务性质应调整到研发费的业务事项',
      '通用费用调整到安全费：指同一业务事项费用发生时先归集到特定部门，按照业务性质应调整到安全费的业务事项'
    ],
    contentComp: 'formContent',
    visImageNum: true,
    visInvoiceNum: true,
    visContact: true,
    visRemark: true,
    visWriteoffCostCenter: true,
    visWriteoffAmount: true,
    visExpArea: true,
    displayAmountAttr: 'invoiceAmount', // 显示报账金额字段属性
    displayExpPdf: true // 费用报销特有
  },
  EX0601: {
    title: '通用费用跨部门调整',
    visWriteoffOrderNo: true
  },
  EX0602: {
    title: '通用费用调整到安全费'

  },
  EX0603: {
    title: '通用费用调整到研发费'
  },
  EX0604: {
    title: '通用费用调整到在建工程'
  },
  P01: {
    title: '收入确认',
    leadTitle: '前导界面',
    docDesc: ['集成类销售业务指通过创建销售订单、在SAP提交销售结算的收入业务',
      '非集成类销售业务指不创建销售订单、手工提交销售结算的收入业务'
    ],
    contentComp: 'formContent',
    visProcSubType: true,
    visImageNum: true,
    visContact: true,
    visHeadCurrency: true,

    visInvoiceCate: true,
    visRemark: true,

    invoiceNote: true,
    // conLiabilityBalance: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P0101: {
    title: '收入确认(集成类)',
    prefabVoucherYear: true,
    visReceiptConfirmationSelecter: true,
    visReceiptConfirmationTable: true
  },

  P0102: {
    title: '收入确认(非集成类)',
    visIncomeInfo: true,
    visQuantity: true,
    visUnit: true,
    visCostCenterHead: true,
    visChooseContract: true,
    visFactory: true,
    visOtherBusiness: true
  },
  P0103: {
    title: '收入确认(集成类)旧',
    visPreVoucherNo: true,
    prefabVoucherYear: true,
    visSysInvoiceType: true,
    visIntegration: true,
    visIncomeInfo: true,
    visChooseContract: true
  },
  P02: {
    title: '收入确认(非集成类)',
    leadTitle: '前导界面',
    docDesc: ['集成类销售业务指通过创建销售订单、在SAP提交销售结算的收入业务',
      '非集成类销售业务指不创建销售订单、手工提交销售结算的收入业务'
    ],
    contentComp: 'formContent',

    visProcSubType: true,
    visImageNum: true,
    visContact: true,
    visHeadCurrency: true,
    visChooseContract: true,
    visInvoiceCate: true,
    visRemark: true,
    visIncomeInfo: true,
    conLiabilityBalance: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P03: {
    title: '收入冲销',
    leadTitle: '前导界面',
    docDesc: ['集成类销售冲销指通过创建销售订单、在SAP提交销售结算对应的收入冲销业务',
      '非集成类销售冲销指不创建销售订单、手工提交销售结算对应的收入冲销业务'
    ],
    contentComp: 'formContent',

    visImageNum: true,
    visContact: true,
    visHeadCurrency: true,
    visIsNeedFinanceInvoice: true,

    visRemark: true,
    visIntegration: true,
    visInvoiceCateDisabled: true,

    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P0301: {
    title: '收入冲销(集成类)旧',
    visPrefabVoucherNo: true,
    visPreBusinessId: true,
    visPreInvoiceType: true,
    visIncomeInfo: true
  },
  P0302: {
    title: '收入冲销(非集成类)',
    visPreVoucherDate: true,
    vispreVoucherNo: true,
    visPreBusinessId: true,
    visPreInvoiceType: true,
    visIncomeInfo: true
  },
  P0303: {
    title: '收入冲销(集成类)',
    visReceiptConfirmationSelecter: true,
    visReceiptConfirmationTable: true
  },
  P04: {
    title: '收款认领',
    leadTitle: '前导界面',
    docDesc: ['系统无法认领需人工认领判断收款款项性质的收款记账入口。'],
    contentComp: 'formContent',

    visImageNum: true,
    visContact: true,
    visRemark: true,

    visReceptClaimSelecter: true,
    visReciptTableForm: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性

  },
  P05: {
    title: '内部往来对账',
    leadTitle: '前导界面',
    docDesc: ['月结时集团内部单位相互核对往来余额归档入口。'],
    contentComp: 'formContent',

    visImageNum: true,
    visContact: true,
    visReconCpn: true,
    visCheckDate: true,
    visRemark: true,
    visInternalRecon: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性

  },
  P06: {
    title: '外部客户对账',
    leadTitle: '前导界面',
    docDesc: ['季度与外部客户进行对账归档入口。'],
    contentComp: 'formContent',

    visImageNum: true,
    visContact: true,
    visCheckDate: true,
    visRemark: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P07: {
    title: '供应商对账',
    leadTitle: '前导界面',
    docDesc: ['供应商对账用于月结时内部供应商对账和季度与外部供应商进行对账归档用途。'],
    contentComp: 'formContent',

    visProcSubType: true,
    visImageNum: true,
    visContact: true,
    visRemark: true,
    visCheckDate: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P08: {
    title: '付款申请单',
    leadTitle: '前导界面',
    docDesc: ['挂账款项支付入口。'],
    contentComp: 'formContent',

    // visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visRemark: true,
    // visWbs: true,
    visPaymentSugButton: true,
    visPaymentTableForm: true,
    visReqAmountSum: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P09: {
    title: '清账申请单',
    leadTitle: '前导界面',
    docDesc: ['内部供应商、外部供应商、一次性供应商、财务专用供应商、内部客户、外部客户、一次性客户、财务专用客户清账。'],
    contentComp: 'formContent',

    // visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visRemark: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P10: {
    title: '手工冲暂估',
    leadTitle: '前导界面',
    docDesc: ['针对费用循环暂估或共享上线前遗留暂估，收到发票后结算入口。'],
    contentComp: 'formContent',
    visProcSubType: true,
    visImageNum: true,
    visContact: true,
    visHeadCurrency: true,
    disabledCurrency: true,
    visChooseContract: true,
    visInvoiceNum: true,
    amountNoTax: true,
    taxAmount: true,
    sumAmount: true,
    payDueDate: true,
    vendor: true,
    reversalAccount: true,
    visPaymentTermsDisabled: true,
    visRemark: true,
    advanceBalance: true,
    visClearingVoucherNo: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P11: {
    title: '押金、质保金退款申请单',
    leadTitle: '前导界面',
    docDesc: ['应付账款质保金、其他应付款质保金、押金、保证金、风险抵押金、安全风险金退款入口。'],
    contentComp: 'formContent',

    visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visHeadCurrency: true,
    // visChooseContract: true,
    visRemark: true,
    disabledCurrency: true,
    visReqAmountSum: true,
    visPaymentSugButton: true,
    visVCPaymentTableForm: true,
    // VCPaymentInfo: true,
    // visVendor: true,
    // visOutstand: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性

  },
  P12: {
    title: '预付款申请单',
    leadTitle: '前导界面',
    docDesc: ['费用类、工程款、采购库存商品等性质款项预付入口'],
    contentComp: 'formContent',

    visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visRemark: true,
    visAmount: true,
    visHeadCurrency: true,
    visChooseContract: true,
    visPayBank: true,
    visPayAccount: true,
    // visPaymentInfo: true,
    // visVendor: true,
    // visAccount: true,
    // visAccountSelect: true,
    // visCnaps: true,
    // visBankName: true,
    // visPaymentMethod: true
    VCPaymentInfo: true,
    visVendor: true,
    visVendorAmount: true,
    ncBusinessId2: true,
    visWbs: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P12DEF: {

  },
  P12TRAIN: {
    visTrainTransferFee: true
  },
  P12ENGIN: {
    visOrderNo: true
  },
  P13: {
    title: '付款到期日调整申请单',
    leadTitle: '前导界面',
    docDesc: ['挂账款项到期日调整入口。'],
    contentComp: 'formContent',

    visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visRemark: true,
    visPaymentSugButton: true,
    visDueDateChange: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P14: {
    title: '客户退款申请单',
    leadTitle: '前导界面',
    docDesc: ['客户退款入口。'],
    contentComp: 'formContent',
    visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visHeadCurrency: true,
    // visChooseContract: true,
    visRemark: true,
    disabledCurrency: true,
    visAmount: true,
    visAmountDisabled: true,

    visPaymentSugButtonCustomer: true,
    visVCPaymentTableForm: true,
    // VCPaymentInfo: true,
    // customer: true,
    // visOutstand: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性

  },
  P15: {
    title: '发票校验',
    leadTitle: '前导界面',
    docDesc: ['系统集成采购类，维修工单类，运输订单类业务的发票校验。'],
    contentComp: 'formContent',
    visProcSubType: true,

    visHeadCurrency: true,
    visContact: true,
    visChooseContract: true,
    freightAmount: true,
    visInvoiceNum: true,
    payDueDateBy35Day: true,
    visImageNum: true,
    visPaymentTermsDisabled: true,
    advanceBalance: true,
    visRemark: true,
    invoiceTemplet: true,
    visClearingVoucherNo: true,
    visManualEstimationAmount: true,
    visProvisionalVoucherNo: true,
    visProvisionalVoucherNo2: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P16: {
    title: '内部应付转账',
    leadTitle: '前导界面',
    docDesc: ['委托代付：发起公司委托内部公司代付供应商款项；',
      '受托代收：发起公司受内部公司委托收取供应商或客户款项。'
    ],
    contentComp: 'formContent',
    visProcSubType: true,

    visHeadCurrency: true,
    visContact: true,
    visImageNum: true,
    visRemark: true,
    transferAmount: true,
    innerCpn: true,
    outerCpn: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P1601: {
    visBuildingNumberTxt: true,
    visBusinessSortTxt: true
  },
  P17: {
    title: '三方应付调账',
    leadTitle: '前导界面',
    docDesc: [
      '发起公司应对两家外部公司账务调整的特殊调账业务处理入口。'
    ],
    contentComp: 'formContent',
    visProcSubType: true,
    visImageNum: true,
    visHeadCurrency: true,
    visContact: true,
    visRemark: true,
    reconciliationAmount: true,
    outerCpn1: true,
    outerCpn2: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性

  },
  P1701: {
    isOuterCpnNC: true,
    visPropertyWithhold: true,
    visBuildingNumberTxt: true,
    visBusinessIdLoan: true
  },
  // : {
  //   title: "",
  //   leadTitle: "",
  //   docDesc: ""
  // },
  P18: {
    title: '保证金支付申请',
    leadTitle: '前导界面',
    docDesc: ['向客户（政府部门）支付投标保证金、生态环境恢复保证金、诉讼保证金、拍卖保证金或为给外部公司借款等事项处理入口。'],
    contentComp: 'formContent',

    visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visRemark: true,
    visAmount: true,
    visHeadCurrency: true,
    visChooseContract: true,

    // visPaymentInfo: true,
    // visVendor: true,
    // visAccount: true,
    // visAccountSelect: true,
    // visCnaps: true,
    // visBankName: true,
    // visPaymentMethod: true

    VCPaymentInfo: true,
    // visVendor: true,
    customer: true,
    visCustomerAmount: true,
    visPayAccount: true,
    visPayBank: true,
    ncBusinessId2: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P19: { // 应收
    title: '客户清账',
    leadTitle: '前导界面',
    docDesc: ['客户清账发起入口。'],
    contentComp: 'formContent',

    // visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visRemark: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P20: { // 应付
    title: '供应商清账',
    leadTitle: '前导界面',
    docDesc: ['供应商清账发起入口。'],
    contentComp: 'formContent',

    // visProcSubType: true,

    visImageNum: true,
    visContact: true,
    visRemark: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P21: {
    title: '发票校验冲销',
    leadTitle: '前导界面',
    docDesc: ['集成类采购冲销结算入口。'],
    contentComp: 'formContent',
    visProcSubType: true,
    visHeadCurrency: true,
    disabledCurrency: true,
    visContact: true,
    visImageNum: true,
    visRemark: true,
    visPreBusinessId: true,
    invoiceTempletRead: true,
    visPrePaymentStatus: true,
    // visPrePostingDate: true,
    // visPreIVVfVoucherNo: true,
    // amountNoTax: true,
    // taxAmount: true,
    // sumAmount: true,
    // visP21: true,
    // visVendorAndVendorTxt: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P22: {
    title: '三方应收调账',
    leadTitle: '前导界面',
    docDesc: ['发起公司应对两家外部公司账务调整的特殊调账业务处理入口。'],
    contentComp: 'formContent',
    visProcSubType: true,
    visImageNum: true,
    visHeadCurrency: true,
    visContact: true,
    visRemark: true,
    reconciliationAmount: true,
    outerCpn1: true,
    outerCpn2: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P2201: {
    isOuterCpnNC: true,
    visPropertyWithhold: true,
    visBuildingNumberTxt: true,
    visBusinessIdLoan: true
  },
  P23: {
    title: '内部应收转账',
    leadTitle: '前导界面',
    docDesc: ['1委托代收：发起公司委托内部公司收取客户或供应商款项；',
      '受托代付：发起公司受内部公司委托支付供应商或客户款项。'
    ],
    contentComp: 'formContent',
    visProcSubType: true,

    visHeadCurrency: true,
    visContact: true,
    visImageNum: true,
    visRemark: true,
    transferAmount: true,
    innerCpn: true,
    outerCpn: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P24: {
    title: '寄售材料发票校验',
    leadTitle: '前导界面',
    docDesc: ['寄售材料采购结算入口。'],
    contentComp: 'formContent',
    visImageNum: true,
    visContact: true,
    visHeadCurrency: true,
    visInvoiceNum: true,
    vendor: true,
    amountNoTax: true,
    taxAmount: true,
    sumAmount: true,
    advanceBalance: true,
    visChooseContract: true,
    visPaymentTermsDisabled: true,
    payDueDate: true,
    visRemark: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  P25: {
    title: '吨位损耗扣款',
    leadTitle: '前导界面',
    docDesc: [
      '集装站吨位损耗结算入口。'
    ],
    contentComp: 'formContent',
    visImageNum: true,
    visHeadCurrency: true,
    visContact: true,
    visRemark: true,
    reconciliationAmount: true,
    // outerCpn1: true,
    // outerCpn2: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  DZ01: {
    title: '资产购置',
    leadTitle: '前导界面',
    docDesc: ['固定资产：适用于特定情形下非集成固定资产购置的报账流程',
      '无形资产：适用于无形资产购置的报账流程',
      '接受捐赠：适用于通过接受捐赠取得的固定资产的报账流程',
      '投资性房地产：适用于投资性房地产购置的报账流程',
      '长期待摊费用：适用于除按产量法摊销外金额固定且按固定期限摊销的长期待摊费用的报账流程（如水权转换费）'],
    visProcSubType: true,

    visRefOAId: true,
    visChooseContract: true,
    visImageNum: true,
    visInvoiceNum: true,
    visContact: true,
    visRemark: true,

    visExpArea: true,
    visPayeeArea: true,
    // visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ0101: {
    code: 'DZ0101',
    title: '固定资产',
    visassetName: true,
    visassetNo: true,

    visorigValueNoTax: true,
    visorigValueTax: true,
    visorigValueSum: true,

    visrelevantCostNoTax: true,
    visrelevantCostTax: true,
    visrelevantCostSum: true,
    visBankAccount: true,
    visPayeeArea: true,
    visPaymentInfo: true,
    visPaymentMethod: true,
    visPaymentSumAmount: true,
    visCpnBankAccount: true,
    vissumAmmountNoTax1: true,
    vissumAmmountTax1: true,
    vissumAmmount1: true
  },
  DZ0102: {
    code: 'DZ0102',
    title: '无形资产',
    visassetName: true,
    visassetNo: true,

    visorigValueNoTax: true,
    visorigValueTax: true,
    visorigValueSum: true,

    visrelevantCostNoTax: true,
    visrelevantCostTax: true,
    visrelevantCostSum: true,
    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentMethod: true,
    visBankAccount: true,
    visPayeeArea: true,
    visPaymentSumAmount: true,
    vissumAmmountNoTax1: true,
    vissumAmmountTax1: true,
    vissumAmmount1: true
  },
  DZ0103: {
    code: 'DZ0103',
    title: '投资性房地产',
    visassetName: true,
    visassetNo: true,

    visorigValueNoTax: true,
    visorigValueTax: true,
    visorigValueSum: true,
    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentMethod: true,
    visBankAccount: true,
    visPayeeArea: true,
    visPaymentSumAmount: true,
    visrelevantCostNoTax: true,
    visrelevantCostTax: true,
    visrelevantCostSum: true,

    vissumAmmountNoTax1: true,
    vissumAmmountTax1: true,
    vissumAmmount1: true
  },
  DZ0104: {
    code: 'DZ0104',
    title: '长期待摊费用',
    visassetName: true,
    visassetNo: true,
    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentMethod: true,
    visBankAccount: true,
    visPayeeArea: true,
    visPaymentSumAmount: true,
    vissumAmmountNoTax2: true,
    vissumAmmountTax2: true,
    vissumAmmount2: true
  },
  DZ0105: {
    code: 'DZ0105',
    title: '接受捐赠',
    visassetName: true,
    visassetNo: true,

    visorigValueNoTax: true,
    visorigValueTax: true,
    visorigValueSum: true,

    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentMethod: true,
    visBankAccount: true,
    visPayeeArea: true,
    visrelevantCostNoTax: true,
    visrelevantCostTax: true,
    visrelevantCostSum: true,
    visSumAmount: true,
    vissumAmmountNoTax1: true,
    vissumAmmountTax1: true,
    vissumAmmount1: true
  },
  DZ0106: {
    code: 'DZ0105',
    title: '资产验收',
    visRefOAId: false,
    visChooseContract: false,
    visExpArea: false,
    visPayeeArea: false
  },
  DZ02: {
    title: '资产变动',
    leadTitle: '前导界面',
    docDesc: [
      '资产调拨：适用于公司内部门间和不同公司间资产调拨的账务处理流程。',
      '资产更新改造：适用于资产大修理支出符合资本化条件，增加资产原值的账务处理流程。',
      '长期待摊费用变动：适用于已创建资产卡片的长期待摊费用，后续原值变动的账务处理流程。',
      '资产拆分：适用于已创建卡片的资产进行拆分的账务处理流程。',
      '资产报废、处置：适用于除持有待售资产外所有资产报废、处置的账务处理流程。',
      '持有待售资产处置：适用于持有待售资产处置的账务处理流程',
      '固定资产、无形资产与投资性房地产的转换：适用于固定资产、无形资产与投资性房地产之间转换的账务处理流程。',
      '资产与持有待售资产转换：适用于所有资产与持有待售资产之间转换的账务处理流程。',
      '资产盘盈盘亏：适用于所有资产盘盈、盘亏后账务处理流程。'],
    visProcSubType: true,
    visRefOAId: true,
    visImageNum: true,
    visContact: true,
    visRemark: true
    // displayAmountAttr: 'amount' // 显示报账金额字段属性
  },
  DZ0201: {
    code: 'DZ0201',
    title: '同一公司代码下资产调拨',
    visTransferFrDeptTxt: true,
    visTransferToDeptTxt: true,
    visOrigValueTransfer: true,
    displayAmountAttr: 'origValueTransfer' // 显示报账金额字段属性
  },
  DZ0202: {
    code: 'DZ0202',
    title: '非同一公司代码下资产调拨',
    visChooseContract: true,
    visInvoiceNum: true,
    visTransferFrDeptTxt: true,
    visTransferFrCorp: true,
    visTransferToCorpTxt: true,
    visTransferToDept: true,
    // visOrigValueTransfer: true,
    visVoucherNo: true,
    visIsPreview: true,

    visExpArea: true,
    visSumAmount: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  //  displayAmountAttr: 'origValueTransfer' // 显示报账金额字段属性
  },
  DZ0203: {
    code: 'DZ0203',
    title: '资产盘盈盘亏',
    visValueInvProfit: true,
    visInvoiceNum: true,
    visOrigValueInvLoss: true,
    visVoucherNo: true,
    visIsPreview: true
    // displayAmountAttr:'origValueInvLoss'
  },
  DZ0204: {
    code: 'DZ0204',
    title: '资产报废',
    visChooseContract: true,
    visInvoiceNum: true,
    visOrigValueAbandoned: true,
    visVoucherNo: true,
    visIsPreview: true
    // displayAmountAttr:'valueHandle'
  },
  DZ0205: {
    code: 'DZ0205',
    title: '资产拆分',
    visInvoiceNum: true,
    visOrigValueSplit: true,
    visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'origValueSplit'
  },
  DZ0206: {
    code: 'DZ0206',
    title: '长期待摊费用增加',
    visChooseContract: true,
    visInvoiceNum: true,
    visValueLongTermAddition: true,
    visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'valueLongTermAddition'
  },
  DZ0207: {
    code: 'DZ0207',
    title: '资产更新改造',
    visChooseContract: true,
    visInvoiceNum: true,
    visOrigValueBefTransform: true,
    visOrigValueAfterTransform: true,
    visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'origValueAfterTransform' // 显示报账金额字段属性
  },
  DZ0212: {
    code: 'DZ0212',
    title: '资产原值增加',
    visChooseContract: true,
    visInvoiceNum: true,
    visOrigValueBefTransform: true,
    visOrigValueAfterTransform: true,
    visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'origValueAfterTransform' // 显示报账金额字段属性
  },
  DZ0208: {
    code: 'DZ0208',
    title: '持有待售资产处置',
    visChooseContract: true,
    visInvoiceNum: true,
    visValueHandle: true,
    visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'valueHandle'
  },
  DZ0209: {
    code: 'DZ0209',
    title: '资产与投资性房地产转换',
    visInvoiceNum: true,
    visChooseContract: true,
    visumValueTransform: true,
    visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'origValueTransform'
  },
  DZ0210: {
    code: 'DZ0210',
    title: '持有待售资产与资产转换',
    visInvoiceNum: true,
    visChooseContract: true,
    visumValueTransform: true,
    visVoucherNo: true,
    visIsPreview: true,
    displayAmountAttr: 'origValueTransform'
  },
  DZ0211: {
    code: 'DZ0204',
    title: '资产处置',
    visChooseContract: true,
    visInvoiceNum: true,
    visValueHandle: true,
    visVoucherNo: true,
    visIsPreview: true
    // displayAmountAttr:'valueHandle'
  },
  DZ03: {
    title: '资产租赁',
    leadTitle: '前导界面',
    docDesc: [
      '长期租赁：适用于期限在一年以上的设备、房屋等资产的租赁。',
      '融资性售后回租：适用于承租方首先将资产卖给租赁公司以获取资金，',
      '然后再将资产进行回租并按期支付租金的租赁业务，如广博汇通公司与新疆能源公司发生的租赁业务。'],
    visProcSubType: true,
    visRefOAId: true,
    visImageNum: true,
    visInvoiceNum: true,
    visContact: true,
    // visVoucherNo: true,
    visIsPreview: true,
    visRemark: true,
    visChooseContract: true,

    visExpArea: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性

  },
  DZ0301: { // 长期租赁
  },
  DZ030101: { // 出租方
    // visCustomer: true,
    // visSumAmount: true,
    visPaymentSumAmount: true,
    visPaymentInfo: true,
    visCpnBankAccount: true,
    receptClaimSelecter: true
  },
  DZ030102: { // 承租方
    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentMethod: true,
    visBankAccount: true,
    visPayeeArea: true,
    // vendor: true,
    visPaymentSumAmount: true
  },
  DZ0302: { // 融资性售后回租
    // visPaymentInfo: true,
    // visPaymentSumAmount: true,
    // receptClaimSelecter: true
  },
  DZ030201: { // 出租方
    // visCustomer: true,
    // visSumAmount: true,
    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentMethod: true,
    visPayeeArea: true,
    visBankAccount: true,
    receptClaimSelecter: true,
    visPaymentSumAmount: true
  },
  DZ030202: { // 承租方
    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentMethod: true,
    visPayeeArea: true,
    visBankAccount: true,
    // vendor: true,
    receptClaimSelecter: true,
    visPaymentSumAmount: true
  },
  DZ04: {
    title: '在建工程',
    leadTitle: '前导界面',
    docDesc: [
      '在建工程暂估：适用于尚未开具发票，根据完工进度进行暂估的在建工程业务，暂估金额为不含税金额。',
      '在建工程预转固：适用于工程达到预定可使用状态，尚未未办理竣工决算的在建工程业务。',
      '在建工程转固：根据工程决算报告和复核报告进行正式转固的在建工程业务。'],
    visRefOAId: true,
    visImageNum: true,
    visInvoiceNum: true,
    visContact: true,
    visRemark: true,

    visExpArea: true,
    visIsPreview: true,
    visSumAmount: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ0401: { // 在建工程-暂估款
    visChooseContract: true
  },
  DZ0402: { // 在建工程-预转固
  },
  DZ0403: { // 在建工程-转固
    visChooseContract: true,
    visVoucherNo: true
  },
  DZ05: {
    title: '薪酬业务',
    leadTitle: '前导界面',
    docDesc: [
      '合同制薪酬计提:适用于合同制员工上月工资、社会保险、住房公积金、企业年金在本月发放时的计提。',
      '合同制薪酬预提:适用于合同制员工当月工资、社会保险、住房公积金、企业年金在当月的预提。',
      '合同制薪酬发放:适用于合同制员工上月工资本月实际发放后发起报账的流程。',
      '非全日制薪酬计提与发放:适用于无固定工作时间用工以工资表形式发放劳动报酬发起报账的流程。',
      '五险二金结转:适用于养老保险、医疗保险、失业保险、工伤保险、生育保险、住房公积金、',
      '企业年金缴纳完成后将计提的单位部分和扣缴的个人部分进行结转的记账过程。'],
    visProcSubType: true
  },
  DZ0501: {
    title: '合同制薪酬计提',
    visMonSal: true,
    visContact: true,
    visRemark: true,
    visImageNum: true,
    visDeductAmount: true,
    visMakeTable: true,
    isProvision: true, // 是否计提
    displayAmountAttr: 'deductAmount'
  },
  DZ050101: {
    visScopeWork: true
  },
  DZ0502: {
    title: '合同制薪酬发放',
    visMonPay: true,
    visContact: true,
    visRemark: true,
    visImageNum: true,
    visDisbursementAmount: true,
    visrantTable: true,
    displayAmountAttr: 'disbursementAmount'
  },
  DZ0503: {
    title: '五险二金的结转',
    visCarryOver: true,
    visContact: true,
    visCarryingAmount: true,
    visImageNum: true,
    visRemark: true,
    visFiveInsuranceTable: true,
    displayAmountAttr: 'carryingAmount'
  },
  DZ0504: {
    title: '非全日制薪酬计提和发放',
    visMonSal: true,
    visContact: true,
    visRemark: true,
    visExpArea: true,
    visImageNum: true,
    visamount: true,

    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentSumAmount: true,
    visBankAccount: true,
    visPaymentMethod: true,
    visPaymentFailedBusinessId: true,
    visPayeeArea: true,
    visName: true,
    isProvision: true,
    displayAmountAttr: 'sumAmount'
  },
  DZ050401: {
    title: '非全日制薪酬计提和发放'
  },
  DZ0505: {
    title: '合同制薪酬预提',
    visMonSal: true,
    visContact: true,
    visRemark: true,
    visImageNum: true,
    visDeductAmount: true,
    visMakeTable: true,
    displayAmountAttr: 'deductAmount'
  },
  DZ050501: {
    visScopeWork: true
  },
  DZ06: {
    title: '税费业务',
    leadTitle: '前导界面',
    docDesc: [
      '税费计提：适用于未交增值税、预交增值税、代扣代缴增值税、转让金融商品应交增值税、城市建设维护税、',
      '教育费附加、地方教育费附加、水利建设基金、印花税、企业所得税、房产税、土地使用税、土地增值税、',
      '环保税、车船使用税、消费税、资源税、水资源税、耕地占用税、代扣代缴税金等税费的计提。',
      '税费缴纳：适用于未交增值税、预交增值税、代扣代缴增值税、转让金融商品应交增值税、城市建设维护税、',
      '教育费附加、地方教育费附加、水利建设基金、印花税、企业所得税、房产税、土地使用税、土地增值税、',
      '环保税、车船使用税、消费税、资源税、水资源税、耕地占用税、代扣代缴税金、个人所得税、工会经费、',
      '社会保险、住房公积金、企业年金等税费的缴纳。',
      '税费其他：适用于销项税额抵减、进项税额加计抵减等业务的核算。',
      '递延所得税：适用于资产和负债账面价值与计税基础差异产生的递延所得税资产、递延所得税负债的确认和转回。'],
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ0601: {
    code: 'DZ0601',
    title: '税费计提',
    visImageNum: true,
    visContact: true,
    visRemark: true,
    visExpArea: true,
    visSumAmount: true,
    visName: true,
    visAssAmount: true
  },
  DZ0602: {
    code: 'DZ0602',
    title: '税费缴纳',
    visImageNum: true,
    visContact: true,
    visRemark: true,
    visExpArea: true,
    visPaymentInfo: true,
    visCpnBankAccount: true,
    visPaymentSumAmount: true,
    visBankAccount: true,
    visPaymentMethod: true,
    visPaymentFailedBusinessId: true,
    visPayeeArea: true,
    visName: true,
    visAssAmount: true
  },
  DZ0603: {
    code: 'DZ0603',
    title: '税费其他',
    visImageNum: true,
    visRemark: true,
    visSumAmount: true,
    visContact: true,
    visIsUFIDA: true,
    visExpArea: true,
    visName: true,
    visAssAmount: true
  },
  DZ0604: {
    code: 'DZ0604',
    title: '递延所得税',
    visContact: true,
    visRemark: true,
    visSumAmount: true,
    visExpArea: true,
    visName: true,
    visAssAmount: true
  },
  DZ09: {
    title: '费用预提',
    leadTitle: '前导界面',
    docDesc: [
      '费用预提：适用于业务实际已发生，但尚未结算的成本费用的报账流程',
      '费用摊销：适用于按产量法摊销的长期待摊费用的报账流程'],
    visImageNum: true,
    visContact: true,
    visRemark: true,
    visExpArea: true,
    visSumAmount: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ11: {
    title: '一般总账',
    leadTitle: '前导界面',
    docDesc: [
      '包括财务费用、计提专项储备、银行借款和应付债券、委托贷款、存货非集成、长期股权投资、期货业务、',
      '金融工具、实收资本（股本）、政府补助、营业外收入、营业外支出、减值损失、未分配利润、置业总账共15个业务大类。',
      '期货业务-期货投机中：期货投机业务的持仓浮动盈亏在金融工具业通过“交易性金融资产”或“交易性金融负债”提起报账流程。',
      '对于“固定资产”“无形资产”“投资性房地产”计提减值时，不得与其他场景同时提起。',
      '委托贷款利息收入在“应收管理-收入确认-收入确认（非集成类）-委贷利息收入”中',
      '在“银行借款和应付债券”业务大类中需选择是否启用SAP贷款模块。',
      '“置业总账”仅适用于置业板块，其他业务大类通用。',
      '业务场景中如没有发票，“发票类型”应选择“无发票”。'
    ],
    visProcSubType: true,
    visExpArea: true,
    visPaymentInfo: true,
    visCpnBankAccount: true,
    paymentLabel: '收付款明细',
    PaymentMethodLabel: '收付款方式',
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ1101: {
    visBankAccount: true,
    visPaymentMethod: true,
    visPayeeArea: true,
    receptClaimSelecter: true,
    visNonBankDirect: true,
    visPaymentFailedBusinessId: true
  },
  DZ1102: {
    visIsEnableTheLoanModule: true
  },
  DZ1103: {
    visImageNum: true,
    visInvoiceNum: true,
    visContact: true,
    visRemark: true,
    visChooseContract: true
  },
  DZ1104: {
    visPaymentInfo: false,
    visImageNum: true,
    visContact: true,
    visRemark: true,
    visSumAmount: true
  },
  DZ1105: {
    // vissumAmmountNoTax: true,
    // vissumAmmountTax: true,
    // vissumAmmount: true
    visPaymentAmmount: true
  },
  DZ1106: {
    visPaymentAmmount: true
  },
  DZ1107: {
    visPaymentInfo: false,
    visSumAmount: true
  },
  DZ1108: {
    visImageNum: true,
    visInvoiceNum: true,
    visContact: true,
    visRemark: true
  },
  DZ1109: {
    visBusinessSort: true
  },
  DZ1110: {
    viscostCenterTxt: true
  },
  DZ1112: {
    visSumAmount: true
  },
  DZ14: {
    title: '总账调整业务',
    leadTitle: '前导界面',
    docDesc: [
      '一般总账调整：适用于对已生成凭证进行调整的账务处理',
      '一般总账冲销：适用于对已生成一般总账凭证进行冲销的账务处理'],
    visImageNum: true,
    visContact: true,
    visRemark: true,
    visAssAmount: true,
    visAssGeneralLedger: true
    // displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ1401: { // 一般总账调整
    visAdjust: true,
    visInvoiceNum: true,
    visVoucherYear: true,
    visVoucherNum: true,
    visAmountRequired: true,
    visReceptClaimSelecterGeneral: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ1402: { // 一般总账冲销
    visDuringSterilisation: true,
    visSterilisation: true,
    visVoucherYear: true,
    visVoucherNum: true
  },
  DZ1403: { // 录入总凭证
    visAmountZZ: true,
    visDescription: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  DZ15: {
    title: '总账其他',
    leadTitle: '前导界面',
    docDesc: ['总账其他：适用于无对应报账类型，特殊业务的账务处理'],
    visImageNum: true,
    visContact: true,
    visRemark: true,
    visAssAmount: true,
    visAssGeneralLedger: true,
    visAmountRequired: true,
    visDescription: true,
    displayAmountAttr: 'sumAmount' // 显示报账金额字段属性
  },
  FD01: {
    title: '资金调拨申请',
    leadTitle: '前导界面',
    docDesc: ['单位之间资金往来划拨，各公司根据资金实际需求情况发起需求流程',
      '经财务管理部资金调度审核后，共享财务资金结算岗进行划拨的过程。'
    ],

    visAllocate: true,
    visRemark: true,

    visPaymentInfo: true,
    visPaymentMethod: true,
    visPayInfoCurrency: true,
    paymentAmountFD: true,
    visPaymentDate: true,
    visWbs1: true
  },
  FD02: {
    title: '支付失败处理流程',
    leadTitle: '前导界面',
    docDesc: null,
    contentComp: 'formContent',
    visRemark: true,
    visRepayInfo: true,
    displayAmountAttr: 'amount' // 显示报账金额字段属性
  },

  K02: {
    title: '通用组件表单',
    leadTitle: '通用前导',
    docDesc: ['各个业务组件的集合用于前期开发'],
    // forms
    // visPaymentInfo: false,
    visContractInfo: false,
    visUnclearDetails: true,
    visExpArea: true,
    visPaymentTableForm: true,
    visDueDateChange: true,
    verifiablePay: true,
    visImage: true,
    // head
    visProject: true,
    visBgtProj: false,
    visBgtPhase: true,
    visHeadCurrency: true,
    visHeadPayAmount: true,
    visHeadVerifyAmount: true,
    visHeadPaymentAmount: true,

    visReimbHead: true,

    visRemark: true,

    visPayeeTxt: true,
    visPayeeTxt4Contract: false,
    visInvoice: true,

    visPaymentInfo: true,
    visVendor: true,
    visAccount: true,
    visAccountSelect: true,
    visCnaps: true,
    visBankName: true,
    visPaymentMethod: true,
    visIncomeArea: true,
    visIsNeedFinanceInvoice: true,
    visInvoiceCate: true,
    visPreBusinessId: true,
    visReceptClaimSelecter: true,
    visProcSubType: true,
    visImageNum: true,
    visContact: true,
    visAmount: true,
    visChooseContract: true,
    visOrderNo: true,
    visWbs: true,
    visTrainTransferFee: true,
    visPaymentSugButton: true,
    visPreVoucherNo: true

  },
  draft: {
    title: '工作清单-草稿箱',
    visBusinessId: true,
    visProcessId: true,
    visBusinessType1: true,
    visBusinessType2: true,
    visCFT: true
  },
  uwl: {
    title: '工作清单-我的待办',
    visBusinessId: true,
    visProcessId: true,
    visBusinessType1: true,
    visBusinessType2: true,
    visSFT: true,
    visTask: true
  },
  apply: {
    title: '工作清单-我的申请',
    visBusinessId: true,
    visProcessId: true,
    visBusinessType1: true,
    visBusinessType2: true,
    visSFT: true
  },
  done: {
    title: '工作清单-我的已办',
    visBusinessId: true,
    visProcessId: true,
    visBusinessType1: true,
    visBusinessType2: true,
    visSFT: true,
    visTask: true
  }
}
