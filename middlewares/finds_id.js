// const Author = require('../models/author');
// const Company = require('../models/company');

// const findsIdMiddleware = async (req, res, next) => {
//   try {
//     const userId = req.user.id; // obtener el id del usuario logueado
//     let authorId = null;
//     let companyd = null;

//     // buscar si el usuario logueado es un autor
//     const author = await Author.findOne({ user: userId });
//     if (author) {
//       authorId = author._id;
//     }

//     // buscar si el usuario logueado es una empresa
//     const company = await Company.findOne({ user: userId });
//     if (company) {
//       companyId = company._id;
//     }

//     // si se encontró un autor, agregar su id en la propiedad author_id del objeto req.body
//     if (authorId) {
//       req.body.author_id = authorId;
//     }

//     // si se encontró una empresa, agregar su id en la propiedad company_id del objeto req.body
//     if (companyId) {
//       req.body.company_id = companyId;
//     }

//     // si no se encontró ni un autor ni una empresa, retornar un error
//     if (!authorId && !companyId) {
//       return res.status(404).json({ message: 'Autor o empresa no encontrado' });
//     }

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error interno del servidor' });
//   }
// };

// module.exports = findsIdMiddleware;