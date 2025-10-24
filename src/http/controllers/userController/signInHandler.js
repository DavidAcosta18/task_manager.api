const { transaction } = require('../../../common');
const { signIn } = require('../../../app/users');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */
const signInHandler = async (request, response) => {
  const data = {
    email: request.body.email,
    password: request.body.password,
  };

  const result = await transaction(() => signIn(data));

  return response.handle(result);
};

module.exports = asyncHandler(signInHandler);
