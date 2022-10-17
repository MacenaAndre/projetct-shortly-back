import { signInSchema } from "../schemas/signin.schema.js";
import { signUpSchema } from "../schemas/signup.schema.js";
import { validateSchema } from "./validate.schema.middleware.js";

const signUpValidations = (req, res, next) => {
    const body = req.body;

    if(body.name && body.email && body.password && body.confirmPassword) {
        body.name = body.name.trim();
        body.email = body.email.trim();
        body.password = body.password.trim();
        body.confirmPassword = body.confirmPassword.trim();
    };

    validateSchema(signUpSchema, body, res, next);
};

const signInValidations = (req, res, next) => {
    const body = req.body;

    if(body.email && body.password) {
        body.email = body.email.trim();
        body.password = body.password.trim();
    };

    validateSchema(signInSchema, body, res, next);
};

export {signUpValidations, signInValidations};