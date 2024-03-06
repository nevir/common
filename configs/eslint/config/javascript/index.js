// @ts-check

/**
 * Rules specific to only JavaScript files.
 *
 * Note that, by default, we apply JavaScript + TypeScript rules to all js & ts
 * files. So, the rules here are overrides of the TypeScript configuration for
 * only js files.
 *
 * @type {import('eslint').Linter.ConfigOverride[]}
 */
module.exports = [
  {
    files: ['**/*.{js,cjs,jsx}'],
    rules: {
      // require() is allowed in js files (we assume CommonJS).
      '@typescript-eslint/no-require-imports': 'off',

      // Doesn't work in js files (with JSDoc).
      '@typescript-eslint/no-unsafe-argument': 'off',

      // Doesn't work in js files (with JSDoc).
      '@typescript-eslint/no-unsafe-assignment': 'off',

      // Doesn't work in js files (with JSDoc).
      '@typescript-eslint/no-unsafe-call': 'off',

      // Doesn't work in js files (with JSDoc).
      '@typescript-eslint/no-unsafe-member-access': 'off',

      // Doesn't work in js files (with JSDoc).
      '@typescript-eslint/no-unsafe-return': 'off',

      // Doesn't work in js files (with JSDoc).
      '@typescript-eslint/restrict-plus-operands': 'off',

      // Doesn't work in js files (with JSDoc).
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
];
