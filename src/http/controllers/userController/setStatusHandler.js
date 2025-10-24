const { transaction } = require('../../../common');
const { setStatus } = require('../../../app/users');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const setStatusHandler = async (request, response) => {
  const userId = request.params.id;
  const data = {
    isEnabled: request.body.isEnabled,
  };

  const result = await transaction(() => setStatus(userId, data));

  return response.handle(result);
};

module.exports = asyncHandler(setStatusHandler);
