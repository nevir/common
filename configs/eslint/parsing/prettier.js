const prettierXML = require('@prettier/plugin-xml');
const prettier = require('prettier');

const meta = require('../config/meta');

const prettierLanguages = prettier.getSupportInfo().languages;
const prettierExtensionsByLanguage = Object.fromEntries(prettierLanguages.map((l) => [l.name, l.extensions]));
const prettierExtensions = Object.values(prettierExtensionsByLanguage).flat();

/**
 * Our base Prettier configuration.
 *
 * Note that this enumerates all options, because we tend to have opinions about
 * the defaults (we just happen to agree with them).
 *
 * @see https://prettier.io/docs/en/options.html
 * @type {import('prettier').Config}
 */
const prettierConfig = {
  // We prefer that code be wide(ish) - especially because large variable names
  // and types are nicely scannable.
  //
  // But note that we use ESLint to restrict comments and other written prose to
  // a more readable 80 characters.
  printWidth: meta.codeWidth,

  // Community norm.
  tabWidth: 2,

  // This would allow folks to have a preference; but it breaks in too many
  // contexts (such as web renderers).
  useTabs: false,

  // They're not necessary in most contexts; but we're used to them.
  //
  // Might want to revisit this choice as a team.
  semi: true,

  // We prefer ' over " by default: fewer keypresses, and less visual weight.
  singleQuote: true,

  // Keeping quoting styles consistent makes it easier to scan and more likely
  // to notice when things are wrong (e.g. different).
  quoteProps: 'consistent',

  // Be consistent with our regular quoting strategy.
  jsxSingleQuote: true,

  // Ensuring that all lists have trailing commas cuts down on lines changed in
  // diffs, and helps us focus more on what actually changed.
  trailingComma: 'all',

  // Community norm.
  bracketSpacing: true,

  // Helps to differentiate from the props of an element vs its children.
  bracketSameLine: false,

  // Makes functions more consistent, and makes it easier to add types.
  arrowParens: 'always',

  // We prefer our Markdown to be wrapped as well, for more consistent diffing
  // and display in other tools.
  //
  // Note that we override printWidth to be proseWidth when parsing Markdown.
  proseWrap: 'always',

  // \n is more widely supported.
  endOfLine: 'lf',

  plugins: [prettierXML],
};

/**
 * @param {string[]} extensions
 * @return {string}
 */
function extensionGlob(extensions) {
  const extensionsWithoutDot = extensions.map((e) => e.substring(1));

  if (extensionsWithoutDot.length === 1) {
    return `**/*.${extensionsWithoutDot[0]}`;
  } else {
    return `**/*.{${extensionsWithoutDot.join(',')}}`;
  }
}

/** @type {import('eslint').Linter.ConfigOverride[]} */
module.exports = [
  // eslint-plugin-prettier can't infer languages that come from plugins
  //
  // Note that we let regular prettier override this, for cases where it has
  // direct support for languages defined by the plugin (e.g. so that we don't
  // override to the wrong parser).
  ...prettierXML.languages.map((language) => ({
    files: [extensionGlob(language.extensions)],
    plugins: ['prettier'],
    parser: './support/NoOpParser',
    rules: {
      'prettier/prettier': ['warn', { ...prettierConfig, parser: language.parsers[0] }],
    },
  })),
  // We run ALL file types that Prettier understands through ESLint.
  {
    files: [extensionGlob(prettierExtensions)],
    plugins: ['prettier'],
    parser: './support/NoOpParser',
    rules: {
      'prettier/prettier': ['warn', prettierConfig],
    },
  },
  // We have to work around eslint-plugin-prettier's behavior for managing code
  // that is embedded in Markdown/HTML, by forcing the correct plugin to use.
  //
  // See https://github.com/prettier/eslint-plugin-prettier/blob/v4.2.1/eslint-plugin-prettier.js#L161-L223
  {
    files: [extensionGlob(prettierExtensionsByLanguage['Markdown'])],
    rules: {
      'prettier/prettier': ['warn', { ...prettierConfig, printWidth: meta.proseWidth, parser: 'markdown' }],
    },
  },
  {
    files: [extensionGlob(prettierExtensionsByLanguage['HTML'])],
    rules: {
      'prettier/prettier': ['warn', { ...prettierConfig, parser: 'html' }],
    },
  },
  // Let Prettier know about know JSON5 files; so that we can get trailing
  // commas and the like.
  {
    files: ['.vscode/**/*.json', '**/tsconfig*.json', '.common/configs/typescript/**/*.json'],
    rules: {
      'prettier/prettier': [
        'warn',
        {
          ...prettierConfig,
          singleQuote: false,
          quoteProps: 'preserve',
          parser: 'json5',
        },
      ],
    },
  },
];
