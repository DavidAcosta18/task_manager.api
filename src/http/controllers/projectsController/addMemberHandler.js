const { addMember } = require('../../../app/projects');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const addMemberHandler = async (request, response) => {
  const result = await transaction(() => addMember(request.body));

  return response.handle(result);
};

module.exports = asyncHandler(addMemberHandler);
