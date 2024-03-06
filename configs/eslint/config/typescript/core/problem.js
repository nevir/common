// @ts-check

/**
 * ESLint Core 'Possible Problem' Rules
 *
 * @see https://eslint.org/docs/latest/rules/#possible-problems
 *
 * Note that some are overridden by typescript-eslint (and have a
 * `@typescript-eslint/` prefix) in cases where the core rule doesn't correctly
 * support TypeScript sources.
 *
 * @see https://typescript-eslint.io/rules/#extension-rules
 *
 * Also note that this omits all rules that conflict with Prettier or are
 * enforced natively by TypeScript or are
 * enforced natively by TypeScript
 *
 * @see https://github.com/prettier/eslint-config-prettier
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Useful for catching infinite loops.
  'for-direction': 'error',

  // Using async functions as a Promise executor can lead to tricky to diagnose
  // bugs (such as errors being thrown by the executor not being caught).
  'no-async-promise-executor': 'error',

  // Tempting; but this is useful in one-off scripts and other contexts.
  'no-await-in-loop': 'off',

  // -0 is a different object from 0, and if you're explicitly trying to compare
  // it, you're going to have a hard time.
  'no-compare-neg-zero': 'error',

  // Generally represents a typo, or extra fancy logic.
  'no-cond-assign': ['error', 'except-parens'],

  // Catch a number of errors where expressions always evaluate to the same
  // value.
  'no-constant-binary-expression': 'error',

  // Debugging checks that shouldn't be checked in.
  'no-constant-condition': ['error', { checkLoops: false }],

  // Testing against control characters is usually a typo.
  'no-control-regex': 'error',

  // Don't check in debugging code;
  'no-debugger': 'error',

  // It's a mistake to have identical repeated else-if conditions.
  'no-dupe-else-if': 'error',

  // It's a mistake to have identical repeated case conditions.
  'no-duplicate-case': 'error',

  // Superseded by eslint-plugin-import.
  'no-duplicate-imports': 'off',

  // Represents a typo.
  'no-empty-character-class': 'error',

  // Represents a typo.
  'no-empty-pattern': 'error',

  // Stay consistent with no-param-reassign.
  'no-ex-assign': 'error',

  // We don't mind this style; and TypeScript keeps us honest.
  'no-inner-declarations': 'off',

  // Help catch typos in RegExp constructors.
  'no-invalid-regexp': 'error',

  // Catch typos and mis-pastes.
  'no-irregular-whitespace': ['error', { skipStrings: true, skipTemplates: true }],

  // Unicode is hard.
  'no-misleading-character-class': 'error',

  // The return value of a Promise executor is ignored; which can get tricky if
  // you're returning a promise and expecting it to be picked up.
  'no-promise-executor-return': 'error',

  // Prefer Object.hasOwn(); you might be daling with an object that has no
  // prototype.
  'no-prototype-builtins': 'error',

  // Most likely a refactoring error.
  'no-self-assign': 'error',

  // Tautologies are tautologies.
  'no-self-compare': 'error',

  // Spare array literals are almost always typos; let's be explicit about them
  // when we really want them.
  'no-sparse-arrays': 'error',

  // Catch typos.
  'no-template-curly-in-string': 'error',

  // Handled by Prettier.
  'no-unexpected-multiline': 'off',

  // Make sure that loops have a local value that is being modified.
  'no-unmodified-loop-condition': 'error',

  // Catch incorrect loop logic.
  'no-unreachable-loop': 'error',

  // The order of return/throw with finally can be super confusing.
  'no-unsafe-finally': 'error',

  // RegExp Backreferences in ES can be tricky and not behave quite the way you
  // expect when coming from other languages.
  'no-useless-backreference': 'error',

  // Make sure we're not holding onto references (and behaving according to
  // them) when values span an async boundary.
  'require-atomic-updates': 'error',
};
