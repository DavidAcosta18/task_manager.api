const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const createProjectHandler = require('./createProjectHandler');
const addMemberHandler = require('./addMemberHandler');

router.post('/', jwtToUser, createProjectHandler);
router.post('/members', jwtToUser, addMemberHandler);

module.exports = router;
