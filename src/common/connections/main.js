const moment = require('moment');
const Sequelize = require('sequelize');
const cls = require('cls-hooked');
const config = require('../config');

const dbConfig = config.get('db');
const timezone = config.get('app.timezone');

const minutesOffset = moment.utc().tz(timezone).utcOffset();
const sign = minutesOffset / Math.abs(minutesOffset);
const hours = Math.floor(minutesOffset / 60) * sign;
const minutes = (minutesOffset % 60) * sign;
const offset = `${sign > 0 ? '' : '-'}${hours < 10 ? '0' : ''}${hours}:${
  minutes < 10 ? '0' : ''
}${minutes}`;

const namespace = cls.createNamespace('defaultnmspc');
Sequelize.useCLS(namespace);

// eslint-disable-next-line no-console
console.log(`Connecting to mysql with offset ${offset}`);

module.exports = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: 'mysql',
  timezone: offset,
  // eslint-disable-next-line no-console
  logging: dbConfig.log ? console.log : () => {},
});
