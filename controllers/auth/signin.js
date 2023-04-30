import User from "../../models/User.js";

let signin = async(req, res, next) => {
  try {
    //await ==> si no lo espera no se va a cambiar nunca xD
    await User.findOneAndUpdate(
      {email: req.body.email},
      {is_online: true}
    )
    return res.status(200).json({
      success: true,
      message: '¡User Sign in!'
    })
  } catch (error) {
    next(error)
  }
}

export default signin;