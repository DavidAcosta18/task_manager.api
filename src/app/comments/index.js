const { Comments } = require('../../models');
const { validatorService } = require('../../services');
const createComments = require('./createComments');

module.exports = {
  createComments: createComments({
    Comments,
    validate: validatorService.validateForm,
  }),
};
