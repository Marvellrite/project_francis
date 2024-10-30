import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (err) {
      console.log(err);
      res.status(400).send("Resources provided do not match the schema");
    }
  };

export default validate;
