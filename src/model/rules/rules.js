export * from './reqLeadViewRule'
export * from './universTableRule'
export * from './headFormRule'

export const paymentRule = {
  amount: [
    {required: true, message: '请输入金额', trigger: 'blur'},
    {required: true, message: '请输入金额', trigger: 'change'}

  ],
  paymentMethod: [
    { required: true, message: '请选择付款方式', trigger: 'blur' },
    { required: true, message: '请选择付款方式', trigger: 'change' }
  ],
  payeeType: [
    { required: true, message: '请选择收款方类型', trigger: 'blur' },
    { required: true, message: '请选择收款方类型', trigger: 'change' }
  ],
  payeeTxt: [
    { required: true, message: '请输入并选择收款人', trigger: 'blur' },
    { required: true, message: '请输入并选择收款人', trigger: 'change' }
  ],
  payee: [
    { required: true, message: '请输入并选择收款人', trigger: 'blur' },
    { required: true, message: '请输入并选择收款人', trigger: 'change' }
  ],
  accountName: [
    { required: true, message: '请选择账户信息', trigger: 'blur' },
    { required: true, message: '请选择账户信息', trigger: 'change' }
  ],
  expectPayDate: [
    { required: true, message: '请输入预计支付日期', trigger: 'blur' },
    { required: true, message: '请输入预计支付日期', trigger: 'change' }
  ],
  isFrozen: [
    { required: true, message: '请选择是否冻结', trigger: 'blur' },
    { required: true, message: '请选择是否冻结', trigger: 'change' }
  ],
  vendorTxt: [
    { required: true, message: '请选择供应商名称', trigger: 'blur' },
    { required: true, message: '请选择供应商名称', trigger: 'change' }
  ],
  customerTxt: [
    { required: true, message: '请选择客户名称', trigger: 'blur' },
    { required: true, message: '请选择客户名称', trigger: 'change' }
  ],
  accountName: [
    { required: true, message: '请选择账户名', trigger: 'blur' },
    { required: true, message: '请选择账户名', trigger: 'change' }
  ],
}

export const payContRule = {
  busTypeLvl3Txt: [
    { required: true, message: '请选择费用事项', trigger: 'blur' },
    { required: true, message: '请选择费用事项', trigger: 'change' }
  ],
  invoiceType: [
    { required: true, message: '请选择发票类型', trigger: 'blur' },
    { required: true, message: '请选择发票类型', trigger: 'change' }
  ],
  invoiceAmount: [
    {required: true, message: '请输入金额', trigger: 'blur'},
    {required: true, message: '请输入金额', trigger: 'change'}
  ],
  amount: [
    {required: true, message: '请输入金额', trigger: 'blur'},
    {required: true, message: '请输入金额', trigger: 'change'}
  ]
}
