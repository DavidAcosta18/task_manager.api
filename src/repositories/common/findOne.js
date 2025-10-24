module.exports = (dbModel) => async (where) =>
  dbModel.findOne({
    where,
    raw: true,
  });
