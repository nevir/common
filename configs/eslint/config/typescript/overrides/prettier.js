// @ts-check

const eslintPrettierConfig = require('eslint-config-prettier');

// This is a bit manual; but being smarter here makes for much more complicated
// code.
const KNOWN_PLUGINS = new Set(['@typescript-eslint', 'react']);

// Rules that were removed from ESLint but are still present in
// eslint-config-prettier.
const RULE_BLACKLIST = new Set([
  'generator-star',
  'no-arrow-condition',
  'no-comma-dangle',
  'no-reserved-keys',
  'no-space-before-semi',
  'no-wrap-func',
  'space-after-function-name',
  'space-after-keywords',
  'space-before-function-parentheses',
  'space-before-keywords',
  'space-in-brackets',
  'space-return-throw-case',
  'space-unary-word-ops',
  'member-delimiter-style',
  'type-annotation-spacin',
]);

/**
 * Disable all rules that conflict with Prettier.
 *
 * @see https://github.com/prettier/eslint-config-prettier
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = Object.fromEntries(
  Object.entries(eslintPrettierConfig.rules).filter(([rule, config]) => {
    // Don't include rules that only sometimes conflict with prettier
    // https://github.com/prettier/eslint-config-prettier#special-rules
    if (config === 0) return false;

    // Skip blacklisted rules.
    if (RULE_BLACKLIST.has(rule)) return false;

    // Skip rules that are for unknown plugins
    const plugin = (/^((.+)\/)?/.exec(rule) ?? [])[2];
    if (plugin && !KNOWN_PLUGINS.has(plugin)) return false;

    return true;
  }),
);
