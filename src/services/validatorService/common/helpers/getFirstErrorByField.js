module.exports = (validator) => {
  const errors = validator.errors.all();
  Object.keys(errors).forEach((key) => {
    const keyIndex = 0;
    errors[key] = errors[key][keyIndex];
  });

  return errors;
};
