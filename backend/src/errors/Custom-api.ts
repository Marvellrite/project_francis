export default class CustomAPIError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}
