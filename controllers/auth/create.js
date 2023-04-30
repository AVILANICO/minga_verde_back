import createHttpError from "http-errors";
import crypto from 'crypto'
import User from "../../models/User.js";


let create = async(req, res, next) => {
  try {
    req.body.role = 0;
    req.body.is_online = false;
    req.body.is_verified = false;
    req.body.verify_code = "codigo";
    
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

