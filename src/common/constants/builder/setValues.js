module.exports = (constants) =>
  Object.keys(constants).reduce((stack, item) => {
    // eslint-disable-next-line no-param-reassign
    stack[item] = constants[item].value;
    return stack;
  }, {});
