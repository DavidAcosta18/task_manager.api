const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');

const createTaskHandler = require('./createTaskHandler');
const getProjectTaskHandler = require('./getProjectTaskHandler');
const updateTaskStatusHandler = require('./updateTaskStatusHandler');

router.post('/', jwtToUser, createTaskHandler);
router.get('/projects/:projectId', jwtToUser, getProjectTaskHandler);
router.patch('/', jwtToUser, updateTaskStatusHandler);

module.exports = router;
