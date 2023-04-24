//la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo
//utilizo la sintaxis de try/catch para intentar algo y catchear los errores
//utilizo el metodo find para buscar los recursos del modelo
//configuro la respuesta que le tengo que enviar al cliente (front) 

import Chapter from '../../models/Chapter.js'

let read = async(req, res, next) => {
  try{
    let all = await Chapter.find()
    return res.status(200)
        .json({
          chapters: all
        })
  }catch(error){
    console.log(error);
    return res.status(400)
        .json({
          error: "Ocurrió un error wachin!"
        })
  }
}

  export default read;