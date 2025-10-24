const moment = require('./common/moment');

module.exports = (date, format) => {
  return moment(date).format(format);
};
