let admin = require("firebase-admin");
let serviceAccount = require("../firebase-key.json");
const { date } = require("joi");

const BUCKET = "minga-avila.appspot.com"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if(!req.file) return next();

  const imagen = req.file
  const nameImagen = Date.now() + "." + imagen.originalname.split('.').pop();

  const file = bucket.file(nameImagen);

  const stream = file.createWriteStream({
    metadata: {
      contentType: imagen.mimetype,
    }
  })

  stream.on("error", (e) => {
    console.error(e);
  })

  stream.on("finish", async () => {
    //retornar un archivo publico
    await file.makePublic();

    //obtener una url publica
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameImagen}`
    
    next();
  })

  stream.end(imagen.buffer);
}

module.exports = uploadImage;