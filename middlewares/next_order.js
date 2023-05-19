
// import Manga from '../models/Manga.js'

// let nextOrder = async(req, res, next) => {

//     if (req.body.order) {                            // Si el cuerpo de la solicitud incluye un valor para la propiedad "order", pasamos la solicitud al siguiente middleware.
//         next();

//     } else {

//     try {
//         const lastOrder = await Manga.findOne({manga_id: req.body.mangaId})
//         // .sort({ order: -1 })
//         // .limit(1)
//         // .select("order");
//         req.body.order = lastOrder.order + 1;         // Incrementamos el valor del último orden en 1 y asignamos este nuevo valor a la propiedad "order" del cuerpo de la solicitud.
//         next();

//     } catch (error) {
//         next(error);

//     }
//     }
// }

// export default nextOrder
