module.exports = (validator) => {
  const firstAttribute = Object.keys(validator.errors.all()).shift();
  return validator.errors.first(firstAttribute);
};
