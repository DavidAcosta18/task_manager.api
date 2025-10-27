const { NotFoundError } = require('../common/errors');
const Base = require('./Base');

module.exports = ({ tasksRepository }) =>
  class Tasks extends Base {
    constructor(values) {
      super();
      this.setValues(values);
    }

    isDisabled() {
      return !this.isEnabled;
    }

    async update(data) {
      const updatedFields = await tasksRepository.update(this.id, data);
      this.setValues(updatedFields);
    }

    static async findOrFail(id) {
      const record = await tasksRepository.findById(id);
      if (!record) {
        throw new NotFoundError();
      }
      return new Tasks(record);
    }

    static async findByProject(projectId) {
      return tasksRepository.findByProject(projectId);
    }

    static async create(data) {
      const record = await tasksRepository.create(data);
      return new Tasks(record);
    }
  };
