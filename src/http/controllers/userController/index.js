const router = require('express').Router();
const { jwtToUser } = require('../../middlewares');
const indexHandler = require('./indexHandler');
const signInHandler = require('./signInHandler');
const signUpHandler = require('./signUpHandler');
const resetPasswordHandler = require('./resetPasswordHandler');
const getMeHandler = require('./getMeHandler');

router.get('/', jwtToUser, indexHandler);

router.get('/me', jwtToUser, getMeHandler);

router.post('/sign-up', signUpHandler);

router.put('/:id(\\d+)/password', jwtToUser, resetPasswordHandler);

router.post('/sign-in', signInHandler);

module.exports = router;
