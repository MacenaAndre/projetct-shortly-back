import express from "express";
import { readUserController } from "../controllers/user.controllers.js";
import { validateHeaders } from "../middlewares/authorization.headers.middleware.js";

const userRouter = express.Router();

userRouter.get("/users/me", validateHeaders, readUserController)

export { userRouter };