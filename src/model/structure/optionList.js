export const optionList = {
  DIC_DEFAULT: [], // 默认数据
  DIC_BUS_PLATE: [],
  DIC_DELEGATE: [],
  DIC_PROC_SUB_TYPE: [
    {key: 'P1201', value: '通用预付款'},
    {key: 'P1202', value: '预付铁路运费'},
    {key: 'P1203', value: '预付工程款'}
  ],
  DIC_PROC_TYPE: [],
  optionBgtComp: [],
  optionCostComp: [],
  optionCostDept: [],
  DIC_CURRENCY: [],
  DIC_PROJECT: [],
  DIC_BGT_PHASE: [],
  DIC_BGT_ACCOUNT: [],
  DIC_OVER_REASON: [],
  DIC_BGT_PROJ: [],
  DIC_CITY_TYPE: [],
  DIC_TRIP_PURPOSE: [],
  DIC_YN: [
    {key: 'Y', value: '是'},
    {key: 'N', value: '否'}
  ],
  DIC_TRANSPORT_MEANS: [],
  DIC_TRANSPORT_CLASS: [],
  DIC_INVOICE_TYPE: [],
  DIC_VENDOR_TYPE: [],
  DIC_INVOICE_CATEGORY: [],
  DIC_INVOICe_TYPE: [],
  DIC_PAYMENT_METHOD: [],
  DIC_PAYEE_TXT: [],
  DIC_INVOICE_CATEGORY_4REIM: [],
  DIC_LOAN_TYPE: [],
  DIC_PRE_PAY_TYPE: [],
  DIC_TAX_RATE: [],
  DIC_ALLOCATION_TYPE: [],
  DIC_OPERATOR: [],
  DIC_TEAM: [],
  DIC_MEMBER: [],
  DIC_FSS_DOC_STATUS: [],
  DIC_REFUND_METHOD: [],
  DIC_REFUND_METHOD_DEPOSIT: [],
  DIC_COMP: [],
  DIC_DEPT: [],
  DIC_OUT_TYPE: [{'key': '1', 'value': '客户'}, {'key': '2', 'value': '供应商'}],
  DIC_PAYMENT_CLAUSE: [], // 付款条件
  DIC_TRANSFER: [], // 资产调出单位
  DIC_FRDEPT: [], // 资产调出部门
  DIC_FERTOCORP: [], // 资产调入单位
  DIC_FERTODEPT: [], // 资产调入部门
  DIC_SHIPPING_SPACE: [], // 仓位
  DIC_CASH_FLOW: [], // 现金流量项目
  DIC_CONTRACT_TYPE: [],
  DIC_RECEIVER_ACCOUNT: [], // 收款方账号
  DIC_PAYMENT_TYPE: [], // 款项性质
  DIC_RANK: [], // 职级 职务
  DIC_RANK_MAP: {}, // 职级 职务对应关系
  DIC_ELIMINATION: [], // 冲销期间
  DIC_COSTCENTER_TYPE: [], // 成本中心
  DIC_BUSINESS_TYPE1: [], // 业务一级分类
  DIC_BUSINESS_TYPE2: [], // 业务二级分类
  DIC_PAYMENT_CONDITION: [], // 付款条件
  DIC_PERIOD: [], // 冲销期间
  DIC_ALL_COMP: [], // 所有公司
  DIC_ACCOUNT_DEMANDER: [], // 资金收款方账号
  DIC_ACCOUNT_PAYMENT: [], // 资金付款方账号
  DIC_BUSINESS_SORT: [], // 业态类别
  DIC_DEPARTMENT: [], // 部门
  DIC_SUBJECT: [], // 科目
  DIC_INVOICE_VERIFY_STATUS: [], // 验真状态
  DIC_INVOICE_ERROR_MSG: [], // 失败原因
  DIC_INVOICE_CERTIFY_STATUS: [], // 认证状态
  DIC_VEHICLE: [], // 交通工具
  DIC_ACTIVE: [ // 是否激活
    {key: '0', value: '未激活'},
    {key: '1', value: '激活'}
  ],
  DIC_EMPL: [], // 员工主数据搜索
  IMPL_CROSS_COMP: [], // 员工跨公司数据
  DIC_CROSS_COMP: [], // 跨公司
  DIC_CROSS_DEPT: [], // 跨部门
  DIC_CONTRACT_ACCT: [], // 客户余额查询
  DIC_ADV_PAY_ACCT: [], // 供应商余额查询
  DIC_STAMP_TYPE: [], // 印花税税目
  DIC_STAMP_SOURCE: [], // 印花税来源
  DIC_COST_CENTER: [], // 成本中心
  DIC_PUR_SALE_TYPE: [], // 购销类别
  DIC_PRICE_TYPE: [], // 计价方式
  DIC_VENDER: [], // 供应商
  DIC_CUSTOMER: [], // 客户
  DIC_ACCOUNTING_TYPE: [], // 核算类型
  DIC_DEPOSIT_WQ_ACCT: [], // 押金质保金未清科目
  DIC_CSTM_RTN_WQ_ACCT: [], // 客户退款未清科目
  DIC_AS_BUSID: [], // 业务场景
  DIC_AS_COMPANY_GROUP: [], // 公司组1
  DIC_AS_COMPANY_ASS1: [], // 分配公司1
  DIC_AS_COMPANY_ASS2: [], // 分配公司2
  DIC_AS_PROJECT1: [], // 分配项目1
  DIC_AS_PROJECT2: [], // 分配项目2
  DIC_AS_COMPANY: [], // 公司
  MAP_EMP_A: {}, // 实报实销员工
  DIC_ACCOUNT: [], // 科目
  DIC_MEASURE_UNIT: [], // 度量单位
  DIC_ORIGINAL_PAYMENT_STATUS: [], // 原付款状态
  DIC_CE_ASSET_BUSID: [], // CE资产流程类型
  DIC_AS_COMPANY_ASS_AC01: [],
  DIC_AS_COMPANY_ASS_AC02: [],
  DIC_AS_COMPANY_ASS_AC03: [],
  DIC_AS_COMPANY_ASS_BC01: [],
  DIC_AS_COMPANY_ASS_BC02: [],
  DIC_AS_COMPANY_ASS_DC01: [],
  DIC_AS_COMPANY_ASS_DC02: [],
  DIC_AS_COMPANY_ASS_DC03: [],
  DIC_AS_COMPANY_ASS_EC01: [],
  DIC_AS_COMPANY_ASS_EC02: [],
  DIC_AS_COMPANY_ASS_EC03: [],
  DIC_AS_COMPANY_ASS_FC02: [],
  DIC_AS_COMPANY_ASS_GC01: [],
  DIC_AS_COMPANY_ASS_HC01: [],
  DIC_AS_COMPANY_ASS_IC01: [],
  DIC_AS_COMPANY_ASS_JC01: [],
  DIC_AS_COMPANY_ASS_KC01: [],
  DIC_AS_COMPANY_ASS_KC02: [],
  DIC_AS_COMPANY_ASS_KC03: [],
  DIC_AS_COMPANY_ASS_KC04: [],
  DIC_AS_COMPANY_ASS_KC05: [],
  DIC_AS_COMPANY_ASS_KC06: [],
  DIC_AS_COMPANY_ASS_KC07: [],
  DIC_AS_COMPANY_ASS_LC01: [],
  DIC_AS_COMPANY_ASS_LC02: [],
  DIC_AS_COMPANY_ASS_MC01: [],
  DIC_REASON_CODE: [], // 原因代码
  DIC_BUSI_TYPE_TCODE: [], // 跳转SAP的按钮链接地址
  DIC_FAIL_PAID: [], // 支付失败单据
  DIC_NC01: [],
  DIC_NC02: [],
  DIC_NC03: [],
  DIC_NC04: [],
  DIC_NC05: [],
  DIC_NC06: [],
  DIC_NC07: [],
  DIC_NC08: [],
  DIC_NC09: [],
  DIC_NC10: [],
  DIC_NC11: [],
  DIC_NC12: [], // 销售状态
  DIC_NC13: [],
  DIC_NC14: [], // 业务类别
  DIC_NC15: [], // 产权代扣款
  DIC_NC16: [],
  DIC_NC17: [], // 代扣款类型
  DIC_NC18: [],
  DIC_NC19: [],
  DIC_NC20: [], // 收入发生时间
  DIC_NC_BUS_ACCOUNT: [], // 供应商余额或客户余额查询
  DIC_MEASURE_UNITL: [], // 凭证单位
  DIC_PAYMENT_TYPE_NC: [], // 款项性质NC
  DIC_OTHER_BUSINESS_NC: [], // 其他业务类别
  DIC_SETTLEMENT: [], // 结算方式
  DIC_REVERSE_REASON: [], // 冲销原因
  DIC_VALAUA_TYPE: [], // 评估类别
  DIC_STAMP_TYPE_NC: [], // 印花税类别
  DIC_BUSI_VOUCHER_INFO: [], // 业务类型与是否需要录入凭证信息 关系
  DIC_MILESTONE: [], // 里程碑编码
  DIC_PROCESS_STATUS: [
    {key: 'Processing', value: '进行中'},
    {key: 'End', value: '已结束'},
    {key: 'Delete', value: '已作废'}
  ],
  DIC_COMMENT_TYPE: [
    {key: 'StartProcess', value: '流程发起'},
    {key: 'SubmitTask', value: '提交任务'},
    {key: 'Approved', value: '审批通过'},
    {key: 'Rejected', value: '审批驳回'},
    {key: 'Sign', value: '加签'},
    {key: 'Delegate', value: '委托'},
    {key: 'Recall', value: '撤回'}
  ],
  DIC_BUSI_TYPE_TCODE_PRE:[],
  DIC_PAYMENT_CLAUSE_TEMP:[] //付款条件
}
