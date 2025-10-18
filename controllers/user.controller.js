/** @format */

import userModel from "../models/user.model.js";

const getUsers = async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json({ succes: true, data: users });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id).select("-password");

    if (!user) {
      const error = new Error("user not found");

      error.statusCode = 404;

      next(error);
    }

    res.status(200).json({ succes: true, data: user });
  } catch (error) {
    next(error);
  }
};

export { getUsers, getUser };
