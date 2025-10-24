const nodemailer = require('nodemailer');
const { config } = require('../../common');

const mailConfig = config.get('services.mail');

/**
 * @param {object} data
 * @param {Array|String} data.mails E-mails directions array
 * @param {string} data.subject
 * @param {string} data.messageHtml
 * @param {string} data.messagePlain
 * @param {Array|String} data.cc
 * @param {Array|String} data.cco
 */
module.exports = async (data) => {
  const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.port === 465, // true for 465, false for other ports
    auth: {
      user: mailConfig.user,
      pass: mailConfig.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `"${mailConfig.username}" <${mailConfig.user}>`,
    to: data.mails,
    subject: data.subject,
    text: data.messagePlain,
    html: data.messageHtml,
    cc: data.cc,
    cco: data.cco,
  });
};
