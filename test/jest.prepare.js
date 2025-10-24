const { execSync } = require('child_process');

const config = require('../src/common/config');

// Disable log database
config.set('db.log', false);

// refresh testing database
execSync('yarn db-refresh', { stdio: 'inherit' });
