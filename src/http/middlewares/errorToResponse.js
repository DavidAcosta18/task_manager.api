const {
  LogicError,
  ValidationError,
  NotFoundError,
  UnauthorizedError,
} = require('../../common/errors');
const { statusCodes } = require('../common');

// eslint-disable-next-line no-unused-vars
function errorToResponse(error, request, response, next) {
  if (error instanceof ValidationError) {
    return response.status(statusCodes.FORBIDDEN).json({ validation: error.getErrors() });
  }

  let STATUS_CODE = statusCodes.INTERNAL_SERVER_ERROR;
  let ERROR_MESSAGE = 'Ocurrió un error';

  if (error instanceof LogicError) {
    STATUS_CODE = statusCodes.FORBIDDEN;
    ERROR_MESSAGE = error.message;
  } else if (error instanceof NotFoundError) {
    STATUS_CODE = statusCodes.NOT_FOUND;
    ERROR_MESSAGE = error.message || 'Recurso no encontrado';
  } else if (error instanceof UnauthorizedError) {
    STATUS_CODE = statusCodes.UNAUTHORIZED;
    ERROR_MESSAGE = error.message || 'Acceso no autorizado';
  } else {
    // eslint-disable-next-line no-console
    console.error('=> ERROR\n', error);
  }

  return response.status(STATUS_CODE).json({ error: ERROR_MESSAGE });
}

module.exports = errorToResponse;
