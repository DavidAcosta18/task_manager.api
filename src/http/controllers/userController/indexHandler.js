const { transaction } = require('../../../common');
const { listUsers } = require('../../../app/users');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const indexHandler = async (request, response) => {
  const result = await transaction(() => listUsers());

  return response.handle(result);
};

module.exports = asyncHandler(indexHandler);
