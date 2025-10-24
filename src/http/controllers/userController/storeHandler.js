const { transaction } = require('../../../common');
const { createUser } = require('../../../app/users');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */

const storeHandler = async (request, response) => {
  const data = {
    email: request.body.email,
  };

  const result = await transaction(() => createUser(data));

  return response.handle(result);
};

module.exports = asyncHandler(storeHandler);
