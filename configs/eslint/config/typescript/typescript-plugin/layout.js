// @ts-check

/**
 * typescript-eslint 'Layout & Formatting' Rules
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
  // Give some margin around the members of a class.
  '@typescript-eslint/lines-between-class-members': ['warn', { exceptAfterOverload: true }],

  // Prefer a newline before return statements.
  '@typescript-eslint/padding-line-between-statements': [
    'warn',
    { blankLine: 'always', next: 'return', prev: '*' },
  ],

  // Prettier supports the style that we prefer.
  '@typescript-eslint/quotes': 'off',
};
