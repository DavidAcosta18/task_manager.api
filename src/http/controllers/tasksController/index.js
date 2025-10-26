const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const createTaskHandler = require('./createTaskHandler');

router.post('/', jwtToUser, createTaskHandler);

module.exports = router;
