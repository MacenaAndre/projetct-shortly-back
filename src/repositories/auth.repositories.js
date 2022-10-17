import connection from "../database_connection/pg.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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

async function getUserRepository(email, password, res) {    

        try {
            const result = await connection.query(
                `SELECT id, password FROM users WHERE email = $1;`,
                [email]
            );
    
            if(result.rowCount === 0) {
                return res.status(401).send("Email and/or password are invalid")
            }
    
            const isPasswordValid = await bcrypt.compare(
                password,
                result.rows[0].password
            )

            if(!isPasswordValid) {
                return res.status(401).send("Email and/or password are invalid");
            }

            const token = jwt.sign(
                {
                    userId: result.rows[0].id
                },
                process.env.TOKEN_SECRET
            );
            
            const insertSession = await connection.query(
                `INSERT INTO sessions ("userId", token) VALUES ($1, $2);`,
                [result.rows[0].id, token]
            );

            return res.status(200).send({token: token});
            
            //insert in sessions acordar as 16h40
        } catch (error) {
            return res.status(500).send(error.message);
        }
        
};

export {signUpRepository, getUserRepository};