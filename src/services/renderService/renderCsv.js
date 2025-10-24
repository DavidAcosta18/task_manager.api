const { Readable } = require('stream');
const { Parser } = require('json2csv');
const FileSelfGenerated = require('./common/FileSelfGenerated');

/**
 * @param {Object} config
 * @param {Array} config.fields
 * @param {Array} data
 */
module.exports = (filename, { fields }, data, forceDownload = true) => {
  const json2csvParser = new Parser({ fields, delimiter: ';', withBOM: true });
  const csvText = json2csvParser.parse(data);

  const buffer = Buffer.from(csvText);
  const readable = new Readable();
  // eslint-disable-next-line no-underscore-dangle
  readable._read = () => {};
  readable.push(buffer);
  readable.push(null);

  return new FileSelfGenerated({
    stream: readable,
    forceDownload,
    filename: `${filename}.csv`,
    mime: 'text/csv',
  });
};
