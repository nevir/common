// @ts-check

const { mergeAndCheckRules } = require('../utils');

/** @type {import('eslint').Linter.ConfigOverride[]} */
module.exports = [
  {
    files: ['**/*.{graphql,gql}'],
    plugins: ['@graphql-eslint'],
    rules: mergeAndCheckRules(getKnownRules, {
      // Note that the plugin does not categorize many of its rules; so we just
      // define them all in a single category.
      override: [require('./config')],
    }),
  },
];

function getKnownRules() {
  const knownRules = new Map();
  for (const [rule, config] of Object.entries(require('@graphql-eslint/eslint-plugin').rules)) {
    knownRules.set(`@graphql-eslint/${rule}`, config);
  }

  return knownRules;
}
