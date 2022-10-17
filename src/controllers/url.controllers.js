import { nanoid } from "nanoid";
import { getUrlRepository, openUrlRepository, postUrlRespository } from "../repositories/url.repositories.js";


const postUrlController = (req, res) => {
    const userId = res.locals.userId;
    const url = res.locals.Body.url;
    const shortUrl = nanoid(12);

    postUrlRespository(url, shortUrl, userId, res);
};

const getUrlController = (req, res) => {
    const id = req.params.id;
    
    getUrlRepository(id, res);
};

const openUrlController = (req, res) => {
    const shortUrl = req.params.shortUrl;

    openUrlRepository(shortUrl, res);
};

export {postUrlController, getUrlController, openUrlController};