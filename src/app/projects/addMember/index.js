module.exports =
  ({ validate, ProjectMembers }) =>
  async (data) => {
    const validatedData = await validate(data, {
      userId: 'required|integer',
      projectId: 'required|integer',
      isLeader: 'required|boolean',
    });

    return ProjectMembers.create({ ...validatedData });
  };
