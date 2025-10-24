const router = require('express').Router();

router.get('/', (req, res) => res.json({ app: '', isUp: true }));

router.use('/users', require('./controllers/userController'));

module.exports = router;
