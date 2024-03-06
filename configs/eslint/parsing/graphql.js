/** @type {import('eslint').Linter.ConfigOverride[]} */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    processor: '@graphql-eslint/graphql',
  },
  {
    files: ['**/*.{graphql,gql}'],
    parser: '@graphql-eslint/eslint-plugin',
  },
];
