import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./Custom-api";

class ConflictError extends CustomAPIError {
  constructor(message: string) {
    super(message, StatusCodes.CONFLICT);
  }
}

export default ConflictError;
