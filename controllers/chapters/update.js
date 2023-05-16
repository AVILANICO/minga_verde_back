import Chapter from "../../models/Chapter.js";

const update = async (req,res,next) => {
    try {
        let update = await Chapter.updateOne(
            {_id: req.params.id}, // objeto de busqueda de lo que se quiere modificar
            req.body              // objeto con la modificacion (modifica una, dos o todas las propiedades que envie el cliente)
        )
        if (update.modifiedCount ) {
            return res.status(200).json({
                success: true,
                message: 'updated',
                update
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Not found',
            })
        }

    } catch (error) {
        next(error);
    }
}

export default update;