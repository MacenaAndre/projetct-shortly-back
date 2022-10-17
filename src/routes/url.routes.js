import express from "express";
import { deleteUrlController, getUrlController, openUrlController, postUrlController } from "../controllers/url.controllers.js";
import { validateHeaders } from "../middlewares/authorization.headers.middleware.js";
import { urlValidation } from "../middlewares/url.middlewares.js";

const urlRouter = express.Router();

urlRouter.post("/urls/shorten", validateHeaders, urlValidation, postUrlController);
urlRouter.get("/urls/:id", getUrlController);
urlRouter.get("/urls/open/:shortUrl", openUrlController);
urlRouter.delete("/urls/:id", validateHeaders, deleteUrlController)

export { urlRouter };