/**
 * Register Task
 * @param {object} data
 * @param {String} data.email
 */
module.exports =
  ({ Tasks, validate }) =>
  async (data) => {
    const validatedData = await validate(data, {
      title: 'required|string',
      description: 'required|string',
      priority: 'required|in:LOW,MEDIUM,HIGH',
      dueDate: 'required|date',
      projectId: 'required|integer',
      status: 'in:TODO,IN_PROGRESS,DONE|required',
      assigneeId: 'integer|required',
      createdBy: 'integer|required',
    });

    const task = await Tasks.create({
      ...validatedData,
    });

    return { task };
  };
