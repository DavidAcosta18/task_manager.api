const { main } = require('./connections');

/**
 * @param {function} caseUse Function definition to execute in transaction
 *
 * Example use A:
 * const result = await transaction(() => listUsers());
 *
 * Example use B:
 * const result = await transaction(() => {
 *   return listUsers();
 * });
 *
 * Example use C:
 * const result = await transaction(async () => {
 *   const data = await listUsers();
 *   return data;
 * });
 */
module.exports = (caseUse) => main.transaction(caseUse);
