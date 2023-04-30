import express from 'express';
import create from '../controllers/auth/create.js';

import validator from '../middlewares/validator.js';
import { userCreateSignUp } from '../schemas/users.js';
import accountExistsSignUp from '../middlewares/accountSingUp.js';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', validator(userCreateSignUp), accountExistsSignUp, create)

export default router;

