const router = require('express').Router();

router.get('/', (req, res) => res.json({ app: '', isUp: true }));

router.use('/users', require('./controllers/userController'));
router.use('/projects', require('./controllers/projectsController'));
router.use('/tasks', require('./controllers/tasksController'));
router.use('/comments', require('./controllers/commentsController'));

module.exports = router;
