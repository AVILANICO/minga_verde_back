import express from 'express';
import register from '../controllers/auth/register.js';
import signin from '../controllers/auth/signin.js';
import signout from '../controllers/auth/signout.js';
import validator from '../middlewares/validator.js';
import { userCreateSignUp, userCreateSignIn } from '../schemas/users.js';
import accountExistsSignUp from '../middlewares/accountSignUp.js';
import accountExistsSignIn from '../middlewares/accountSignIn.js';
import accountHasBeenVerified from '../middlewares/isVerified.js';
import passwordIsOk from '../middlewares/passIsOk.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { 
  res.send('respond with a resource');
});

router.post('/register', validator(userCreateSignUp), accountExistsSignUp, register)
router.post('/signin', validator(userCreateSignIn), accountExistsSignIn, accountHasBeenVerified, passwordIsOk, signin)
router.post('/signout', passport.authenticate('jwt', {session: false}), signout)

export default router;

