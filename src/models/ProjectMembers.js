const { NotFoundError } = require('../common/errors');
const Base = require('./Base');

module.exports = ({ projectMembersRepository }) =>
  class ProjectMembers extends Base {
    constructor(values) {
      super();
      this.setValues(values);
    }

    isDisabled() {
      return !this.isEnabled;
    }

    async update(data) {
      const updatedFields = await projectMembersRepository.update(this.id, data);
      this.setValues(updatedFields);
    }

    static async findOrFail(id) {
      const record = await projectMembersRepository.findById(id);
      if (!record) {
        throw new NotFoundError();
      }
      return new ProjectMembers(record);
    }

    static async create(data) {
      const record = await projectMembersRepository.create(data);
      return new ProjectMembers(record);
    }
  };
