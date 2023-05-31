import Manga from "../../models/Manga.js";
import Author from '../../models/Author.js'

let get_one= async(req,res,next)=>{
  try {
      let {id} = req.params
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 96b2055865d7bf034613ea708981944426487e06
      //el metodo find es como el filter de JS, siempre devuelve un array. Recibe un objeto con condiciones y los selectores
      let one = await Manga.findById(id,'-_id -createdAt -updatedAt -company_id  -__v')
      //el populate DECODIFICA la propiedad y me devuelve el objeto con los selectores pedidos.
      .populate('category_id','name -_id')
      .populate('author_id','name -_id')
    if(one){
      return res.status(200).json({ 
        succes:true,
        response: one
      })
    }
<<<<<<< HEAD
=======
=======
      let one = await Manga.findById(id,'-_id -createdAt -updatedAt -company_id  -__v')
      .populate('category_id','name -_id')
      .populate('author_id','name -_id')

  return res.status(200).json({
    succes:true,
    response: one
  }) 
>>>>>>> a76dcab429e7e3049128c248c8509948997b6e71
>>>>>>> 96b2055865d7bf034613ea708981944426487e06
  } catch (error) {
    next(error)
  }
}
export default get_one;
