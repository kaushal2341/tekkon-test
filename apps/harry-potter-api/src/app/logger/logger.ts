import * as fs from 'fs';
import * as stream from 'stream';
import 'winston-daily-rotate-file';
import { createLogger, format, transports } from 'winston';

const  logging = {
  dir: process.env.LOGGING_DIR || 'logs',
  level: process.env.LOGGING_LEVEL || 'debug',
  maxSize: process.env.LOGGING_MAX_SIZE || '',
  maxFiles: +(process.env.LOGGING_MAX_FILES || 24),
  environment: process.env.NODE_ENV || 'production',
  datePattern: process.env.LOGGING_DATE_PATTERN || 'YYYY-MM-DD-THH'
};

const { combine, colorize, splat, printf, timestamp } = format;
const keysToFilter = ['password', 'token'];
const formatter = printf((info: any) => {
  const { level, message, timestamp: ts, ...restMeta } = info;
  const meta =
    restMeta && Object.keys(restMeta).length
      ? JSON.stringify(
          restMeta,
          (key: any, value: any) =>
            keysToFilter.includes(key) ? '******' : value,
          2
        )
      : restMeta instanceof Object
      ? ''
      : restMeta;
  return `[ ${ts} ] - [ ${level} ] ${message} ${meta}`;
});
if (!fs.existsSync(logging.dir)) {
  fs.mkdirSync(logging.dir);
}
let trans: any = [];
if (logging.environment === 'development') {
  trans = [new transports.Console()];
}
const logger = createLogger({
  level: logging.level,
  format: combine(splat(), colorize(), timestamp(), formatter),
  transports: [
    ...trans,
    new (transports as any).DailyRotateFile({
      maxSize: logging.maxSize,
      maxFiles: logging.maxFiles,
      datePattern: logging.datePattern,
      zippedArchive: true,
      frequency:'3h',
      filename: `${logging.dir}/${logging.level}payoks`
    })
  ],
  exitOnError: false
});
/**
 * A writable stream for winston logging.
 */
export const logStream = new stream.Writable({
  write(message: any) {
    logger.info(message.toString());
  }
});
export default logger;