import express from "express";
import  cors  from "cors";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.routes.js";
import { urlRouter } from "./routes/url.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { rankingRouter } from "./routes/ranking.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(urlRouter);
app.use(userRouter);
app.use(rankingRouter);

app.listen(process.env.PORT,  () => console.log(`listening on port ${process.env.PORT}....`))