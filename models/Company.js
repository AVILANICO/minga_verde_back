import mongoose from "mongoose";

let schema = new mongoose.Schema({
  name: {type: String, required: true},
  logo: {type: String, required: true},
  website: {type: String, required: true},
  descripction: {type: String, required: true},
  active: {type: Boolean, required: true},
  user_id:{
    type: mongoose.Types.ObjectId,
    ref: 'users',
    required: true
  }
},{
  timestamps: true
})
let collection = 'companies'

let Company = mongoose.model(schema, collection)
export default Company