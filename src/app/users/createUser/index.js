/**
 * Register user
 * @param {object} data
 * @param {String} data.email
 */
module.exports = ({ randService, securityService, User, validate }) => async (data) => {
  // Validate data
  const validatedData = await validate(data, {
    email: 'required|email|unique:users,email',
  });

  // Generate and encrypt password
  const plainPassword = randService.generatePassword();
  const password = await securityService.encrypt(plainPassword);

  // Create user
  const user = await User.create({ password, ...validatedData });

  return {
    id: user.id,
    email: user.email,
    password: plainPassword,
  };
};
