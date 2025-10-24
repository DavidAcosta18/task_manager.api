module.exports = (dbModel) => async (id, data) => {
  await dbModel.update(data, { where: { id } });
  return data;
};
