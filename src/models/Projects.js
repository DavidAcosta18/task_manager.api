const { NotFoundError } = require('../common/errors');
const Base = require('./Base');

module.exports = ({ projectsRepository }) =>
  class Projects extends Base {
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
      return new Projects(record);
    }

    static async findById(id, failNotFound = false) {
      const record = await projectsRepository.find(id);
      if (!record && failNotFound) {
        throw new NotFoundError();
      }
      return new Projects(record);
    }

    static async create(data) {
      const record = await projectsRepository.create(data);
      return new Projects(record);
    }
  };
