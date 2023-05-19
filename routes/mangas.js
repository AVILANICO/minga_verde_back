import { Router } from "express";
import read from '../controllers/mangas/get_mangas.js'
import create from '../controllers/mangas/create.js';
import validator from '../middlewares/validator.js';
import { mangaCreate } from '../schemas/mangas.js';
import passport from '../middlewares/passport.js';
import get_one from "../controllers/mangas/get_one.js";
import finds_id from "../middlewares/finds_id.js";
import get_Me from "../controllers/mangas/get_me.js";
import update from "../controllers/mangas/update.js";
import destroy from "../controllers/mangas/destroy.js";
import is_active from "../middlewares/is_active.js";
import is_property_of from "../middlewares/is_property_of.js";
import mangaUpdate from "../schemas/mangaUpdate.js";

let router = Router()

router.get('/',passport.authenticate('jwt',{session:false}), read)
router.get('/me',passport.authenticate('jwt',{session:false}),finds_id, get_Me)
router.get('/:id', get_one)
// ":" es para darle cualquier nombre al parametro
router.post('/mangas', create)
router.post('/',passport.authenticate('jwt',{session:false}),validator(mangaCreate), create)
router.put('/:id', passport.authenticate('jwt',{session:false}), validator(mangaUpdate),finds_id, is_active, is_property_of, update)
router.delete('/:id', passport.authenticate('jwt',{session:false}), finds_id, is_active, is_property_of, destroy)

export default router;



