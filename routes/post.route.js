/** @format */
import { Router } from "express";

const postRouter = Router();

// get all posts

postRouter.get("/", (res, req) => {
  req.send({
    message: "get all posts",
  });
});

// get post with unique id (only get one)

postRouter.get("/:id", (res, req) => {
  req.send({
    message: "get one post with unique id",
  });
});

// update post with unique id

postRouter.put("/:id", (res, req) => {
  req.send({
    message: "update post with unique id",
  });
});

// delete post with unique id

postRouter.delete("/:id", (res, req) => {
  req.send({
    message: "delete post with unique id",
  });
});

// post post

postRouter.post("/", (res, req) => {
  req.send({
    message: "post post ",
  });
});

export default postRouter;
