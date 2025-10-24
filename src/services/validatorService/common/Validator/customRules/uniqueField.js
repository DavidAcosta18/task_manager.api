const { connection } = require('../../../../../common');

module.exports = async (value, attribute, req, passes) => {
  const replacements = { value };

  const [table, column, pkValue = null, pkName = 'id'] = attribute.split(',');

  let query = `SELECT 1 FROM ${table} WHERE ${column} = :value`;

  if (pkValue) {
    query += ` AND ${pkName} != :pkValue`;
    replacements.pkValue = pkValue;
  }

  query += ' LIMIT 1';

  const result = await connection.query(query, {
    replacements,
    type: connection.QueryTypes.SELECT,
  });

  // if there's no results, the field is unique.
  passes(result.length === 0);
};
