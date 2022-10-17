import connection from "../database_connection/pg.js";

async function readUserRepository(userId, res) {

     try {
        const result = await connection.query(
            `SELECT * FROM users WHERE id = $1;`,
            [userId]
        );

        if(result.rowCount === 0) {
            return res.sendStatus(404);
        };

        const getUserResult = await connection.query(
            `SELECT 
                v."userId" AS id,
                u.name AS name,
                COUNT(v.id) AS "visitCount"
            FROM visits AS v
            JOIN users AS u ON v."userId"=u.id
            WHERE v."userId" = $1
            GROUP BY u.name, v."userId";`,
            [userId]
        );

        const getUrlResult = await connection.query(
            `SELECT 
                u.id,
                u."shortUrl",
                u.url,
                COUNT(v."urlId") AS "visitCount"
            FROM visits AS v
            JOIN urls AS u ON u.id=v."urlId"
            WHERE v."userId" = $1
            GROUP BY u."shortUrl", v."urlId", u.id;`,
            [userId]
        );

        return res.status(200).send({
            id: getUserResult.rows[0].id,
            name: getUserResult.rows[0].name,
            visitCount: getUserResult.rows[0].visitCount,
            shortenedUrls: getUrlResult.rows
        });

     } catch (error) {
        return res.status(500).send(error.message);
     }
};

export {readUserRepository};