import Joi from 'joi';

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
const schema = Joi.object({

    manga_id: Joi
        .string()
        .required()
        .min(4)
        .message({
            "string.min":"manga_id length must be at least 4 characters long",
            "string.empty": "manga_id is not allowed to be empty"
        }),

    title: Joi
        .string()
        .required()
        .min(4)
        .message({
            "string.min":"title length must be at least 4 characters long",
            "string.empty": "title is not allowed to be empty"
        }),

    cover_photo: Joi
        .string()
        .uri()
        // .required()
        .min(4)
        .message({
            "string.min":"cover_photo length must be at least 4 characters long",
            "string.empty": "cover_photo is not allowed to be empty"
        }),

    pages: Joi
        .array()
        .items(Joi.string())
        .required()
        .min(4)
        .message({
            "string.min":"pages length must be at least 4 characters long",
            "string.empty": "pages is not allowed to be empty"
        }),

    order: Joi  
        .number() 
        .required()
        .min(1)
        .message({
            "string.min":"order length must be at least 4 characters long",
            "string.empty": "order is not allowed to be empty"
        }),
});

export default schema