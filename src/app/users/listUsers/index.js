/**
 * Get list of users
 */
module.exports = ({ userRepository }) => async () => {
  // Find users
  const users = await userRepository.search();

  return users;
};
