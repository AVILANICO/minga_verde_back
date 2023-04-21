import mongoose from "mongoose";

let schema = new mongoose.Schema({
  author_id:{
    type: mongoose.Types.ObjectId,
    ref: 'authores'
  },
  company_id:{
    type: mongoose.Types.ObjectId,
    ref: 'companies'
  },
  title: {type: String, required: true},
  cover_photo: {type: String, required: true},
  description: {type: String, required: true},
  category_id:{
    type: mongoose.Types.ObjectId,
    ref: 'categories',
    required: true
  }
},{
  timestamps: true
})

let collection = 'mangas'

let Manga = mongoose.model(collection, schema)
export default Manga