// import multer from "multer";

// function uploadChapter() {
//   const storage = multer.memoryStorage({
//     destination: './public/files',
//     filename: function (req, file, cb) {
//       let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
//       let filename = Date.now() + extension;
//       cb(null, filename);
//     }
//   });

//   const upload = multer({ storage }).array('chapter_photo');
//   return upload;
// }

// export default uploadChapter