import express from "express";
import { validateHeaders } from "../middlewares/authorization.headers.middleware.js";

const userRouter = express.Router();

userRouter.get("/users/me", validateHeaders)

export { userRouter };