//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
// import controllers from "../controllers/chapters/create.js"
// import controllers from "../controllers/chapters/read.js"
import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/chapters.js";

let router = Router()

router.post('/',validator(schema),create)
router.get('/:id', read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))

export default router;