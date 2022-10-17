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

async function getUrlRepository(id, res) {

    try {
        const result = await connection.query(
            `SELECT id, "shortUrl", url FROM urls WHERE id = $1;`,
            [id] 
        )

        if(result.rowCount === 0) {
            return res.sendStatus(404);
        }

        return res.status(200).send(result.rows[0])

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export {postUrlRespository, getUrlRepository};