/* eslint-disable no-param-reassign */
const { LogicError } = require('../errors');

const config = (configuration) => ({
  get: (key) => {
    const fields = key.split('.');

    return fields.reduce((stack, field) => stack[field], configuration);
  },
  set: (key, value) => {
    const fields = key.split('.');

    if (fields.length === 1) {
      configuration[fields[0]] = value;
    } else if (fields.length === 2) {
      configuration[fields[0]][fields[1]] = value;
    } else if (fields.length === 3) {
      configuration[fields[0]][fields[1]][fields[2]] = value;
    } else if (fields.length === 4) {
      configuration[fields[0]][fields[1]][fields[2]][fields[3]] = value;
    } else {
      throw new LogicError('Chain unsupported');
    }

    return this;
  },
});

module.exports = config;
