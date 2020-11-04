export const reqLeadViewRule = {
  createBy: [
    { required: true, message: '请选择制单人', trigger: 'blur' },
    { required: true, message: '请选择制单人', trigger: 'change' }
  ],
  applicant: [
    { required: true, message: '请选择申请人/经办人', trigger: 'blur' },
    { required: true, message: '请选择申请人/经办人', trigger: 'change' }
  ],
  bgtComp: [
    { required: true, message: '请选择预算承担公司', trigger: 'blur' },
    { required: true, message: '请选择预算承担公司', trigger: 'change' }
  ],
  bgtDept: [
    { required: true, message: '请选择预算承担部门', trigger: 'blur' },
    { required: true, message: '请选择预算承担部门', trigger: 'change' }
  ],
  costComp: [
    { required: true, message: '请选择费用承担公司', trigger: 'blur' },
    { required: true, message: '请选择费用承担公司', trigger: 'change' }
  ],
  costDept: [
    { required: true, message: '请选择费用承担部门', trigger: 'blur' },
    { required: true, message: '请选择费用承担部门', trigger: 'change' }
  ],
  busPlate: [
    { required: true, message: '请选择板块', trigger: 'blur' },
    { required: true, message: '请选择板块', trigger: 'change' }
  ],
  businessType1: [
    { required: true, message: '请选择业务大类', trigger: 'blur' },
    { required: true, message: '请选择业务大类', trigger: 'change' }
  ],
  businessType2: [
    { required: true, message: '请选择业务小类', trigger: 'blur' },
    { required: true, message: '请选择业务小类', trigger: 'change' }
  ],
  invoiceCategory: [
    { required: true, message: '请选择发票种类', trigger: 'blur' },
    { required: true, message: '请选择发票种类', trigger: 'change' }
  ],
  reimAmountFi: [
    { required: true, message: '请输入财务确认金额', trigger: 'blur' },
    { required: true, message: '请输入财务确认金额', trigger: 'change' }
  ],
  reimAmount: [
    { required: true, message: '请输入报销金额', trigger: 'blur' },
    { required: true, message: '请输入报销金额', trigger: 'change' }
  ],
  bgtReleaseAmount: [
    { required: true, message: '预算释放金额不可为空', trigger: 'blur' },
    { required: true, message: '预算释放金额不可为空', trigger: 'change' }
  ],
  companyCode: [
    { required: true, message: '请选择公司名称', trigger: 'blur' },
    { required: true, message: '请选择公司名称', trigger: 'change' }
  ],
  department: [
    { required: true, message: '请选择部门名称', trigger: 'blur' },
    { required: true, message: '请选择部门名称', trigger: 'change' }
  ]
}
