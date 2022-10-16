import express from "express";
import { signUp } from "../controllers/auth.controllers.js";
import { signUpValidations } from "../middlewares/auth.middlewares.js";

const authRouter = express.Router();

authRouter.post("/signup", signUpValidations, signUp);

export { authRouter };
