import express from "express";
import { signIn, signUp } from "../controllers/auth.controllers.js";
import { signInValidations, signUpValidations } from "../middlewares/auth.middlewares.js";

const authRouter = express.Router();

authRouter.post("/signup", signUpValidations, signUp);
authRouter.post("/signin", signInValidations, signIn)

export { authRouter };
