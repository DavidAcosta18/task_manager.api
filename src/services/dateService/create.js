const moment = require('./common/moment');

module.exports = (dateString, format) => {
  return moment(dateString, format);
};
