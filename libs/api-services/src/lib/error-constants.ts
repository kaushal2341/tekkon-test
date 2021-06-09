export enum ErrorCode {
  PC02 = 'PC01',
  PC01 = 'PC02'
}

export const ErrorMessage = {
  [ErrorCode.PC01]: 'Characters Not Found.',
  [ErrorCode.PC02]: 'Invalid Character Id.',
};
