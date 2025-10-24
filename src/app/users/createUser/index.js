const { default: UserRoles } = require('../../../common/constants/userRole');

/**
 * Register user
 * @param {object} data
 * @param {String} data.email
 */
module.exports =
  ({ securityService, User, validate }) =>
  async (data) => {
    const validatedData = await validate(data, {
      email: 'required|email|unique:users,email',
      password: 'required|string',
      firstName: 'required|string',
      lastName: 'required|string',
    });
    const encryptPassword = await securityService.encrypt(validatedData.password);

    const user = await User.create({
      ...validatedData,
      password: encryptPassword,
      role: UserRoles.MEMBER,
    });

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isEnabled: user.isEnabled,
    };
  };
