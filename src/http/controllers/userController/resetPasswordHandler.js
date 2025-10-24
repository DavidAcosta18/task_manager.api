const { transaction } = require('../../../common');
const { resetPassword } = require('../../../app/users');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const resetPasswordHandler = async (request, response) => {
  const userId = request.params.id;

  const result = await transaction(() => resetPassword(userId));

  return response.handle(result);
};

module.exports = asyncHandler(resetPasswordHandler);
