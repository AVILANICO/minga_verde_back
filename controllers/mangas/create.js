import createHttpError from "http-errors";
import Manga from "../../models/Manga.js";

let create = async(req, res, next) => {
  try {
    let one = await new Manga(req.body)
    await one.save()
    return res.status(201).json({
        id: one._id,
        timestamps: one.createdAt
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export default create;
