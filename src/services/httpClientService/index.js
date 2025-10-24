const request = require('./request');

module.exports = {
  get: request('get'),
  post: request('post'),
  put: request('put'),
};
