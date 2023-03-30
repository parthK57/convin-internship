import { Router } from "express";

const dataRouter = Router();

// MIDDLEWARES
import {
  createBucket,
  createCard,
  deleteCardHandler,
  deleteMultipleCardsHandler,
  getBuckets,
  getCards,
} from "../controllers/data";

dataRouter.get("/buckets", getBuckets);
dataRouter.get("/cards", getCards);
dataRouter.post("/buckets", createBucket);
dataRouter.post("/cards", createCard);
dataRouter.delete("/cards/card", deleteCardHandler);
dataRouter.delete("/cards/multicards", deleteMultipleCardsHandler);

export default dataRouter;
