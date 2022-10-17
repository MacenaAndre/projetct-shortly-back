import { nanoid } from "nanoid";
import { postUrlRespository } from "../repositories/url.repositories.js";


const postUrlController = (req, res) => {
    const userId = res.locals.userId;
    const url = res.locals.Body.url;
    const shortUrl = nanoid(12);

    postUrlRespository(url, shortUrl, userId, res);
};

export {postUrlController};