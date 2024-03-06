// @ts-check

/**
 * typescript-eslint 'Suggestion' Rules
 *
 * @see https://typescript-eslint.io/rules/
 *
 * Note that some of these rules are overrides of core rules for cases where the
 * core rule doesn't correctly support TypeScript sources.
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
  // If you're defining overloads, please define them together.
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // Consistent style for array types
  '@typescript-eslint/array-type': ['warn', { default: 'array' }],

  // We don't use TSLint.
  '@typescript-eslint/ban-tslint-comment': 'error',

  // Boxed types are never what you want.
  '@typescript-eslint/ban-types': 'error',

  // Consistent style for new object assignments.
  '@typescript-eslint/consistent-generic-constructors': ['warn', 'constructor'],

  // We prefer index signature style, as you can add a bit of extra
  // documentation by naming the key (as `id`, etc).
  '@typescript-eslint/consistent-indexed-object-style': ['warn', 'index-signature'],

  // Prefer `value as Type` over `<Type>value` to be consistent with our React
  // code.
  '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],

  // We prefer interfaces for object definitions; as it enables declaration
  // merging.
  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

  // Be explicit about whether an exported thing is a type or a value. This
  // allows transpilers (like esbuild/vite/etc) to strip type-only exports.
  '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: false }],

  // Be explicit about whether an imported thing is a type or a value. This
  // allows transpilers (like esbuild/vite/etc) to strip type-only imports.
  '@typescript-eslint/consistent-type-imports': [
    'warn',
    { fixStyle: 'separate-type-imports', prefer: 'type-imports' },
  ],

  // Enforcing optional/default params to be last ensures that we're not
  // explicitly passing undefineds for optional arguments.
  '@typescript-eslint/default-param-last': 'error',

  // We use dot notation to express known/declared properties, and square
  // brace notation to express indexed (unknown) properties.
  '@typescript-eslint/dot-notation': 'off',

  // TypeScript keeps us honest.
  '@typescript-eslint/init-declarations': 'off',

  // Let's figure this one out later.
  '@typescript-eslint/member-ordering': 'off',

  // Prefer the property style, as we get contravariant parameter checking for
  // functions (rather than bivariant); which is more strictly correct.
  //
  // See https://github.com/microsoft/TypeScript/pull/18654
  '@typescript-eslint/method-signature-style': ['warn', 'property'],

  // HERE BE OPINIONS!
  '@typescript-eslint/naming-convention': [
    'error',

    // Variables are always camelCase (or PascalCase for Class references)…
    {
      format: ['camelCase', 'PascalCase'],
      selector: ['variable'],
    },

    // …and exported variables, which we sometimes need to map to names of
    // types.
    {
      format: ['camelCase', 'PascalCase'],
      modifiers: ['exported'],
      selector: ['variable'],
    },

    // …except global const variables, which can be either UPPER_CASE to
    // indicate 'static' configuration, or camelCase to indicate shared global
    // state.
    {
      format: ['camelCase', 'UPPER_CASE'],
      modifiers: ['global', 'const'],
      selector: ['variable'],
    },

    // …and the same for exported const values (but also support types).
    {
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      modifiers: ['exported', 'const'],
      selector: ['variable'],
    },

    // Functions (and methods) are always camelCase…
    {
      format: ['camelCase'],
      selector: ['function', 'classMethod', 'typeMethod'],
    },

    // …except for React components (which we identify as best we can).
    {
      format: ['camelCase', 'PascalCase'],
      modifiers: ['global', 'const'],
      selector: ['variable', 'function'],
      types: ['function'],
    },

    // Function parameters are always camelCase or PascalCase (e.g. a Class)…
    {
      format: ['camelCase', 'PascalCase'],
      selector: ['parameter', 'parameterProperty'],
    },

    // …unless they're unused, in which case they must be prefixed with a _.
    {
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'require',
      modifiers: ['unused'],
      selector: ['parameter'],
    },

    // Properties must be always camelCase (even private ones)…
    {
      format: ['camelCase'],
      selector: ['classProperty', 'accessor'],
    },

    // …except that for object literals (or types describing them), anything
    // flies.
    //
    // We'd love to be more restrictive here; but we interact with various
    // configuration structures, and data from 3rd party.
    //
    // Also, this rule is taking a hard stance on not allowing quotes to
    // circumvent it:
    //
    // > Note that there is no way to ignore any name that is quoted - only
    // > names that are required to be quoted. This is intentional - adding
    // > quotes around a name is not an escape hatch for proper naming.
    //
    // https://typescript-eslint.io/rules/naming-convention/#ignore-properties-that-require-quotes
    //
    // {
    //   format: ['???'], selector: ['objectLiteralProperty', 'typeProperty'],
    // },

    // Classes (and interfaces) are PascalCase.
    {
      format: ['PascalCase'],
      selector: ['class', 'interface'],
    },

    // Enums are PascalCase…
    {
      format: ['PascalCase'],
      selector: ['enum'],
    },

    // …as are their properties.
    {
      format: ['PascalCase'],
      selector: ['enumMember'],
    },

    // Type declarations are PascalCase.
    {
      format: ['PascalCase'],
      selector: ['typeAlias'],
    },

    // Enforce that type parameters have a descriptive name, beginning with T,
    // in to disambiguate them.
    {
      format: ['PascalCase'],
      prefix: ['T'],
      selector: ['typeParameter'],
    },
  ],

  // We'd prefer that you use the literal notation.
  '@typescript-eslint/no-array-constructor': 'off',

  // Avoid stringifying to [Object object].
  '@typescript-eslint/no-base-to-string': 'error',

  // We generally don't use delete; but when we do, sometimes we want to do it
  // for dynamic types.
  '@typescript-eslint/no-dynamic-delete': 'off',

  // There are too many edge cases where it can be useful to have an empty
  // function.
  '@typescript-eslint/no-empty-function': 'off',

  // Nice to have placeholders.
  '@typescript-eslint/no-empty-interface': 'off',

  // Oof. This may be too draconian; but let's see how we fare…
  '@typescript-eslint/no-explicit-any': 'error',

  // We generally prefer functional styles (or classes that are maintaining
  // state / dependencies).
  '@typescript-eslint/no-extraneous-class': 'error',

  // Security says nope.
  '@typescript-eslint/no-implied-eval': 'error',

  // No need to explicitly declare types that are inferrable from literals;
  // except function parameters (e.g. documentation).
  '@typescript-eslint/no-inferrable-types': ['warn', { ignoreParameters: true, ignoreProperties: true }],

  // Catch confusing cases where we're referencing the wrong (last) value of a
  // loop within a closure.
  '@typescript-eslint/no-loop-func': 'error',

  // We definitely prefer that magic numbers are defined as constants, so that
  // their meaning is documented; but this rule does not have enough finesse to
  // enforce that consistently.
  '@typescript-eslint/no-magic-numbers': 'off',

  // If we're signalling intent to discard a value with void; make sure that
  // that's actually the case.
  '@typescript-eslint/no-meaningless-void-operator': 'error',

  // Namespaces can be a handy way of grouping configuration with values.
  '@typescript-eslint/no-namespace': 'off',

  // This helps us catch cases where we're assuming types to not be included in
  // a larger set, but when they actually are.
  '@typescript-eslint/no-redundant-type-constituents': 'error',

  // Superseded by eslint-plugin-import.
  '@typescript-eslint/no-restricted-imports': 'off',

  // This rule is a bit too pedantic:
  // https://typescript-eslint.io/rules/no-shadow#why-does-the-rule-report-on-enum-members-that-share-the-same-name-as-a-variable-in-a-parent-scope
  '@typescript-eslint/no-shadow': 'off',

  // If you really need to do it, it's ok, but discouraged.
  '@typescript-eslint/no-this-alias': 'off',

  // We like type aliases; and the type vs interface pattern is handled by
  // @typescript-eslint/consistent-type-definitions.
  '@typescript-eslint/no-type-alias': 'off',

  // We prefer concise conditions over `value === true`.
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',

  // Capture a bunch of refactoring mistakes.
  '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],

  // Consistent style for namespace/enum prefixing.
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  // When you're using a default value of a parameter; omit it.
  '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

  // Tautologies are tautologies.
  '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

  // Superseded by @typescript-eslint/no-explicit-any.
  '@typescript-eslint/no-unnecessary-type-constraint': 'off',

  // Executing code that has no visible side effect is usually an error.
  '@typescript-eslint/no-unused-expressions': 'error',

  // Can be handy to force modulization for declaration files.
  '@typescript-eslint/no-useless-empty-export': 'off',

  // !
  '@typescript-eslint/non-nullable-type-assertion-style': 'warn',

  // Clearer intent (and less typing) when making a literal type from a literal
  // value.
  '@typescript-eslint/prefer-as-const': 'warn',

  // Sometimes we like assigned enums, and some times we like opaque values.
  '@typescript-eslint/prefer-enum-initializers': 'off',

  // If you're just iterating values …use an iterator.
  '@typescript-eslint/prefer-for-of': 'error',

  // This is our preferred style.
  '@typescript-eslint/prefer-function-type': 'warn',

  // includes() conveys intent better than indexOf(…) !== -1.
  '@typescript-eslint/prefer-includes': 'warn',

  // Avoid confusion where enums are shadowing other variables; and a
  // non-literal enum should likely be a configuration object instead.
  '@typescript-eslint/prefer-literal-enum-member': 'error',

  // `module` is a super confusing term in modern TypeScript.
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // Use ?? over || where it makes sense; and gets folks more used to it.
  '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreTernaryTests: false }],

  // Elvis is in the house, baby.
  '@typescript-eslint/prefer-optional-chain': 'error',

  // It's nice, but it's a lot of noise for only private properties.
  '@typescript-eslint/prefer-readonly': 'off',

  // This is nice from a correctness point of view, but gets extremely verbose
  // extremely quickly; and maintaing const correctness requires a lot of
  // cognitive overhead.
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // Be consistent about how we use regular expressions; and a mild perf
  // micro-optimization.
  '@typescript-eslint/prefer-regexp-exec': 'error',

  // If we're returning our own type; prefer `this`: method chaining is the
  // norm, and factories that return themselves are …confusing.
  '@typescript-eslint/prefer-return-this-type': 'error',

  // Better conveys intent.
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

  // Enforce that async functions only have to deal in rejected promises, and
  // not thrown exceptions too.
  '@typescript-eslint/promise-function-async': 'off',

  // Nope; sometimes it's helpful to force a function to return a promise, or
  // ensure a consistent interface where only some functions do async things.
  '@typescript-eslint/require-await': 'off',

  // Too draconian.
  '@typescript-eslint/sort-type-constituents': 'off',

  // TypeScript keeps us honest here.
  '@typescript-eslint/strict-boolean-expressions': 'off',

  // Super helpful when dealing with enums & unions.
  '@typescript-eslint/switch-exhaustiveness-check': 'error',

  // Rarely used; but sometimes useful for libs.
  '@typescript-eslint/triple-slash-reference': [
    'error',
    { lib: 'always', path: 'never', types: 'prefer-import' },
  ],

  // Superseded by @typescript-eslint/no-inferrable-types.
  '@typescript-eslint/typedef': 'off',

  // Can be helpful when documenting different function signatures.
  '@typescript-eslint/unified-signatures': 'off',
};
