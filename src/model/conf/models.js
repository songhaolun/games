export const contro = {
  disabled: false,
  uniDisabled: false,
  loadingCount: 0,
  status: '',
  errorMessage: '',
  action: '',
  fssc: false,
  applicantLabel: '',
  inFsscView: false
}

export const defaultUi = {
  title: '',
  policyLabel: '',
  visExpDate: false,
  visExpType: false,
  visBgtAccount: false,

  visStartDate: false,
  visEndndDate: false,
  visDays: false,
  visCityType: false,

  visAmount: false,
  visCurrency: false,
  visPolicyAmount: false,
  visOverReasonSelection: false,
  visOverReasonInput: false,

  visPurpose: false,
  visIsUnify: false,

  visTransMeans: false,
  visTransClass: false,
  visPolicyClass: false,
  visMileage: false,
  visMileageAmount: false,

  visBgtProj: false,
  visRemark: false
}

export const formHead = {
  // businessId: '',
  // docType: '',
  // docTypeTxt: '',
  // busPlate: '',
  // busPlateTxt: '',
  // procType: '',
  // procTypeTxt: '',
  // procSubType: '',
  // procSubTypeTxt: '',
  // applicant: '',
  // applicantTxt: '',
  // applicantLevel: '',
  // applicantLevelTxt: '',
  // bgtComp: '',
  // bgtCompTxt: '',
  // bgtDept: '',
  // bgtDeptTxt: '',
  // costComp: '',
  // costCompTxt: '',
  // costDept: '',
  // costDeptTxt: '',
  // bgtPhase: '',
  // bgtPhaseTxt: '',
  // project: '',
  // projectTxt: '',
  // applyAmount: 0,
  // currency: '',
  // currencyTxt: '',
  // remark: '',
  // status: '',
  // statusTxt: '',
  // createAt: null,
  // createBy: '',
  // createByTxt: '',
  // bgtBusPlate: '',
  // bgtBusPlateTxt: '',
  // invoiceCategory: '',
  // invoiceCategoryTxt: ''
  businessId: '',
  docType: '',
  docTypeTxt: '',
  busPlate: '',
  busPlateTxt: '',
  bgtBusPlate: '',
  bgtBusPlateTxt: '',
  procType: '',
  procTypeTxt: '',
  procSubType: '',
  procSubTypeTxt: '',
  applicant: '',
  applicantTxt: '',
  applicantLevel: '',
  applicantLevelTxt: '',
  bgtComp: '',
  bgtCompTxt: '',
  bgtDept: '',
  bgtDeptTxt: '',
  costComp: '',
  costCompTxt: '',
  costDept: '',
  costDeptTxt: '',
  bgtPhase: '',
  bgtPhaseTxt: '',
  project: '',
  projectTxt: '',
  applyAmount: 0,
  amount: 0,
  currency: '',
  currencyTxt: '',
  remark: '',
  status: '',
  statusTxt: '',
  createAt: null,
  createBy: '',
  createByTxt: '',

  bgtProject: '',
  bgtProjectTxt: '',

  bgtProj: '',
  bgtProjTxt: '',

  expType: '',
  exptypeTxt: '',
  busTypeLvl1: '',
  busTypeLvl1Txt: '',
  busTypeLvl2: '',
  busTypeLvl2Txt: '',
  busTypeLvl3: '',
  busTypeLvl3Txt: '',

  busType: '',
  busTypeTxt: '',
  busScenId: '',
  bgtAccount: '',
  bgtAccountTxt: '',

  applicantMainJob: '', // 申请人职务
  applicantMainJobTxt: '', // 申请人职务描述
  compId: '', // 申请人所属公司
  compTxt: '', // 申请人所属公司描述
  deptId: '', // 部门编码
  deptTxt: '', // 部门名称
  verifyAmount: 0, // 核销金额
  paymentAmount: 0, // 实际付款金额

  applicantDeptId: '', // 经办人HR部门
  invoiceCategoryTxt: '',
  invoiceCategory: '',
  // 合同
  contNo: '',
  contId: '',
  contName: '',
  contPartyA: '',
  contPartyATxt: '',
  contPartyB: '',
  contPartyBTxt: '',
  contPartyC: '',
  contPartyCTxt: '',
  contCurrency: '',
  contCcurrencyTxt: '',
  contAmount: 0,
  contNewAmount: '',
  isInitCont: '',
  contUrl: '',
  contComp: '',
  contCompTxt: '',
  invoiceType: '',
  invoiceTypeTxt: '',

  costCurrency: '', // 业务币种 （如合同币种 发票币种 等等）
  costCurrencyTxt: '',

  bgtCurrency: '', // 预算承担公司币种
  bgtCurrencyTxt: '',
  createTime: null,
  loanType: '',
  loanTypeTxt: '',
  version: 0
}

export const docMap = {
  A01: {title: '费用申请单'},
  A02: {title: '费用报销单'},
  B01: {title: '借款单'},
  C01: {title: '无合同付款申请单'},
  D01: {title: '杂项付款申请单'},
  D02: {title: '解冻付款申请单'},
  EX01: {title: '还款单'},
  EX02: {title: '押金收回单'},
  B02: {title: '备用金'},
  B04: {title: '合同预付款单'},
  B03: {title: '无合同预付款单'},
  C02: {title: '合同付款申请单'}
}

export const taskDetail = {
  completeByTxt: '',
  completeBy: '',
  taskReult: '',
  taskReultTxt: '',
  completeAt: null,
  taskReultComment: ''
}
