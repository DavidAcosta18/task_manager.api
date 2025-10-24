const pdf = require('html-pdf');
const FileSelfGenerated = require('../common/FileSelfGenerated');
const defaultConfig = require('./defaultConfig');

/**
 * @param {String} html
 */
module.exports = (filename, html, config = {}, forceDownload = false) =>
  new Promise((resolve, reject) => {
    pdf.create(html, Object.assign(defaultConfig, config)).toStream((err, stream) => {
      if (err) {
        return reject(err);
      }

      const file = new FileSelfGenerated({
        filename: `${filename}.pdf`,
        stream,
        forceDownload,
        mime: 'application/pdf',
      });

      return resolve(file);
    });
  });
