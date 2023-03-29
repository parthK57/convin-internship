import { Router } from "express";
import { loginHandler, signUpHandler } from "../controllers/users";

const usersRouter = Router();

usersRouter.post("/users/signup", signUpHandler);
usersRouter.post("/users/login", loginHandler);

export default usersRouter;
