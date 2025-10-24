require('dotenv').config();

const configuration = {
  app: {
    key: process.env.APP_KEY,
    domain: process.env.DOMAIN,
    timezone: process.env.TZ,
  },
  api: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    database: `${process.env.DB_NAME}${process.env.NODE_ENV === 'test' ? '_tests' : ''}`,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    log: process.env.DB_LOG.toUpperCase() !== 'FALSE',
  },
  services: {
    captcha: {
      secret: process.env.CAPTCHA_SECRET,
    },
    jwt: {
      expiry_time: '12h',
    },
    mail: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      username: process.env.MAIL_USERNAME,
      user: process.env.MAIL_USER,
      password: process.env.MAIL_PASSWORD,
    },
  },
};

module.exports = configuration;
