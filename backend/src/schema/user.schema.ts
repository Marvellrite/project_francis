import { string, TypeOf, object, discriminatedUnion, literal } from "zod";

const unique_ID_schema = discriminatedUnion("user_status", [
  object({
    user_status: literal("student"),
    mat_no: string(),
  }),
  object({
    user_status: literal("student_group"),
    hostname: string(),
  }),
]);

const registerUserSchema = object({
  body: object({
    login_ID: string({ required_error: "The login ID is required" }),
    password: string({
      required_error: "The password is required",
    }).min(6, "Password is too short; it should a minimum of six characters"),
    passwordConfirmation: string({
      required_error: "Password confirmation required",
    }),
    email: string({
      required_error: "Email required",
    }).email("Invalid email"),
    unique_ID: unique_ID_schema,
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type registerUserInput = TypeOf<typeof registerUserSchema>;

export default registerUserSchema;
