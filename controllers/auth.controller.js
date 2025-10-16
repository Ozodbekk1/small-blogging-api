/** @format */

import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      const error = new Error("This email is already registered!");
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      email,
      name,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.jwt_secret, {
      expiresIn: process.env.jwt_expire,
    });

    newUser.token = token;
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "New user created",
      data: {
        token,
        user: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      const error = new Error("user is not registered !");
      error.statusCode = 404;
      throw error;
    }

    const isPassworValid = await bcrypt.compare(password, user.password);

    if (!isPassworValid) {
      const error = new Error("password is not valid ( incorrect password )");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ userId: userModel._id }, process.env.jwt_secret, {
      expiresIn: process.env.jwt_expire,
    });

    res.status(200).json({
      success: true,
      message: "user logged in successfuly",
      data: {
        token,
        user: user,
      },
    });

    user.token = token;
    await user.save();
  } catch (error) {
    next(error);
  }
};

export const Logout = async (req, res, next) => {};
