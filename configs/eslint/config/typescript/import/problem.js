// @ts-check

const meta = require('../../meta');

/**
 * ESLint Import 'Possible Problem' Rules
 *
 * @see https://github.com/import-js/eslint-plugin-import#rules
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Prefer only one import line per file.
  'import/no-duplicates': ['warn', { 'prefer-inline': false }],

  // Disabled until we can get it working with the monorepo layout.
  //
  // By default, you can only access production dependencies …unless this is a
  // test or part of the toolchain.
  // 'import/no-extraneous-dependencies': [
  //   'error',
  //   {
  //     devDependencies: [
  //       '**/__tests__/**',
  //       '**/scripts/**',
  //       '**/*.config.*',
  //       // Temporary until we move this configuration out.
  //       '**/.common/**',
  //     ],
  //     packageDir: ['.', './web', './api'],
  //   },
  // ],
  'import/no-extraneous-dependencies': 'off',

  // Likely typo; and confusing regardless.
  'import/no-named-as-default': 'error',

  // For now, there's not engough consistency between projects to turn this on
  // globally; it's really up to the structure of each project.
  'import/no-restricted-paths': 'off',

  // Generally a refactoring problem, and also can lead to performance problems
  // (importing the world).
  'import/no-self-import': 'error',

  // We don't use Webpack.
  'import/no-webpack-loader-syntax': 'off',
};
