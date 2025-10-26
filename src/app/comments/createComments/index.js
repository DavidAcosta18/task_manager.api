/**
 * Register user
 * @param {object} data
 * @param {String} data.email
 */
module.exports =
  ({ Comments, validate }) =>
  async (data) => {
    const validatedData = await validate(data, {
      content: 'required|string',
      taskId: 'required|integer',
      userId: 'required|integer',
    });

    const comment = await Comments.create({
      ...validatedData,
    });

    return { comment };
  };
