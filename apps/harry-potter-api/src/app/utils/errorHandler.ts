
import { ErrorMessage } from '@tekkon/api-services';

export class HttpError extends Error {
  public statusCode: number;
  public errorCode: string;
  constructor(statusCode: number, errorCode: string, message?: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
}
}

export class ValidationError extends HttpError {
    constructor(errorCode: string, message: string) {
        super(400, errorCode || "badRequest", message);
    }
}

const errorHandler = (err: any, req: any, res: any, next: any) => {
  if (res.headerSent) {
      return next(err);
  }
  console.error(err);
  res.status(err.statusCode || 500);
  let message = null;
  try {
      message = JSON.parse(err.message);
  } catch (e) {
      message = err.message;
  }
  const responseJSON = {
      statusCode: err.statusCode,
      errorCode: err.errorCode,
      message: ErrorMessage[err.errorCode] || message || 'Internal Server Error',
      stackTrace: null
  };
  if (process.env.NODE_ENV !== "production") {
      responseJSON.stackTrace = err.stack;
  }
  res.send(responseJSON);
};
export { errorHandler };
