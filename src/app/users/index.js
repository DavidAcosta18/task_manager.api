const { User } = require('../../models');
const { userRepository } = require('../../repositories');
const { randService, securityService, validatorService } = require('../../services');

const createUser = require('./createUser');
const listUsers = require('./listUsers');
const resetPassword = require('./resetPassword');
const signIn = require('./signIn');
const userFromToken = require('./userFromToken');

module.exports = {
  createUser: createUser({
    randService,
    securityService,
    User,
    validate: validatorService.validateForm,
  }),
  listUsers: listUsers({ userRepository }),
  resetPassword: resetPassword({ randService, securityService, User }),
  signIn: signIn({ securityService, User, validate: validatorService.validateForm }),
  userFromToken: userFromToken({ User, securityService }),
};
