import { Router } from "express";
import { signUpHandler } from "../controllers/users";

const userRouter = Router();

userRouter.post("/", signUpHandler);

export default userRouter;