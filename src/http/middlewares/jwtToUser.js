const { userFromToken } = require('../../app/users');
const { asyncHandler } = require('../common');

const jwtToUser = async (request, response, next) => {
  let token = (request.headers.authorization || '').split(/\s+/)[1];

  if (!token) {
    token = request.query.token;
  }

  const user = await userFromToken(token);

  Object.assign(request, { user });

  return next();
};

module.exports = asyncHandler(jwtToUser);
