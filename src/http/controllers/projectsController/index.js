const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const createProjectHandler = require('./createProjectHandler');

router.post('/', jwtToUser, createProjectHandler);

module.exports = router;
