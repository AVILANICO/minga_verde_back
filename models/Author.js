import mongoose, {Schema, model, Types} from "mongoose";

let schema = new Schema({
  name: {type: String, required: true},
  last_name: {type: String, required: false},
  city: {type: String, required: true},
  country: {type: String, required: true},
  date: {type: Date}, // por defecto si no aclaro que es requererido es false
  photo: {type: String, required: true},
  active: {type: Boolean, required: true},
  user_id: {
    type: Types.ObjectId, //tipo de datos de mongoose para referenciar datos de una coleccion con datos de otra coleccion, este caso la coleccion de autores con la coleccion de usuarios.
    ref: 'users', //nombre de la coleccion con la cual se quiere referenciar el modelo
    required: true
  } 
},{
  timestamps: true
})

let collection = 'authors'

let Author = model(collection, schema)
export default Author