import Manga from '../models/Manga';

const is_property_of = async (req, res, next) => {
  const manga = await Manga.findOne({
    _id: req.body.manga_id,
    author_id: req.body.author_id
  });

  if (manga) {
    // Deja pasar la petición
    next();
  } else {
    // Responde con un error
    res.status(403).json({ message: 'Este manga no es propiedad del autor.' });
  }
}

export default is_property_of;