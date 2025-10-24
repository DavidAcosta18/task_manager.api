const jsonwebtoken = require('jsonwebtoken');
const { config } = require('../../common');

const SECRET_KEY = config.get('app.key');
const { expiry_time: EXPIRY_TIME } = config.get('services.jwt');

module.exports = (payload) => {
  return jsonwebtoken.sign(payload, SECRET_KEY, { expiresIn: EXPIRY_TIME });
};
