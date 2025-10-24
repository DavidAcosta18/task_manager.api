const { ValidationError, LogicError } = require('../../common/errors');
const { getFirstErrorByField, getValidatedData, getFirstError } = require('./common/helpers');
const { Validator, messagesDefault, messagesDefaultForm } = require('./common');

const getFormErrors = (validation) =>
  new ValidationError('Campos no válidos', getFirstErrorByField(validation));

const getError = (validation) => new LogicError(getFirstError(validation));

const validateCreator = (isForm) => {
  const throwError = isForm ? getFormErrors : getError;
  const messagesPredefined = isForm ? messagesDefaultForm : messagesDefault;

  return function validate(data, rules, messages = {}, fieldNames) {
    Validator.setMessages('es', Object.assign(Validator.getMessages('es'), messagesPredefined));

    const validation = new Validator(data, rules, messages);

    if (fieldNames) {
      validation.setAttributeNames(fieldNames);
    }

    if (validation.hasAsync) {
      return new Promise((resolve, reject) => {
        validation.checkAsync(
          () => resolve(getValidatedData(validation)),
          () => reject(throwError(validation)),
        );
      });
    }

    if (validation.fails()) {
      throw throwError(validation);
    }

    return getValidatedData(validation);
  };
};

module.exports = validateCreator;
