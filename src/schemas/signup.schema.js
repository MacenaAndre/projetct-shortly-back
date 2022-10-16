import joi from "joi";

const signUpSchema = joi.object({
    name: joi.string().max(50).min(1).required(),
    email: joi.string().email().max(70).required(),
    password: joi.string().max(20).min(4).required(),
    confirmPassword: joi.ref("password")
});

export {signUpSchema};