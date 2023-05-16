import Manga from '../models/Manga.js';

const is_property_of = async (req, res, next) => {

 try {
  
  const manga = await Manga.findOne({_id: req.body.manga_id, author_id: req.body.author_id});
    if (manga) {
      // Deja pasar la petición
      next();
    } else {
      // Responde con un error
      res.status(403).json({ 
        message: 'Este manga no es propiedad del autor.' 
      });
  }

  } catch (error) {
    return res.status(500)
    .json({ error: error.message });
  }
}

export default is_property_of;



