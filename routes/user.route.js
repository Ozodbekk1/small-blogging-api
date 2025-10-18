/** @format */
import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/users", getUsers);

userRouter.get("/user/:id", authorize, getUser);

export default userRouter;
