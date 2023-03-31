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
  updateCardDetailsHandler,
} from "../controllers/data";

// SERVICES
import AccountVerifier from "../Services/AccountVerifier";

dataRouter.get("/buckets", AccountVerifier, getBuckets);
dataRouter.get("/cards", AccountVerifier, getCards);
dataRouter.post("/buckets", AccountVerifier, createBucket);
dataRouter.post("/cards", AccountVerifier, createCard);
dataRouter.delete("/cards/card", AccountVerifier, deleteCardHandler);
dataRouter.delete("/cards/multicards", AccountVerifier, deleteMultipleCardsHandler);
dataRouter.post("/cards/update", AccountVerifier, updateCardDetailsHandler);

export default dataRouter;
