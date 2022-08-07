import { createLogger, format, transports } from 'winston';
// import { environment } from '../config';

const environment = 'development';

const logLevel = environment === 'development' ? 'debug' : 'warn';

export default createLogger({
  transports: [
    new transports.Console({
      level: logLevel,
      format: format.combine(format.errors({ stack: true }), format.prettyPrint()),
    }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});
