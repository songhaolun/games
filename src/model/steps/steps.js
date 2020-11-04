// 帮助指引配置
const steps = [
  // {
  //   element: '#form-submit-button',
  //   popover: {
  //     title: '提交',
  //     description: '校验并提交单据进入审批流程',
  //     position: 'bottom'
  //   }
  // },
  // {
  //   element: '#form-save-button',
  //   popover: {
  //     title: '保存',
  //     description: '将单据暂存，可在草稿箱中打开',
  //     position: 'bottom'
  //   }
  // },
  // {
  //   element: '#form-head-info',
  //   popover: {
  //     title: '基本信息',
  //     description: '单据的基本信息',
  //     position: 'bottom'
  //   }
  // },
  {
    element: '#head-form',
    popover: {
      title: '单据抬头',
      description: '单据的主体信息',
      position: 'bottom'
    }
  },
  {
    element: '#paymentInfo',
    popover: {
      title: '付款明细',
      description: '单据的付款相关信息',
      position: 'bottom'
    }
  },
  {
    element: '#expArea',
    popover: {
      title: '填单空间',
      description: '单据费用明细的总览以及明细的创建以及查看',
      position: 'top'
    }
  },
  {
    element: '#paymentTableForm',
    popover: {
      title: '付款明细',
      description: '根据付款建议报表带出付款明细',
      position: 'top'
    }
  },
  {
    element: '#payeeArea',
    popover: {
      title: '收款方',
      description: '填写或查看收款明细以及未清明细 其中报销金额-本次付款金额-本次核销金额=未分配金额',
      position: 'top'
    }
  },
  {
    element: '#accountInfoDialog',
    popover: {
      title: '账户信息',
      description: '选择收款方账户信息',
      position: 'bottom'
    }
  }
  // {
  //   element: '.el-input',
  //   popover: {
  //     title: '输入框',
  //     position: 'top'
  //   }
  // }
]

export default steps
