import joi from "joi";

const signInSchema = joi.object({
    email: joi.string().email().max(70).required(),
    password: joi.string().max(20).min(4).required(),
});

export {signInSchema};