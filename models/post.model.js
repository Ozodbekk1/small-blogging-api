/** @format */

import { model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: { String: true, require: true },
    description: { String: true, require: true },
  },
  { timestamps: true }
);

const postModel = model("post", postSchema);

export default postModel;
