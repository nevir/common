/**
 * All rules that the ESLint Unused Imports plugin supports.
 *
 * @see https://github.com/sweepline/eslint-plugin-unused-imports/tree/master/docs/rules
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Flag and remove unused imports.
  'unused-imports/no-unused-imports': 'warn',

  // Deprecated.
  'unused-imports/no-unused-imports-ts': 'off',

  // Deprecated
  'unused-imports/no-unused-vars-ts': 'off',
};
