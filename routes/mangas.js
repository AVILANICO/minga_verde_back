//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js';
import validator from '../middlewares/validator.js';
import { mangaCreate } from '../schemas/mangas.js';
import titleExistsCreate from "../middlewares/exist_title.js";

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))
router.post('/',validator(mangaCreate), titleExistsCreate, create)

export default router;