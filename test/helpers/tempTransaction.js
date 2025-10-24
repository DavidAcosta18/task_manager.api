const { main } = require('../../src/common/connections');

module.exports = (testFn) =>
  main
    .transaction(async (t) => {
      await testFn();
      await t.rollback();
    })
    .catch((error) => {
      if (
        error.message !==
        'Transaction cannot be committed because it has been finished with state: rollback'
      ) {
        throw error;
      }
    });
