import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./Custom-api";

class UnprocessableEntityError extends CustomAPIError {
  constructor(message: string) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY);
  }
}

export default UnprocessableEntityError;
