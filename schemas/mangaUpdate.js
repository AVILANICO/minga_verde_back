import Joi from "joi";

let mangaUpdate=Joi.object({
  title: Joi.string().min(4).max(30).message({
    "string.min": "the title must be at least 4 characteres",
    "string.max": "the title must not have more than 30 characters",
    "string.required": "the title is required"
}),
  description: Joi.string().min(10).message({
  "any.required": "Description is a required field.",
  "string.empty": "Description cannot  be an empty field and need 10 leters."
}),cover_photo:Joi.string().uri().message({
    "string.uri":"invalid_url"
}),
  category_id: Joi.optional()

})

export default mangaUpdate
