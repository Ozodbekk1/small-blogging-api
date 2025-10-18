/** @format */

import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const authorize = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "unauthorize" });
    }

    const decode = jwt.verify(token, process.env.jwt_secret);

    const user = await userModel.findById(decode.userId);

    if (!user) {
      return res.status(401).json({ message: "unauthorize" });
    }

    req.user = user;

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "unauthorize", error: error.message });
  }
};

export default authorize;
