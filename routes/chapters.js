//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
// import read from "../controllers/chapters/read.js"
// import controllers from "../controllers/chapters/read.js"
// import controllers from "../controllers/chapters/create.js"
import { Router } from "express";
import create from "../controllers/chapters/create.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/chapters.js";
import passport from "../middlewares/passport.js";
import get_chapters from "../controllers/chapters/get_chapters.js";
import get_one from "../controllers/chapters/get_one.js";

let router = Router()

router.post('/',passport.authenticate('jwt',{session:false}),validator(schema) ,create)
router.get('/:id', read)
router.get('/', get_chapters)
router.get('/:id',passport.authenticate('jwt',{session:false}), get_one)

export default router;
