const toString = Object.prototype.toString

// Determine if the value is not of a certain type
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

// Is it a function
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function')
}

// Is it an object
export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object');
}

// Is it a string
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

// determine whether the url
export function isUrl(url: string) {
  return /(^http|https:\/\/)/g.test(url);
}
