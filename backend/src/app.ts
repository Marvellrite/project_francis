import express from "express";
import "express-async-errors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import connectDB from "./utils/connect";
import log from "./utils/logger";
import router from "./routes";
import { deserializeUser } from "./middlewares/deserializeUser";

app.use(express.static("ui"));
app.use("/api", deserializeUser);
app.use(express.json());
app.use("/api", router);

const PORT = config.get<number>("port");

const start = async () => {
  try {
    await connectDB(config.get<string>("dbConnectionUri"));
    log.info("Database Connected");
    app.listen(PORT, () => {
      log.info(`Listening at ${PORT}`);
    });
  } catch (err) {
    log.error(err);
  }
};

start().catch((err) => {
  log.error(err);
});
