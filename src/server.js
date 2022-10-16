import express from "express";
import  cors  from "cors";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);

app.listen(process.env.PORT,  () => console.log(`listening on port ${process.env.PORT}....`))