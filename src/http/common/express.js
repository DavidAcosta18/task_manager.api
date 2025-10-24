const express = require('express');

express.response.handle = function handle(result) {
  if (result.constructor.name === 'FileSelfGenerated') {
    result.getHeaders().map((header) => this.setHeader(header.key, header.value));

    if (result.stream) {
      return result.stream.pipe(this);
    }

    return this.end(result.buffer);
  }
  if (result.constructor.name === 'String') {
    return this.send(result);
  }

  if (result.REDIRECT) {
    return this.redirect(result.REDIRECT);
  }

  return this.json(result);
};

module.exports = express;
