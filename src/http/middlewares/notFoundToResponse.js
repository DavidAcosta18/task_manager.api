const { statusCodes } = require('../common');

function notFoundToResponse(request, response) {
  response.status(statusCodes.NOT_FOUND).json({ error: 'Recurso no encontrado' });
}

module.exports = notFoundToResponse;
