// @ts-check

const meta = require('../../meta');

/**
 * ESLint Import 'Suggestion' Rules
 *
 * @see https://github.com/import-js/eslint-plugin-import#rules
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Superseded by @typescript-eslint/consistent-type-imports.
  'import/consistent-type-specifier-style': 'off',

  // We don't use Webpack.
  'import/dynamic-import-chunkname': 'off',

  // Too draconian; use your best judgement.
  'import/exports-last': 'off',

  // Never reference compiled extensions, but always reference asset extensions.
  'import/extensions': [
    'error',
    'always',
    {
      cjs: 'never',
      cts: 'never',
      js: 'never',
      jsx: 'never',
      mjs: 'never',
      mts: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],

  // Import statements are hoisted; this helps avoid surprising behavior.
  'import/first': 'error',

  // We don't mind exports throughout a file; and TypeScript helps orient.
  'import/group-exports': 'off',

  // Too draconian; use your best judgement.
  'import/max-dependencies': 'off',

  // Security says nope.
  'import/no-absolute-path': 'error',

  // Can be useful; use your best judgement.
  'import/no-anonymous-default-export': 'off',

  // Superseded by @typescript-eslint/no-require-imports.
  'import/no-commonjs': 'off',

  // Enforce that we have no dependency cycles.
  //
  // Note that this rule has the potential of being a big perf hit to eslint;
  // we may need to tune it depending on the project.
  'import/no-cycle': ['error', { ignoreExternal: true }],

  // We prefer default exports; especially for dependency injection consistency.
  'import/no-default-export': 'off',

  // Can be helpful in scripts and the like.
  'import/no-dynamic-require': 'off',

  // Likely refactoring error.
  'import/no-empty-named-blocks': 'warn',

  // Tempting; but there are cases where we want to allow reaching one level in.
  // And this can be better managed by TypeScript composite projects.
  'import/no-internal-modules': 'off',

  // Keeps us out of trouble. If you want to mutate global state; provide a
  // function to do so.
  'import/no-mutable-exports': 'error',

  // Prefer the default export shorthand.
  'import/no-named-default': 'error',

  // We like named exports.
  'import/no-named-export': 'off',

  // We prefer namespaces for modules that have them.
  'import/no-namespace': 'off',

  // Relative paths help us better group code into self-contained modules.
  'import/no-relative-packages': 'off',

  // It's ok to load from ancestors.
  'import/no-relative-parent-imports': 'off',

  // Useful for bootstrapping code, static assets, and the like.
  'import/no-unassigned-import': 'off',

  // We would like to turn this on, but it is not granular enough for our needs:
  // For example, being able to allow types (like Props interfaces) to be
  // exported when unused.
  'import/no-unused-modules': 'off',

  // Make sure our paths are concise.
  'import/no-useless-path-segments': ['warn', { noUselessIndex: true }],

  // HERE BE OPINIONS!
  'import/order': [
    'warn',
    {
      'alphabetize': {
        order: 'asc',
        orderImportKind: 'desc',
      },
      'distinctGroup': true,
      'groups': [
        // 3rd Party
        ['builtin', 'external'],
        // Internal Absolute
        ['internal'],
        // Ancestors
        ['parent'],
        // Current Module
        ['sibling', 'index'],
      ],
      'newlines-between': 'always',
      'pathGroups': [
        // 1st Party (between 3rd Party and Internal Absolute).
        {
          group: 'external',
          pattern: '@COMPANY/**',
          position: 'after',
        },
      ],
      'pathGroupsExcludedImportTypes': ['@COMPANY/**'],
    },
  ],

  // Depends on context.
  'import/prefer-default-export': 'off',

  // Not relevant to our toolchain.
  'import/unambiguous': 'off',
};
