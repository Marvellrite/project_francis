import { Document, Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  login_ID: string;
  unique_ID: string;
  createdAt: Date;
  updatedAt: Date;
  comparePasswords(passwordInput: string): Promise<boolean>;
}

const userSchema = new Schema(
  {
    login_ID: { type: String, required: [true, "User login_ID is required"] },
    email: {
      type: String,
      unique: [true, "Two users are not allowed to have one email"],
    },
    password: {
      type: String,
    },
    unique_ID: String,
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePasswords = async function (passwordInput: string) {
  const user = this as UserDocument;
  return await bcryptjs.compare(passwordInput, user.password);
};

const UserModel = model<UserDocument>("User", userSchema);

export default UserModel;
