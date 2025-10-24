const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const indexHandler = require('./indexHandler');
const signInHandler = require('./signInHandler');
const storeHandler = require('./storeHandler');
const resetPasswordHandler = require('./resetPasswordHandler');

router.get('/', jwtToUser, indexHandler);

router.post('/', jwtToUser, storeHandler);

router.put('/:id(\\d+)/password', jwtToUser, resetPasswordHandler);

router.post('/sign-in', signInHandler);

module.exports = router;
