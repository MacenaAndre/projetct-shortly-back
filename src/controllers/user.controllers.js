import { readUserRepository } from "../repositories/user.repositories.js";

const readUserController = (req, res) => {
    const userId = res.locals.userId;

    readUserRepository(userId, res);
};

export {readUserController}