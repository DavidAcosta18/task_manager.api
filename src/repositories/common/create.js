module.exports = (dbModel) => async (data) => {
  const instance = await dbModel.create(data);
  return instance.toJSON();
};
