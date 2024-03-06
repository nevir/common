// @ts-check

const meta = require('../../meta');

/**
 * ESLint Import 'Possible Problem' Rules
 *
 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Avoids confusion if there are multiple eslint disables active for a rule.
  'eslint-comments/no-duplicate-disable': 'error',

  // If we've fixed a bug; let's clean up our tracks.
  'eslint-comments/no-unused-disable': 'error',

  // Make sure that eslint-enables are properly paired.
  'eslint-comments/no-unused-enable': 'error',
};
