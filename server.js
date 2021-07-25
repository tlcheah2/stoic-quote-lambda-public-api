// require('dotenv').config();
const serverless = require('serverless-http');
const app = require('./src/app');

module.exports.handler = serverless(app);
