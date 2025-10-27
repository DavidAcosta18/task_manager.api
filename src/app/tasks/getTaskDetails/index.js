module.exports =
  ({ Tasks }) =>
  async (taskId) => {
    const task = await Tasks.findById(taskId);

    return task[0];
  };
