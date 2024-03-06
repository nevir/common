// @ts-check

const meta = require('../../meta');

/**
 * ESLint Import 'Suggestion' Rules
 *
 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Make sure that all eslint-disables are paired with an eslint-enable.
  'eslint-comments/disable-enable-pair': 'error',

  // Be explicit about which rules are enabled.
  'eslint-comments/no-aggregating-enable': 'error',

  // For now, we've got no global opinion on denied rules.
  'eslint-comments/no-restricted-disable': 'off',

  // You must be explicit about which rule is being disabled.
  'eslint-comments/no-unlimited-disable': 'error',

  // Too draconian.
  'eslint-comments/no-use': 'off',

  // Let's try it out…
  'eslint-comments/require-description': ['error', { ignore: ['eslint-enable'] }],
};
