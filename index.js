/** @format */
import express from "express";
import mongoose from "mongoose";
import postRouter from "./routes/post.route.js";
import { configDotenv } from "dotenv";
import errorMiddleware from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
// import arcjetMiddleware from "./middleware/arject.middleware.js";

configDotenv();

const app = express();
app.use(express.json());

// app.use(arcjetMiddleware);

app.use("/api/v1/post", postRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", userRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 8080;

const bootstrap = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected DB ✅");

    app.listen(PORT, () => {
      console.log(
        `listening on port ${PORT} 🥳 - http://localhost:${PORT} 🫴🏻🥶`
      );
    });
  } catch (error) {
    console.log(`Error connecting with DB: ${error}`);
  }
};

bootstrap();
