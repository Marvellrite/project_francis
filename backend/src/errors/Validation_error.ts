import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./Custom-api";

class Validation_Error extends CustomAPIError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_GATEWAY);
  }
}

export default Validation_Error;
