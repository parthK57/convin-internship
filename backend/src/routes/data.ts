import { Router } from "express";

const dataRouter = Router();

// MIDDLEWARES
import {
  createBucket,
  createCard,
  getBuckets,
  getCards,
} from "../controllers/data";

dataRouter.get("/buckets", getBuckets);
dataRouter.get("/cards", getCards);
dataRouter.post("/buckets", createBucket);
dataRouter.post("/cards", createCard);

export default dataRouter;
