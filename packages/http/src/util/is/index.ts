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
