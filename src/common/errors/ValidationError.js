class ValidationError extends Error {
  constructor(message, errors = undefined) {
    super(message);
    this.errors = errors;
    this.name = this.constructor.name;
  }

  getErrors() {
    return this.errors;
  }

  toJSON() {
    return {
      message: this.message,
      errors: this.errors,
    };
  }
}

module.exports = ValidationError;
