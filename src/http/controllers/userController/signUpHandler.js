const { transaction } = require('../../../common');
const { createUser } = require('../../../app/users');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */

const signUpHandler = async (request, response) => {
  const data = {
    email: request.body.email,
    password: request.body.password,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
  };

  const result = await transaction(() => createUser(data));

  return response.handle(result);
};

module.exports = asyncHandler(signUpHandler);
