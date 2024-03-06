const { RUNNING_IN_IDE } = require('../config/utils');

const TYPESCRIPT_PROJECT_LOCATIONS = [
  './tsconfig*.json',
  './*/tsconfig.json',
  './*/*/tsconfig.json',
];

/** @type {import('eslint').Linter.ConfigOverride[]} */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      project: TYPESCRIPT_PROJECT_LOCATIONS,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: TYPESCRIPT_PROJECT_LOCATIONS,
        },
      },
      // https://github.com/import-js/eslint-plugin-import#importcache
      'import/cache': {
        lifetime: RUNNING_IN_IDE ? 1 : Infinity,
      },
      'import/internal-regex': '^~/',
    },
  },
];
