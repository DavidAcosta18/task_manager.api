const setValues = require('./setValues');

module.exports = (constants) => {
  return {
    getAll: () => constants,
    getValues: () => Object.keys(constants).map((key) => constants[key].value),
    getString: () =>
      Object.keys(constants)
        .map((key) => constants[key].value)
        .join(','),
    getLabel: (value) => {
      const k = Object.keys(constants).find((key) => constants[key].value === value);
      return constants[k] ? constants[k].label : 'NO_CONSTANT_VALID';
    },
    ...setValues(constants),
  };
};
