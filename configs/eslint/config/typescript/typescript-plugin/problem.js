// @ts-check

const { RUNNING_IN_IDE } = require('../../utils');

/**
 * typescript-eslint 'Possible Problem' Rules
 *
 * @see https://typescript-eslint.io/rules/
 *
 * Note that some of these rules are overrides of core rules for cases where the
 * core rule doesn't correctly support TypeScript sources.
 *
 * @see https://typescript-eslint.io/rules/#extension-rules
 *
 * Also note that this omits all rules that conflict with Prettier or are
 * enforced natively by TypeScript
 *
 * @see https://github.com/prettier/eslint-config-prettier
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // It is sometimes nice to await mutliple values, some that may become
  // promises at a later point.
  '@typescript-eslint/await-thenable': 'off',

  // Let's keep our code clean.
  '@typescript-eslint/ban-ts-comment': 'error',

  // Use your best judgement.
  '@typescript-eslint/class-literal-property-style': 'off',

  // We prefer explicit return types for a module's public API, and implicit
  // return types for internal functions.
  //
  // See @typescript-eslint/explicit-module-boundary-types.
  '@typescript-eslint/explicit-function-return-type': 'off',

  // Implied public cuts down quite a bit on the visual clutter when reading a
  // class, and we're pretty used it.
  '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],

  // We prefer to be explicit about the types that are exported as part of a
  // public API.
  //
  // However, in some cases that's too much (such as React components).
  // Unfortunately, this rule doesn't have enough nuance for us.
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  // Seriously, it's confusing.
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',

  // Indicates a misuse of a void result or function.
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
    },
  ],

  // Usually a bug; and very confusing if it is intentional.
  '@typescript-eslint/no-duplicate-enum-values': 'error',

  // Typos.
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  // Make sure that all Promise rejections are handled.
  '@typescript-eslint/no-floating-promises': 'error',

  // Iterating over indexes gets really confusing when you're dealing with
  // sparse arrays.
  '@typescript-eslint/no-for-in-array': 'error',

  // Void is intended to be used as an indication of a function that returns
  // nothing. Using it otherwise leads to confusion.
  '@typescript-eslint/no-invalid-void-type': 'error',

  // Don't include literals that cannot fit into their data type without losing
  // precision.
  '@typescript-eslint/no-loss-of-precision': 'error',

  // Keeps our classes consistent.
  '@typescript-eslint/no-misused-new': 'error',

  // Avoids bugs where we're using a promise as if it were its resolved value.
  '@typescript-eslint/no-misused-promises': 'error',

  // Fix cases where we're using nullish coalescing where it will have no
  // effect.
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

  // Superseded by @typescript-eslint/no-non-null-assertion.
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

  // Indicates that our types are incorrect (or we should be testing the type
  // with a type guard).
  '@typescript-eslint/no-non-null-assertion': 'error',

  // Use static or dynamic `import` statements.
  '@typescript-eslint/no-require-imports': 'error',

  // We prefer to not use exceptions as control flow.
  '@typescript-eslint/no-throw-literal': 'error',

  // It's a bit annoying, but ensures that we're passing propertly typed values
  // through to the functions we call.
  '@typescript-eslint/no-unsafe-argument': 'error',

  // Note that you can assign still `any` to `unknown` variables.
  //
  // This doesn't refresh properly when workig within an IDE (misses types
  // defined in external files).
  '@typescript-eslint/no-unsafe-assignment': RUNNING_IN_IDE ? 'off' : 'error',

  // Make sure the things you call are typed as functions.
  '@typescript-eslint/no-unsafe-call': 'error',

  // This one might be too annoying; but it also generally happens only when
  // we're doing very fancy TypeScript things, and helps discourage that.
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  // Type check your values before referencing them.
  //
  // This doesn't refresh properly when workig within an IDE (misses types
  // defined in external files).
  '@typescript-eslint/no-unsafe-member-access': RUNNING_IN_IDE ? 'off' : 'error',

  // Type check your values before returning them.
  '@typescript-eslint/no-unsafe-return': 'error',

  // Keep our classes simple where possible.
  '@typescript-eslint/no-useless-constructor': 'error',

  // Superseded by @typescript-eslint/no-require-imports.
  '@typescript-eslint/no-var-requires': 'off',

  // We love 'em!
  '@typescript-eslint/parameter-properties': 'off',

  // Be consistent with how we declare types for reduce/etc.
  '@typescript-eslint/prefer-reduce-type-parameter': 'warn',

  // If we do ignore things; be explicit about what's being ignored.
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  // Don't get caught off guard by lexical sorting.
  '@typescript-eslint/require-array-sort-compare': 'error',

  // Be careful about what you concatenate.
  '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],

  // Be careful about what you concatenate.
  '@typescript-eslint/restrict-template-expressions': 'error',

  // Make sure our promises always pick up the stack when re-thrown. This
  // improves our ability to debug things, at the cost of an extra micro task
  // for each throw.
  '@typescript-eslint/return-await': ['error', 'always'],

  // Pick up cases where we may tear a method off of an instance and forget to
  // call/bind it later on.
  '@typescript-eslint/unbound-method': 'error',
};
