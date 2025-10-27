const { getTaskDetails } = require('../../../app/tasks');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const getTaskDetailsHandler = async (request, response) => {
  const result = await transaction(() => getTaskDetails(request.params.taskId));

  return response.handle(result);
};

module.exports = asyncHandler(getTaskDetailsHandler);
