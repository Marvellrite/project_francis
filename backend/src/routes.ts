import { Router } from "express";
import validate from "./middlewares/validateResources";
import registerUserSchema from "./schema/user.schema";
import { registerUserHandler } from "./controllers/user.controller";

import config from "config";
import log from "./utils/logger";

const router = Router();

// User related routes
router
  .route("/admin/register_user")
  .post(validate(registerUserSchema), registerUserHandler);

// log.info('/sessions/oauth/google');

export default router;
