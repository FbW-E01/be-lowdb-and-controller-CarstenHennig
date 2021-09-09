import express from "express";
import {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", usersGet);
userRouter.post("/", usersPost);
userRouter.put("/:id", usersPut);
userRouter.delete("/:id", usersDelete);

export default userRouter;
