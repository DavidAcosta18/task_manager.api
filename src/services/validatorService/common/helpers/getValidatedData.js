module.exports = (validator) => {
  const validatedData = Object.keys(validator.rules).reduce((obj, field) => {
    // eslint-disable-next-line no-param-reassign
    obj[field] = validator.input[field];
    return obj;
  }, {});

  return validatedData;
};
