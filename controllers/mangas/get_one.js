import Manga from "../../models/Manga.js";
import Author from '../../models/Author.js'

let get_one= async(req,res,next)=>{
  try {
      let {id} = req.params
<<<<<<< HEAD
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
=======
      //el metodo find es como el filter de JS, siempre devuelve un array. Recibe un objeto con condiciones y los selectores
>>>>>>> be631e3be3f0591393bb420542eeaed44a0b09cd
      let one = await Manga.findById(id,'-_id -createdAt -updatedAt -company_id  -__v')
      //el populate DECODIFICA la propiedad y me devuelve el objeto con los selectores pedidos.
      .populate('category_id','name -_id')
      .populate('author_id','name -_id')
<<<<<<< HEAD

  return res.status(200).json({
    succes:true,
    response: one
  }) 
>>>>>>> a76dcab429e7e3049128c248c8509948997b6e71
>>>>>>> 96b2055865d7bf034613ea708981944426487e06
=======
    if(one){
      return res.status(200).json({ 
        succes:true,
        response: one
      })
    }
>>>>>>> be631e3be3f0591393bb420542eeaed44a0b09cd
  } catch (error) {
    next(error)
  }
}
export default get_one;
