// @ts-check

const meta = require('../../meta');

/**
 * ESLint Core 'Layout & Formatting' Rules
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
 * enforced natively by TypeScript
 *
 * @see https://github.com/prettier/eslint-config-prettier
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // We use both styles, depending on context.
  'line-comment-position': 'off',

  // It's up to the author to space or compress comments and code in a way
  // that makes it the most readable.
  'lines-around-comment': 'off',

  // We prefer that code be wide(ish) - especially because large variable
  // names and types are nicely scannable.
  //
  // But, we prefer that (English) prose be restricted, so that it stays
  // readable.
  'max-len': [
    'error',
    {
      code: meta.codeWidth,
      comments: meta.proseWidth,
      // Ignore eslint pragma statements, and lines that look like code.
      ignorePattern: '(eslint-(enable|disable))|([{}\\[]\\])|(:.*,)',
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    },
  ],

  // Avoid compressed code where possible.
  'max-statements-per-line': ['error', { max: 1 }],

  // Avoid tabs in weird places (like comments), for consistent spacing
  // across editors.
  'no-tabs': 'error',
};
