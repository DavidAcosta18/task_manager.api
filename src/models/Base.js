module.exports = class Base {
  setValues(values) {
    Object.keys(values).forEach((key) => {
      this[key] = values[key];
    });
  }
};
