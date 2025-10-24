module.exports = (dbModel) => async (where) =>
  dbModel.destroy({
    where,
  });
