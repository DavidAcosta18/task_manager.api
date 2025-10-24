const bcrypt = require('bcrypt');

module.exports = (text, hashed) => bcrypt.compare(text, hashed);
