import Chapter from "../../models/Chapter.js";

const update = async (req,res,next) => {
    let select = req.body.key
    let value = req.body.value
    try {
        let update = await Chapter.findOneAndUpdate(
            {_id: req.params.id}, // objeto de busqueda de lo que se quiere modificar
            {[select]:value },            // objeto con la modificacion (modifica una, dos o todas las propiedades que envie el cliente)
            {new:true} 
        )
        if (update !== null) {
            return res.status(200).json({
                success: true,
              message: 'Updated',
              update
            });
          } else {
            return res.status(404).json({
              success: false,
              message: 'Not found'
            });
          }

    } catch (error) {
        next(error);
    }
}

export default update;