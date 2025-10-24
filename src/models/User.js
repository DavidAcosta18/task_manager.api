const { NotFoundError } = require('../common/errors');
const Base = require('./Base');

module.exports = ({ userRepository }) =>
  class User extends Base {
    constructor(values) {
      super();
      this.setValues(values);
    }

    isDisabled() {
      return !this.isEnabled;
    }

    async update(data) {
      const updatedFields = await userRepository.update(this.id, data);
      this.setValues(updatedFields);
    }

    // Find by id
    static async findOrFail(id) {
      const record = await userRepository.findById(id);
      if (!record) {
        throw new NotFoundError();
      }
      return new User(record);
    }

    // Find by email
    static async findByMail(email) {
      const record = await userRepository.findByMail(email);
      return record ? new User(record) : null;
    }

    // Create user
    static async create(data) {
      const record = await userRepository.create(data);
      return new User(record);
    }
  };
