import connection from "../database_connection/pg.js";

async function postUrlRespository(url, shortUrl, id, res) {

    try {
        await connection.query(
            `INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3);`,
            [url, shortUrl, id]
        );

        return res.status(201).send({shortUrl: shortUrl});

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export {postUrlRespository};