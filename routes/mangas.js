import { Router } from "express";
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js';
import validator from '../middlewares/validator.js';
import { mangaCreate } from '../schemas/mangas.js';
import passport from '../middlewares/passport.js';
import get_one from "../controllers/mangas/get_one.js";

let router = Router()

router.get('/', read)
router.get('/:id', get_one)
router.post('/mangas', create)
router.post('/',passport.authenticate('jwt',{session:false}),validator(mangaCreate), create)

export default router;
