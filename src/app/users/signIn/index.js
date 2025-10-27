const { LogicError } = require('../../../common/errors');
/**
 * Signin user
 * @param {integer} data
 * @param {String} data.email
 * @param {String} data.password
 */
module.exports =
  ({ securityService, User, validate }) =>
  async (data) => {
    const validatedData = await validate(data, {
      email: 'required|email',
      password: 'required',
    });

    // Find user
    const user = await User.findByMail(validatedData.email);

    if (!user || !(await securityService.isEqual(validatedData.password, user.password))) {
      throw new LogicError('Credenciales no válidas');
    }

    if (user.isDisabled()) {
      throw new LogicError('Usuario desactivado');
    }

    const token = securityService.generateToken({ id: user.id });

    return { token, user };
  };
