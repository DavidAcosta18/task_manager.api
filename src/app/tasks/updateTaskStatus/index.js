const Unauthorized = require('../../../common/errors/UnauthorizedError');

async function isValidUser(ProjectMembers, userId, projectId) {
  const isMember = await ProjectMembers.findOne(projectId, userId);
  return !!isMember;
}

module.exports =
  ({ Tasks, validate, ProjectMembers }) =>
  async (data) => {
    await validate(data, {
      userId: 'required|integer',
      taskId: 'required|integer',
      status: 'in:TODO,IN_PROGRESS,DONE|required',
    });

    const task = await Tasks.findOrFail(data.taskId);
    if (!(await isValidUser(ProjectMembers, data.userId, task.projectId))) {
      throw new Unauthorized('You Are not allowed to update this task');
    }
    await task.update({ status: data.status });

    return task;
  };
