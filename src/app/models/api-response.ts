export class ApiResponse<T> {

  public code: String;
  public message: String;
  public data: T

  constructor(code: String, message: String, data: T) {
    this.code = code;
    this.message = message;
    this.data = data;

  }
}
