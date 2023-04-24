import express from 'express'
import usersRouter from './users.js' 
import authorRouter from './authors.js'
import categoriesRouter from './categories.js'
import companiesRouter from './companies.js'
import chaptersRouter from './chapters.js'
import mangasRouter from './mangas.js'

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINGA API', subtitle: 'Endpoints of Minga' });
});

router.use('/auth', usersRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoriesRouter)
router.use('/companies', companiesRouter)
router.use('/chapters', chaptersRouter)
router.use('/mangas', mangasRouter)

export default router;
