const { NotFoundError } = require('../common/errors');
const Base = require('./Base');

module.exports = ({ projectsRepository }) =>
  class User extends Base {
    constructor(values) {
      super();
      this.setValues(values);
    }

    isDisabled() {
      return !this.isEnabled;
    }

    async update(data) {
      const updatedFields = await projectsRepository.update(this.id, data);
      this.setValues(updatedFields);
    }

    static async findOrFail(id) {
      const record = await projectsRepository.findById(id);
      if (!record) {
        throw new NotFoundError();
      }
      return new User(record);
    }

    static async create(data) {
      const record = await projectsRepository.create(data);
      return new User(record);
    }
  };
