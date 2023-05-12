import { Router } from "express";
import read from '../controllers/mangas/get_mangas.js'
import create from '../controllers/mangas/create.js';
import validator from '../middlewares/validator.js';
import { mangaCreate } from '../schemas/mangas.js';
import passport from '../middlewares/passport.js';
import get_one from "../controllers/mangas/get_one.js";

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/',passport.authenticate('jwt',{session:false}), read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))
router.get('/:id', get_one)
router.post('/mangas', create)
router.post('/',passport.authenticate('jwt',{session:false}),validator(mangaCreate), create)

export default router;
