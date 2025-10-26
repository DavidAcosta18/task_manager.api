module.exports =
  ({ validate, Projects }) =>
  async (data) => {
    const validatedData = await validate(data, {
      name: 'required|string|max:100',
      description: 'required|string|max:100',
      customColor: 'required|string|max:100',
      startDate: 'required|string|max:100',
      endDate: 'required|string|max:100|after:startDate',
      leaderId: 'required|integer',
    });

    return Projects.create({ ...validatedData, isActive: true });
  };
