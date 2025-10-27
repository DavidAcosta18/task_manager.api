const { createComments } = require('../../../app/comments');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const createCommentHandler = async (request, response) => {
  const result = await transaction(() => createComments(request.body));

  return response.handle(result);
};

module.exports = asyncHandler(createCommentHandler);
