// @ts-check

const meta = require('../../meta');

/**
 * ESLint Import 'Layout & Formatting' Rules
 *
 * @see https://github.com/import-js/eslint-plugin-import#rules
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // We prefer some margin between imports and actual code.
  'import/newline-after-import': ['warn', { considerComments: true }],
};
