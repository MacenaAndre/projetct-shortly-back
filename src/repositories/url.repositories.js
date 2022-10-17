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
};

async function openUrlRepository(shortUrl, res) {

    try {
        const result = await connection.query(
            `SELECT * FROM urls WHERE "shortUrl" = $1;`,
            [`${shortUrl}`] 
        );

        if(result.rowCount === 0) {
            return res.sendStatus(404);
        };

        await connection.query(
            `INSERT INTO visits ("urlId", "userId") VALUES ($1, $2);`,
            [result.rows[0].id, result.rows[0].userId]
        )

        return res.redirect(result.rows[0].url);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export {postUrlRespository, getUrlRepository, openUrlRepository};