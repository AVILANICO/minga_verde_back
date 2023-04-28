import createHttpError from "http-errors";
import User from "../../models/User.js";

let create = async(req, res, next) => {
  try {
    let one = new User(req.body)
    await one.save()
    return res.status(201).json({
      user: one.email,
      success: true,
      timestamps: one.createdAt  
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export default create;
