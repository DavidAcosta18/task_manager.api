const router = require('express').Router();

router.get('/', (req, res) => res.json({ app: '', isUp: true }));

router.use('/users', require('./controllers/userController'));
router.use('/projects', require('./controllers/projectsController'));

module.exports = router;
