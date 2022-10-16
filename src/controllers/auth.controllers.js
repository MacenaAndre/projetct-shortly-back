import bcrypt from "bcrypt";
import { signUpRepository } from "../repositories/auth.repositories.js";

const signUp = async (req, res) => {
    const body = res.locals.Body;
    const password = bcrypt.hashSync(body.confirmPassword, 12);

    signUpRepository(body.name, body.email, password, res);

};

export {signUp}; 