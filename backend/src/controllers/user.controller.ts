import { CookieOptions, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import { createUser } from "../services/user.services";
import log from "../utils/logger";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export const registerUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    // log.info(user);
    log.info("User Created Successfully!");
    res.status(201).send("User Created Successfully...");
  } catch (err) {
    log.error(err);
    res.status(500).send("Unable to Create user");
  }
};
