import mongoose from "mongoose";

let schema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  photo: {type: String, required: true},
  role: {type: Number, required: true},
  is_online: {type: Boolean, required: true},
  is_verified:{type: Boolean, required: true},
  verifyde_code:{type: String, required: true}
},{
  timestamps: true
})

let collection = 'users' //debe ser SIEMPRE en plural xq es un conjunto de recursos, documentos, etc y en lo posible en minuscula
let User = mongoose.model(schema, collection)

export default User