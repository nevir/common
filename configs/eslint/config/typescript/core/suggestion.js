// @ts-check

/**
 * ESLint Core 'Suggestion' Rules
 *
 * @see https://eslint.org/docs/latest/rules/#possible-problems
 *
 * Note that some are overridden by typescript-eslint (and have a
 * `@typescript-eslint/` prefix) in cases where the core rule doesn't correctly
 * support TypeScript sources.
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
  // Sometimes we use getters and setters independently.
  'accessor-pairs': 'off',

  // We prefer that simple functions act as predicates.
  //
  // Aka ['foo', 'bar'].map(s => s.toLocaleUpperCase())
  'arrow-body-style': ['warn', 'as-needed'],

  // TypeScript keeps us honest.
  'block-scoped-var': 'off',

  // Superseded by @typescript-esilnt/naming-convention.
  'camelcase': 'off',

  // This is a bit too draconian; In many cases we prefer proper sentences
  // for comments, but not always (e.g. for short comments).
  'capitalized-comments': 'off',

  // Sometimes we like to hang methods off of classes that don't reference the
  // instance, as an extensibility point, or for consistency.
  'class-methods-use-this': 'off',

  // Too draconian; use your best judgement.
  'complexity': 'off',

  // Not needed these days with arrow functions.
  'consistent-this': 'off',

  // We would prefer to enforce a rule where only short circuits are
  // allowed, and only if they fit on one line; but that conflicts with
  // Prettier, and can't be expressed by ESLint.
  'curly': 'off',

  // Superseded by @typescript-eslint/switch-exhaustiveness-check.
  'default-case': 'off',

  // If you do use `default`, it must be last.
  'default-case-last': 'error',

  // In general, we want to avoid == / != due to their lax behavior, but we do
  // allow a few exceptions.
  'eqeqeq': ['error', 'smart'],

  // It's sometimes helpful to have a more descriptive name than the property,
  // so that the stack is easier to understand.
  'func-name-matching': 'off',

  // If you're using the `function` keyword, you've gotta give the function a
  // name. Use arrow functions otherwise.
  'func-names': ['error', 'always'],

  // Be consistent about how we declare functions.
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

  // If you're defining a setter and getter, you'd best be defining those
  // together.
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],

  // If you're using for … in, you must be careful about the properties that you
  // are enumerating.
  'guard-for-in': 'error',

  // Nothing yet.
  'id-denylist': 'off',

  // We have a lot of nuance here (short variables for predicate functions,
  // loops, etc - long variables elsewhere).
  'id-length': 'off',

  // Superseded by @typescript-esilnt/naming-convention.
  'id-match': 'off',

  // Prefer using ??=, &&=, ||=, etc where possible.
  'logical-assignment-operators': ['warn', 'always', { enforceForIfStatements: true }],

  // We prefer a class per file for clear separation and easy refactoring; but
  // some cases we may want multiple per file (for example: a list of error
  // classes). Use your best judgement.
  'max-classes-per-file': 'off',

  // Too draconian; use your best judgement.
  'max-depth': 'off',

  // Too draconian; use your best judgement.
  'max-lines': 'off',

  // Too draconian; use your best judgement.
  'max-lines-per-function': 'off',

  // Too draconian; use your best judgement.
  'max-nested-callbacks': 'off',

  // Too draconian; use your best judgement.
  'max-params': 'off',

  // Too draconian; use your best judgement.
  'max-statements': 'off',

  // We allow both block comment styles for different contexts:
  //
  // Star style: JSDoc comments for documenting public interfaces.
  //
  // Line style: comments describing behavior of code.
  //
  'multiline-comment-style': 'off',

  // Superseded by @typescript-esilnt/naming-convention.
  'new-cap': 'off',

  // Debugging code.
  'no-alert': 'error',

  // TypeScript keeps us out of trouble.
  'no-bitwise': 'off',

  // We're always in strict mode.
  'no-caller': 'error',

  // Generally we prefer to use if / else if, but switch statements do have
  // their place.
  'no-case-declarations': 'off',

  // When using arrows in contexts that could be confused with comparison
  // operators, enforce that we have a function body to clarify
  'no-confusing-arrow': ['warn', { allowParens: false }],

  // You should be using a logger.
  'no-console': 'error',

  // TypeScript keeps us out of trouble.
  'no-continue': 'off',

  // Not something we really encounter.
  'no-div-regex': 'off',

  // Depending on the complexity of a function, we may want to have an else
  // block so that we have multiple cases of equal visual weight.
  'no-else-return': 'off',

  // Leave a comment if you want an empty block.
  'no-empty': 'error',

  // Likely refactoring error.
  'no-empty-static-block': 'error',

  // Superseded by eqeqeq.
  'no-eq-null': 'off',

  // Security says nope.
  'no-eval': 'error',

  // Super dangerous; use a funcitonal/wrapper style instead.
  'no-extend-native': 'error',

  // Likely refactoring error.
  'no-extra-bind': 'error',

  // Let's be consistent about how we deal with truthy/falsy values.
  'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

  // We really should be avoiding labels at all costs.
  'no-extra-label': 'error',

  // We like implicit coercion.
  'no-implicit-coercion': 'off',

  // Useful to catch accidental globals in script contexts.
  'no-implicit-globals': 'error',

  // We love inline
  'no-inline-comments': 'off',

  // Superseded by no-labels.
  'no-label-var': 'off',

  // There are better and less surprising ways.
  'no-labels': 'error',

  // Likely refactoring error.
  'no-lone-blocks': 'off',

  // We like to keep functions as flat as possible (with as few nested
  // conditions as possible).
  'no-lonely-if': 'warn',

  // Handled by Prettier.
  'no-mixed-operators': 'off',

  // One assignment per line.
  'no-multi-assign': 'error',

  // Use backticks.
  'no-multi-str': 'error',

  // Too draconian; use your best judgement.
  'no-negated-condition': 'off',

  // Helpful; and Prettier helps them stay legible.
  'no-nested-ternary': 'off',

  // Constructors that mutate global state are …concerning.
  'no-new': 'error',

  // Security says nope.
  'no-new-func': 'error',

  // Use {} instead.
  'no-new-object': 'error',

  // Boxed primitives are NOT the same as primitives; they'll get you into
  // trouble.
  'no-new-wrappers': 'error',

  // Handled by Prettier.
  'no-nonoctal-decimal-escape': 'off',

  // Octal numers are certainly not the author's intention.
  'no-octal': 'error',

  // Deprecated in ES5
  'no-octal-escape': 'error',

  // Mutates `arguments`, and is otherwise confusing.
  'no-param-reassign': 'error',

  // Prettier and TypeScript keep us honest.
  'no-plusplus': 'off',

  // Tempting; but sometimes helpful when trying to match program output.
  'no-regex-spaces': 'off',

  // Can't think of any to restrict.
  'no-restricted-exports': 'off',

  // TypeScript only marks `event` as deprecated.
  'no-restricted-globals': ['error', 'event'],

  // Can't think of any to restrict.
  'no-restricted-properties': 'off',

  // Can't think of any to restrict.
  'no-restricted-syntax': 'off',

  // Almost certainly a typo
  'no-return-assign': ['error', 'always'],

  // Security says nope.
  'no-script-url': 'error',

  // Almost certainly a typo; and sequences lead to confusing/hidden behavior.
  'no-sequences': 'error',

  // Things get really confusing for readers otherwise.
  'no-shadow-restricted-names': 'error',

  // You can pry it out of my cold dead fingers!
  'no-ternary': 'off',

  // Variables are initialized to undefined by default.
  'no-undef-init': 'warn',

  // TypeScript keeps us honest.
  'no-undefined': 'off',

  // Superseded by @typescript-esilnt/naming-convention.
  'no-underscore-dangle': 'off',

  // Avoid tautologies.
  'no-unneeded-ternary': 'warn',

  // Superseded by no-labels.
  'no-unused-labels': 'off',

  // call() and apply() should be rarely used.
  'no-useless-call': 'error',

  // Either transform it, or let it bubble.
  'no-useless-catch': 'error',

  // Haven't encountered this in the wild; and it could be nice when trying
  // to make a list of computed/not properties consistent.
  'no-useless-computed-key': 'off',

  // Keep those strings simple!
  'no-useless-concat': 'error',

  // Catches some cases that Prettier does not.
  'no-useless-escape': 'error',

  // Avoid tautologies.
  'no-useless-rename': 'error',

  // Avoid unnecessary statements.
  'no-useless-return': 'error',

  // We're in modern ES these days.
  'no-var': 'error',

  // void is helpful by convention for promises and other TypeScript things.
  'no-void': 'off',

  // Would be nice if we could set it to only allow TODO's that include a URL.
  'no-warning-comments': 'off',

  // Either use { a() {} } or { a: () => {} }, but not { a: function() {} }
  'object-shorthand': ['warn', 'always'],

  // One variable declaration per statement.
  'one-var': ['warn', 'never'],

  // Prefer using +=, -=, *=, etc where possible.
  'operator-assignment': ['warn', 'always'],

  // We prefer callbacks be arrow functions to avoid confusion about `this`,
  // and for a more compact style.
  //
  // If you need to inherit `this`, use a named function.
  'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],

  // Be very explicit about what is assignable.
  'prefer-const': 'warn',

  // Destructuring tends to lead to less repetition and fewer typos.
  'prefer-destructuring': ['warn', { array: false, object: true }],

  // Math.pow is old school.
  'prefer-exponentiation-operator': 'warn',

  // Numeric groups are nice for simple regular expressions.
  'prefer-named-capture-group': 'off',

  // Use ES' numeric literal formats.
  'prefer-numeric-literals': 'warn',

  // Prefer using modern ES features.
  'prefer-object-has-own': 'warn',

  // Prefer using modern ES features.
  'prefer-object-spread': 'warn',

  // Just like we prefer to not throw literals; avoid using rejections as
  // control flow.
  'prefer-promise-reject-errors': 'error',

  // Please use the literal form where possible.
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

  // …splat.
  'prefer-rest-params': 'error',

  // …splat.
  'prefer-spread': 'error',

  // Template strings take just as many characters as string concatenation,
  // and the intention tends to be clearer.
  'prefer-template': 'warn',

  // We target ES5+ environments always.
  'radix': 'off',

  // Too draconian; use your best judgement.
  'require-unicode-regexp': 'off',

  // If you've got a generator, you definitely want to yield.
  'require-yield': 'error',

  // Superseded by eslint-plugin-import.
  'sort-imports': 'off',

  // Too draconian; use your best judgement.
  'sort-keys': 'off',

  // Superseded by 'one-var'.
  'sort-vars': 'off',

  // We like a little margin.
  'spaced-comment': [
    'error',
    'always',
    {
      markers: ['/'],
    },
  ],

  // Enforce strict mode in any context that isn't implicity so.
  'strict': 'error',

  // Aids when debugging.
  'symbol-description': 'error',

  // Too draconian; use your best judgement.
  'vars-on-top': 'off',

  // We prefer left to right conditions.
  'yoda': ['warn', 'never', { exceptRange: true }],
};
