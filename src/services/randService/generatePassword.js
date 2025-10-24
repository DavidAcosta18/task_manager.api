const randomstring = require('randomstring');

module.exports = () => {
  return randomstring.generate(6);
};
