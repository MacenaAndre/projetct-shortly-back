import connection from "../database_connection/pg.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateHeaders = async (req, res, next) => {
    let token = req.headers?.authorization;

    if(!token) {
        return res.sendStatus(401);
    }

    token = token.replace("Bearer ", "");

    try {
        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET);

        if(!verifyToken) {
            return res.sendStatus(401);
        };
    
        const validateToken = await connection.query(
            `SELECT * FROM sessions WHERE "userId" = $1 AND token = $2;`,
            [verifyToken.userId, token]
        );
    
        if(validateToken.rowCount === 0) {
            return res.sendStatus(401);
        };

        res.locals.userId = verifyToken.userId;
        next();

    } catch (error) {
        return res.status(500).send(error.message);   
    }
}

export {validateHeaders};