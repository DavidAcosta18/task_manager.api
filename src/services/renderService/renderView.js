const pug = require('pug');

module.exports = (view, data) => pug.renderFile(`${__dirname}/../../views/${view}/index.pug`, data);
