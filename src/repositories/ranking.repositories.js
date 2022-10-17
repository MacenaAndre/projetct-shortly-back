import connection from "../database_connection/pg.js";

const getRanking = async (req, res) => {
     
    try {
        const result = await connection.query(
            `SELECT
                u.id,
                u.name,
                COUNT(DISTINCT rl.id) AS "linksCount",
                COUNT(v.id) AS "visitCount"
            FROM users AS u
            LEFT JOIN urls AS rl ON rl."userId"=u.id
            LEFT JOIN visits AS v ON v."urlId"=rl.id
            GROUP BY  u.id
            ORDER BY "visitCount" DESC
            LIMIT 10;`
        );

        return res.status(200).send(result.rows);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export {getRanking};