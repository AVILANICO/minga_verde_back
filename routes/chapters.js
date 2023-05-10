//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 

import { Router } from "express";
// import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/chapters.js";
import passport from "../middlewares/passport.js";
import get_chapters from "../controllers/chapters/get_chapters.js";

let router = Router()

router.post('/',passport.authenticate('jwt',{session:false}),validator(schema) ,create)
router.get('/', get_chapters)


export default router;