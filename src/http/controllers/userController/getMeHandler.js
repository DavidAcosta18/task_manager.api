const { transaction } = require('../../../common');
const { userFromToken } = require('../../../app/users');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const getMeHandler = async (request, response) => {
  const result = await transaction(() => userFromToken(request.user.token));

  return response.handle(result);
};

module.exports = asyncHandler(getMeHandler);
