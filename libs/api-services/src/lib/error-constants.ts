export enum ErrorCode {
  PA02 = 'PA01',
  PU01 = 'PU01',
  PU02 = 'PU02',
  VALIDATION_FAILED = 'VALIDATION_FAILED',
  PA01 = 'PA01',
  PR01 = 'PR01',
  PO01 = 'PO01',
  PO02 = 'PO02',
  PP01 = 'PP01',
  PR02 = 'PR02',
  PR03 = 'PR03',
  PR04 = 'PR04',
  PP02 = 'PP02',
  PP03 = 'PP03',
  PA03 = 'PA03',
  PM01 = 'PM01',
  PM02 = 'PM02',
  PA04 = 'PA04'

}

export const ErrorMessage = {
  [ErrorCode.PA02]: 'Admin exists.',
  [ErrorCode.PU01]: 'User Not Found',
  [ErrorCode.PU01]: 'User Not Found',
  [ErrorCode.PA03]: 'Invalid signature',
  [ErrorCode.PU02]: 'username already taken',
  [ErrorCode.PA01]: 'Not an agent of merchant',
  [ErrorCode.PR01]: 'Recharge exists for order',
  [ErrorCode.PO01]: 'Order not found',
  [ErrorCode.PO02]:'Order should be unique.Order already exist for this eId',
  [ErrorCode.PP02]: 'Insufficient balance',
  [ErrorCode.PP01]: 'Payment status already changed',
  [ErrorCode.PP03]: 'Payment order not found',
  [ErrorCode.PR02]: 'Recharge status already changed',
  [ErrorCode.PR03]: 'UTR No Should Be Unique',
  [ErrorCode.PR04]: 'Ref No Should Be Unique',
  [ErrorCode.PM01]: 'Merchant not found',
  [ErrorCode.PM02]: 'Provided Merchant Id Is Incorrect',
  [ErrorCode.PA04]: 'Not an admin'

};
