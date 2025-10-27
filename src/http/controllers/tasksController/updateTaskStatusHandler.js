const { updateTaskStatus } = require('../../../app/tasks');
const { transaction } = require('../../../common');
const { asyncHandler } = require('../../common');

/**
 * Http handler to store visit
 * @param {express.request} request
 * @param {express.response} response
 */

const updateStatusHandler = async (request, response) => {
  const result = await transaction(() =>
    updateTaskStatus({
      status: request.body.status,
      taskId: request.body.taskId,
      userId: request.user.id,
    }),
  );

  return response.handle(result);
};

module.exports = asyncHandler(updateStatusHandler);
