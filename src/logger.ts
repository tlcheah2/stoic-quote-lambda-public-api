import winston from 'winston';

// The below 2 lines of code is intended to test the linting work properly
const a: number = 'this is string';
console.log('abcd');

const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'stoic-quote-lambda-api' },
  transports: [
    new winston.transports.File({ filename: 'outputs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'outputs/combined.log' }),
    new winston.transports.Console(),
  ],
});

export default logger;
