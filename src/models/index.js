const { userRepository } = require('../repositories');
const User = require('./User');

module.exports = {
  User: User({ userRepository }),
};
