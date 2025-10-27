const { createTask } = require('../../../app/tasks');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const createTaskHandler = async (request, response) => {
  const result = await transaction(() => createTask(request.body));

  return response.handle(result);
};

module.exports = asyncHandler(createTaskHandler);
