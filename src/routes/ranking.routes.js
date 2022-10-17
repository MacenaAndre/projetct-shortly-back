import express from "express";
import { getRanking } from "../repositories/ranking.repositories.js";

const rankingRouter = express.Router();

rankingRouter.get("/ranking", getRanking)

export { rankingRouter };