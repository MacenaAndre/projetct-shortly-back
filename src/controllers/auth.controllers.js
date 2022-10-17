import bcrypt from "bcrypt";
import { getUserRepository, signUpRepository } from "../repositories/auth.repositories.js";

const signUp = (req, res) => {
    const body = res.locals.Body;
    const password = bcrypt.hashSync(body.confirmPassword, 12);

    signUpRepository(body.name, body.email, password, res);

};

const signIn =  async (req, res) => { //rever
    const body = res.locals.Body;
    
    getUserRepository(body.email, body.password, res);
        
};

export {signUp, signIn}; 