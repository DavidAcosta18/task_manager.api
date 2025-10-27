module.exports =
  ({ Tasks }) =>
  async (projectId) => {
    const tasks = await Tasks.findByProject(projectId);

    return { tasks };
  };
