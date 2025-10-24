const Validator = require('validatorjs');
const uniqueField = require('./customRules/uniqueField');

Validator.useLang('es');

// Custom rules
Validator.registerAsync('unique', uniqueField, 'Ya existe');

module.exports = Validator;
