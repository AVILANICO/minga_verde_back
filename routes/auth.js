import express from 'express';
import create from '../controllers/auth/create.js';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', create)

export default router;
