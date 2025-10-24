const jsonwebtoken = require('jsonwebtoken');
const { UnauthorizedError } = require('../../common/errors');
const { config } = require('../../common');

const SECRET_KEY = config.get('app.key');

module.exports = (token) => {
  let payload;
  try {
    payload = jsonwebtoken.verify(token, SECRET_KEY);
  } catch (e) {
    throw new UnauthorizedError('Token expirado o inválido');
  }

  return payload;
};
