const { UnauthorizedError } = require('../../../common/errors');

/**
 * Validate token to user
 * @param {string} token
 */
module.exports = ({ User, securityService }) => async (token) => {
  const { id } = securityService.decodeToken(token);

  // Find user
  const user = await User.findOrFail(id);

  if (user.isDisabled()) {
    throw new UnauthorizedError('Usuario desactivado');
  }

  return user;
};
