import joi from "joi"

export const userCreateSignUp = joi.object({
    name: joi.string(),
    email: joi.string().email({minDomainSegments: 2})
    .required(),
    password: joi.string()
    .min(8)
    .max(20)
    .required(),
    photo: joi.string().uri(),
})

// export const userCreateSignUp = joi.object({
//     mail: joi.string().email({minDomainSegments: 2})
//     .required(),
//     password: joi.string()
//     .min(8)
//     .max(20)
//     .required(),
//     photo: joi.string().uri(),
// })
