const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const indexHandler = require('./indexHandler');
const signInHandler = require('./signInHandler');
const signUpHandler = require('./signUpHandler');
const resetPasswordHandler = require('./resetPasswordHandler');

router.get('/', jwtToUser, indexHandler);

router.post('/sign-up', signUpHandler);

router.put('/:id(\\d+)/password', jwtToUser, resetPasswordHandler);

router.post('/sign-in', signInHandler);

module.exports = router;
