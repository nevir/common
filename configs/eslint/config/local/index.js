/**
 * Configuration for our local rules (implemented in ../rules).
 *
 * @type {import('eslint').Linter.ConfigOverride[]}
 * */
module.exports = [
  {
    files: ['**/.vscode/settings.json'],
    plugins: ['local'],
    rules: {
      // Make sure that we flip back to hiding config entries in VS Code before
      // committing to main.
      'local/vscode-exclude-files': 'error',
    },
  },
];
