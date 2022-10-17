import { nanoid } from "nanoid";

const postUrlController = (req, res) => {
    const userId = res.locals.userId;
    const url = res.locals.Body.url;
    const shortUrl = nanoid(12);


    console.log(userId, url, shortUrl);

};

export {postUrlController};