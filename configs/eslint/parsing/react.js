/** @type {import('eslint').Linter.ConfigOverride[]} */
module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
