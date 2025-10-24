const bcrypt = require('bcrypt');

module.exports = (text) => bcrypt.hash(text, 10);
