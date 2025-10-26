const { NotFoundError } = require('../common/errors');
const Base = require('./Base');

module.exports = ({ commentsRepository }) =>
  class Comments extends Base {
    constructor(values) {
      super();
      this.setValues(values);
    }

    isDisabled() {
      return !this.isEnabled;
    }

    async update(data) {
      const updatedFields = await commentsRepository.update(this.id, data);
      this.setValues(updatedFields);
    }

    static async findOrFail(id) {
      const record = await commentsRepository.findById(id);
      if (!record) {
        throw new NotFoundError();
      }
      return new Comments(record);
    }

    static async create(data) {
      const record = await commentsRepository.create(data);
      return new Comments(record);
    }
  };
