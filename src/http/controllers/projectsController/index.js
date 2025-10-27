const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const createProjectHandler = require('./createProjectHandler');
const addMemberHandler = require('./addMemberHandler');
const getProjectsHandler = require('./getProjectsHandler');

router.post('/', jwtToUser, createProjectHandler);
router.post('/members', jwtToUser, addMemberHandler);
router.get('/', jwtToUser, getProjectsHandler);

module.exports = router;
