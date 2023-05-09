//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
// import controllers from "../controllers/chapters/read.js"
// import controllers from "../controllers/chapters/create.js"
import { Router } from "express";
import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/chapters.js";
import passport from "../middlewares/passport.js";
import get_one from "../controllers/chapters/get_one.js";

let router = Router()

router.post('/',passport.authenticate('jwt',{session:false}),validator(schema) ,create)
router.get('/:id',get_one)
router.get('/:id',read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))

export default router;