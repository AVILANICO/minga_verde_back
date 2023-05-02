import joi from "joi"

export const mangaCreate = joi.object({


    author_id:joi.optional(),

    company_id:joi.optional(),

    cover_photo:joi.optional(),

    category_id:joi.optional(),


    title:joi.string()
    .required()
    .messages({ 
        "any.required": "title_required"

    }),

    description: joi.string()
    .required()
    .min(20)
    .messages({ 
        "any.required": "description_required"

    }),

})
