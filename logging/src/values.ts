/**
 * Represents an object that can be passed as metadata to a logging function.
 */
export type LoggableContext<TValue> =
  // Errors are special cased and can be passed directly.
  TValue extends ErrorLike
    ? TValue
    : // Arrays are not allowed (even though they extend object)
    TValue extends unknown[]
    ? never
    : // Do we have us a real object?
    TValue extends object
    ? // Note that we special case the 'error' property
      LoggableValue<Omit<TValue, 'error'> & { error?: ErrorLike }>
    : // Non-object
      never;

/**
 * Checks whether a type can be logged; returns `never` if not.
 */
export type LoggableValue<TValue> =
  // Is this a primitive value?
  TValue extends LoggablePrimitive
    ? TValue
    : // Is this type JSON-aware?
    TValue extends { toJSON: () => unknown }
    ? TValue
    : // Is this a value that is definitely not loggable?
    (Extract<TValue, NotLoggable> extends never ? 'no' : 'yes') extends 'yes'
    ? never
    : // Is this an array?
    TValue extends (infer TInner)[]
    ? LoggableValue<TInner>[]
    : // Is this an object?
    TValue extends object
    ? { [TKey in keyof TValue]: LoggableValue<TValue[TKey]> }
    : // We've exhausted our options; this is not loggable.
      never;

/**
 * Primitive values that can be serialized by our logger.
 */
export type LoggablePrimitive = string | number | boolean | null;

/**
 * Types that are definitely not loggable.
 */
type NotLoggable = (...args: unknown[]) => unknown;

/**
 * An object that looks like an Error.
 */
export interface ErrorLike {
  message: string;
  name?: string;
  stack?: string;
  // GraphQL only
  errors?: GraphQLInnerError[];
}

/**
 * An individual error within a failing GraphQL response.
 */
export interface GraphQLInnerError {
  message: string;
  path: string | string[];
  stack: string;
  count: number;
}

/**
 * Supported logging levels.
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * An ISO-8601 string.
 */
export type ISO8601DateTime = string;
