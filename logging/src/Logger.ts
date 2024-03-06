import type { StructuredLogEvent } from './events';
import type { LoggableContext } from './values';

/**
 * An implementation-agnostic interface for logging within our app.
 */
export interface Logger {
  /**
   * **Log a debugging statement.**
   *
   * Debug statements are used to diagnose the behavior of specific code paths,
   * but are not useful in day to day development or operations.
   *
   * These are filtered from our output and production log index by default,
   * but can be enabled in order to diagnose problems in our code.
   *
   * ---
   *
   * `context` values will be included in the log output as additional metadata.
   *
   * As a shorthand, you can also pass errors directly as the context, which
   * is the equivalent of passing a context value of: { error: myError }.
   *
   * ---
   *
   * If you encounter TypeScript errors that complain about values not being
   * assignable to `never`, it means that you are passing context values that
   * are not JSON-serializable.
   */
  debug: <TContext>(message: string, context?: LoggableContext<TContext>) => void;

  /**
   * **Log an informational statement.**
   *
   * Info statements are output that is useful in day to day development and
   * operation; helping us understand the high level behavior of the system.
   *
   * ---
   *
   * `context` values will be included in the log output as additional metadata.
   *
   * As a shorthand, you can also pass errors directly as the context, which
   * is the equivalent of passing a context value of: { error: myError }.
   *
   * ---
   *
   * If you encounter TypeScript errors that complain about values not being
   * assignable to `never`, it means that you are passing context values that
   * are not JSON-serializable.
   */
  info: <TContext>(message: string, context?: LoggableContext<TContext>) => void;

  /**
   * **Log a warning.**
   *
   * Warnings indicate that we encountered a problematic but recoverable state,
   * and that the behavior of the system may be less than ideal.
   *
   * Invalid inputs from external callers are a common cause for warning.
   *
   * ---
   *
   * `context` values will be included in the log output as additional metadata.
   *
   * As a shorthand, you can also pass errors directly as the context, which
   * is the equivalent of passing a context value of: { error: myError }.
   *
   * ---
   *
   * If you encounter TypeScript errors that complain about values not being
   * assignable to `never`, it means that you are passing context values that
   * are not JSON-serializable.
   */
  warn: <TContext>(message: string, context?: LoggableContext<TContext>) => void;

  /**
   * **Log an error.**
   *
   * Errors indicate that we encountered an unexpected problem and may not be
   * able to fully recover from it.
   *
   * Logged errors also bubble up to our monitoring infrastructure and may
   * alert on-call engineers.
   *
   * ---
   *
   * `context` values will be included in the log output as additional metadata.
   *
   * As a shorthand, you can also pass errors directly as the context, which
   * is the equivalent of passing a context value of: { error: myError }.
   *
   * ---
   *
   * If you encounter TypeScript errors that complain about values not being
   * assignable to `never`, it means that you are passing context values that
   * are not JSON-serializable.
   */
  error: <TContext>(message: string, context?: LoggableContext<TContext>) => void;

  /**
   * **Log a structured event.**
   *
   * Logged events represent common and/or interesting events that we wish to
   * perform additional processing of; and it is helpful to emit them in a
   * known and consistent shape.
   *
   * By default, logged events are emitted as `info` statements. However, if
   * the event contains an `error` property, it will be treated as an `error`
   * statement.
   */
  event: (event: StructuredLogEvent) => void;
}
