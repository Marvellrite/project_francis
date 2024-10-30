import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";

import { omit } from "lodash";
import { UserDocument } from "../model/user.model";
import UserModel from "../model/user.model";
import config from "config";
import axios, { Axios } from "axios";
import log from "../utils/logger";
import { registerUserInput } from "../schema/user.schema";
import { createTransport, Transporter, SendMailOptions } from "nodemailer";

export const createUser = async (
  input: registerUserInput["body"] & {
    unique_ID: { mat_no?: string; hostname?: string };
  }
) => {
  let data = {
    email: input.email,
    unique_ID: input.unique_ID.mat_no ?? input.unique_ID.hostname,
    login_ID: input.login_ID,
  };
  const user = await UserModel.create(data);
  return omit(user.toJSON(), "password");
};

export const Send_2FA_Authentication_Email = async () => {};

export const validatePassword = async ({
  login_ID,
  password,
}: {
  login_ID: string;
  password: string;
}) => {
  const user = await UserModel.findOne({ login_ID });
  if (!user) return false;
  const isValid = await user.comparePasswords(password);
  if (!isValid) return false;
  return user.toJSON();
};
