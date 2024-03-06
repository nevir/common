// @ts-check

const { mergeAndCheckRules } = require('../utils');

/** @type {import('eslint').Linter.ConfigOverride[]} */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],

    plugins: ['@typescript-eslint', 'react', 'import', 'eslint-comments', 'unused-imports'],

    rules: mergeAndCheckRules(getKnownRules, {
      layout: [require('./core/layout'), require('./typescript-plugin/layout'), require('./import/layout')],
      override: [
        require('./overrides/prettier'),
        require('./overrides/typescript'),
        require('./overrides/typescriptPlugin'),
        // Some plugins don't have well-categorized rules, or too few rules to
        // categorize.
        require('./react/config'),
        require('./unused-imports/config'),
      ],
      problem: [
        require('./core/problem'),
        require('./typescript-plugin/problem'),
        require('./import/problem'),
        require('./eslint-comments/problem'),
      ],
      suggestion: [
        require('./core/suggestion'),
        require('./typescript-plugin/suggestion'),
        require('./import/suggestion'),
        require('./eslint-comments/suggestion'),
      ],
    }),
  },
];

function getKnownRules() {
  const knownRules = new Map();

  const linter = new (require('eslint').Linter)();
  for (const [rule, config] of linter.getRules().entries()) {
    knownRules.set(rule, config);
  }

  for (const [rule, config] of Object.entries(require('@typescript-eslint/eslint-plugin').rules)) {
    knownRules.set(`@typescript-eslint/${rule}`, config);
  }

  for (const plugin of ['react', 'import', 'eslint-comments', 'unused-imports']) {
    for (const [rule, config] of Object.entries(require(`eslint-plugin-${plugin}`).rules)) {
      knownRules.set(`${plugin}/${rule}`, config);
    }
  }

  return knownRules;
}
