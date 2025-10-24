const validate = require('./validate');

module.exports = {
  validate: validate(false),
  validateForm: validate(true),
};
