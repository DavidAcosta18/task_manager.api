const { createProject } = require('../../../app/projects');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const createProjectHandler = async (request, response) => {
  const result = await transaction(() => createProject(request.body));

  return response.handle(result);
};

module.exports = asyncHandler(createProjectHandler);
