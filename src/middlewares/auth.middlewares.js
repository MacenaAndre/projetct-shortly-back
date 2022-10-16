import { signUpSchema } from "../schemas/signup.schema.js";
import { validateSchema } from "./validate.schema.middleware.js";

const signUpValidations = (req, res, next) => {
    const body = req.body;
    body.name = body.name.trim();
    body.email = body.email.trim();
    body.password = body.password.trim();
    body.confirmPassword = body.confirmPassword.trim();

    validateSchema(signUpSchema, body, res, next);
};

export {signUpValidations};