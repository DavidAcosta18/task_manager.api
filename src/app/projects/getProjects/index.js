module.exports =
  ({ projectsRepository }) =>
  async (userId) => {
    return projectsRepository.findById(userId);
  };
