import { Router } from "express";

const dataRouter = Router();

// MIDDLEWARES
import { getBuckets, getCards } from "../controllers/data";

dataRouter.get("/buckets", getBuckets);
dataRouter.get("/cards", getCards);

export default dataRouter;
