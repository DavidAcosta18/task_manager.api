const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');

const createTaskHandler = require('./createTaskHandler');
const getProjectTaskHandler = require('./getProjectTaskHandler');
const getTaskDetailsHandler = require('./getTaskDetailsHandler');
const updateTaskStatusHandler = require('./updateTaskStatusHandler');

router.post('/', jwtToUser, createTaskHandler);
router.get('/projects/:projectId', jwtToUser, getProjectTaskHandler);
router.patch('/', jwtToUser, updateTaskStatusHandler);
router.get('/:taskId', jwtToUser, getTaskDetailsHandler);

module.exports = router;
