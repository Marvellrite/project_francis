import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./Custom-api";

class Conflict extends CustomAPIError {
  constructor(message: string) {
    super(message, StatusCodes.CONFLICT);
  }
}

export default Conflict;
