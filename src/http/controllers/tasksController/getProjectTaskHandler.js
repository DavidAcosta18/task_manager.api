const { getProjectTasks } = require('../../../app/tasks');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const getProjectTaskHandler = async (request, response) => {
  const result = await transaction(() => getProjectTasks(request.params.projectId));

  return response.handle(result);
};

module.exports = asyncHandler(getProjectTaskHandler);
