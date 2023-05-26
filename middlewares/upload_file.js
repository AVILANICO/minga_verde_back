import multer from "multer";

function uploadFile() {
  const storage = multer.memoryStorage({
    destination: './public/files',
    filename: function (req, file, cb) {
      let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
      let filename = Date.now() + extension;
      cb(null, filename);
    }
  });

  const upload = multer({ storage, 
    limits:{fileSize: 100000000},
    fileFilter: function(req, file, cb) {
      let type = file.mimetype.startsWith('image/');
      type?cb(null, true):cb(new Error ('No es un archivo de tipo imagen'))
      }
    }
  ).single('photo');
  return upload;
}

export default uploadFile



// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

// export const __filename = fileURLToPath(import.meta.url)
// export const __dirname = path.dirname(__filename)

// function uploadFile() {
//   const storage = multer.memoryStorage({
//     destination: (req, res, cb) => {
//       const filePath = path.resolve(__dirname, '../public/files')
//       cb(null, filePath)
//     },
//     filename: (req, file, cb) => {
//       let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
//       let filename = Date.now() + extension;
//       cb(null, filename);

//     }
//   })

//   const upload = multer({ storage, 
//     limits:{fileSize: 10000000},
//     fileFilter: function(req, file, cb) {
//       let type = file.mimetype.startsWith('image/');
//       type?cb(null, true):cb(new Error ('No es un archivo de tipo imagen'))
//       }
//     }
//   ).single('photo');
//   return upload;
// }

// export default uploadFile;
