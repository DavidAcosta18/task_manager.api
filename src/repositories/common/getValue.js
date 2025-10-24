const { LogicError } = require('../../common/errors');

module.exports = (dbModel) => async (id, field) => {
  const record = await dbModel.findOne({
    attributes: [field],
    where: { id },
    raw: true,
  });

  if (!record) {
    throw new LogicError('Record not found');
  }

  return record[field];
};
