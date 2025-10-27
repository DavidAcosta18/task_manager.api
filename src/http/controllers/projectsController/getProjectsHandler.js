const { getProjects } = require('../../../app/projects');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const getProjectsHandler = async (request, response) => {
  const result = await transaction(() => getProjects(request.user.id));

  return response.handle(result);
};

module.exports = asyncHandler(getProjectsHandler);
