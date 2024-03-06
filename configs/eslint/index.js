// @ts-check

// Once there is wider support for the new configuration format, we should move
// to it, and move all of this out into its own package.
//
// In other words: Once the VS Code plugin's v2.3.x makes it out of beta.

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  overrides: [
    ...require('./parsing/prettier'),
    ...require('./parsing/typescript'),
    ...require('./parsing/react'),
    ...require('./parsing/graphql'),
    ...require('./config/local'),
    ...require('./config/typescript'),
    ...require('./config/javascript'),
    ...require('./config/graphql'),
  ],
};
