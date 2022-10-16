import connection from "../database_connection/pg.js";

async function signUpRepository(name, email, password, res) {

    try {
        const result = await connection.query(
            `SELECT id FROM users WHERE email = $1;`,
            [email]
        );
        if(result.rowCount !== 0) {
            return res.status(409).send("This email is already being used");
        }
        await connection.query(
            `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
            [name, email, password]
            );
    
        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export {signUpRepository};