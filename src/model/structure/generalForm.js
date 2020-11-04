import { tFormPayment } from './tFormPayment'
import { generalHead } from './generalHead'
import { recipt } from './recipt'
import { invoiceDetail } from './invoiceDetail'
import { tFormContract } from './tFormContract'
import { assetDetail } from './assetDetail'
import { generalFormItem } from './genaralFormItem'

export const generalForm = {
  head: generalHead, // 抬头
  payment: tFormPayment, // 付款信息
  recipt: recipt, // 收据
  invoice: invoiceDetail, // 发票校验明细
  asset: assetDetail, // 资产明细
  contract: tFormContract, // 合同
  item: generalFormItem, // 费用
  contractList: [], // 合同明细
  itemList: [], //  费用明细
  paymentList: [], // 付款明细
  invoiceList: [], // 发票明细
  outstandList: [], // 未清明细
  reciptList: [], // 收款认领清单
  refOAs: [], // 关联OA单据
  refAdvApplies: [], // 关联事前申请单
  assetList: [], // 资产
  claimSlipList: [], // 收款认领单
  voucher: null
}
