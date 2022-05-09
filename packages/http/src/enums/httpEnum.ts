// request result set
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = -1,
  TIMEOUT = 10042,
  TYPE = 'success',
}

// request method
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

// Common contentType types
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
