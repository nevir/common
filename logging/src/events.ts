import type { ErrorLike, ISO8601DateTime, LoggablePrimitive, LogLevel } from './values';

// Events

/**
 * All known structured loggable events.
 */
export type StructuredLogEvent =
  | DBQueryCompleteEvent
  | DBQueryErrorEvent
  | HTTPRequestStartEvent
  | HTTPRequestCompleteEvent
  | GraphQLOperationStartEvent
  | GraphQLOperationCompleteEvent;

/**
 * Emitted when a database query has returned.
 */
export interface DBQueryCompleteEvent {
  event: 'db.query.complete';
  db: {
    statement: string;
    parameters: LoggablePrimitive[];
    duration: number;
  };
}

/**
 * Emitted when encountering an error from a database query.
 */
export interface DBQueryErrorEvent {
  event: 'db.query.error';
  error: ErrorLike;
  db: {
    statement: string;
    parameters: LoggablePrimitive[];
  };
}

/**
 * Emitted during the request/operation lifecycle.
 *
 * https://docs.datadoghq.com/logs/log_configuration/attributes_naming_convention/#http-requests
 */
export interface HTTPRequestStartEvent {
  event: 'http.request.start';
  http: {
    url: string;
    method: string;
    referer?: string;
    useragent: string;
    version: string;
  };
}

export interface HTTPRequestCompleteEvent {
  event: 'http.request.complete';
  duration: number;
  error?: ErrorLike;
  http: {
    url: string;
    status_code: number;
    method: string;
    referer?: string;
    useragent: string;
    version: string;
  };
}

export interface GraphQLOperationStartEvent {
  event: 'graphql.operation.start';
  graphql: {
    operation: string;
    document?: string;
    variables?: object;
  };
}

export interface GraphQLOperationCompleteEvent {
  event: 'graphql.operation.complete';
  duration: number;
  error?: ErrorLike;
  graphql: {
    operation: string;
    document?: string;
    variables?: object;
  };
}

/**
 * Unstructured log event.
 */
export interface UnstructuredLogEvent {
  message: string;
  error?: ErrorLike;
  [key: string]: unknown;
}

// Output Structure

/**
 * The base structure of all log output.
 *
 * https://docs.datadoghq.com/logs/log_configuration/attributes_naming_convention/#reserved-attributes
 */
export interface BaseLogEntry {
  status: LogLevel;
  time: ISO8601DateTime;
  service: string;
  logger: {
    name: string;
  };
  error?: ErrorLike;
  trace_id?: string;
  graphql?: {
    operation: string;
  };
}

// Helpers

/**
 * All known loggable events (input shapes).
 */
export type LoggableEvent = UnstructuredLogEvent | StructuredLogEvent;

/**
 * All known output shapes.
 */
export type LogEntry = LoggableEvent & BaseLogEntry;

/**
 * All known event types.
 */
export type StructuredEventType = StructuredLogEvent['event'];

/**
 * All structured events by type.
 */
export type StructuredEventsByType = {
  [TType in StructuredEventType]: Extract<StructuredLogEvent, { event: TType }>;
};
