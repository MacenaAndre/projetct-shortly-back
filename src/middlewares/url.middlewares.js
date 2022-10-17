import { urlSchema } from "../schemas/urls.schema.js";
import { validateSchema } from "./validate.schema.middleware.js";

const urlValidation = (req, res, next) => {
    const body = req.body;

    validateSchema(urlSchema, body, res, next);
}

export {urlValidation};