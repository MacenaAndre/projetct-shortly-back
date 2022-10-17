import express from "express";
import { getUrlController, postUrlController } from "../controllers/url.controllers.js";
import { validateHeaders } from "../middlewares/authorization.headers.middleware.js";
import { urlValidation } from "../middlewares/url.middlewares.js";

const urlRouter = express.Router();

urlRouter.post("/urls/shorten", validateHeaders, urlValidation, postUrlController);
urlRouter.get("/urls/:id", getUrlController)

export { urlRouter };