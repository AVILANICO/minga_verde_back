import Manga from "../../models/Manga.js";

let update =async(req,res,next)=>{
    try {
        let update = await Manga.findByIdAndUpdate(req.params.id, req.body, {new:true})
          //aca podria agregar selector para traer unicamente lo correspondiente
          return res.status(200).json({
            success:true,
            message: 'updated',
            update
        })
    } catch (error) {
      next(error)
    }
}
export default update
