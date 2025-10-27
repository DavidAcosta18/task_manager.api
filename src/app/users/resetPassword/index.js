/**
 * Reset password
 * @param {integer} userId
 */
module.exports =
  ({ randService, securityService, User }) =>
  async (userId) => {
    // Find user
    const user = await User.findOrFail(userId);

    // Generate and encrypt password
    const plainPassword = randService.generatePassword();
    const password = await securityService.encrypt(plainPassword);

    // Save updates
    await user.update({ password });

    return {
      id: user.id,
      password: plainPassword,
    };
  };
