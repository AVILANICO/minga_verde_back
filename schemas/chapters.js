import Joi from 'joi';

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
export const createChapterSchema = Joi.object({
    manga_id: Joi.string().required(),
    title: Joi.string().required(),
    cover_photo: Joi.string().uri().required(),
    pages: Joi.array().items(Joi.string()).required(),
    order: Joi.string().required(),
});