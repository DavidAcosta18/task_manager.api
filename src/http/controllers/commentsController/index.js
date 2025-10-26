const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const createCommentHandler = require('./createCommentHandler');

router.post('/', jwtToUser, createCommentHandler);

module.exports = router;
