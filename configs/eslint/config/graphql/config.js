const { RUNNING_IN_IDE } = require('../utils');

/**
 * All rules that the ESLint GraphQL plugin supports.
 *
 * @see https://github.com/B2o5T/graphql-eslint/blob/master/website/src/pages/rules/index.md
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Too draconian; use your best judgement.
  '@graphql-eslint/alphabetize': 'off',

  // If we use type descriptions, use a consistent style.
  '@graphql-eslint/description-style': ['error', { style: 'block' }],

  // Would like to turn this on, but it's difficult to target only operations.
  //
  // No defining types/etc within operation documents.
  '@graphql-eslint/executable-definitions': 'off',

  // Make sure you're specifying known fields.
  '@graphql-eslint/fields-on-correct-type': 'error',

  // Make sure we're defining fragments on appropriate types.
  '@graphql-eslint/fragments-on-composite-type': 'error',

  // Something to consider; but let's see what patterns shake out, first.
  '@graphql-eslint/input-name': 'off',

  // Make sure you're using only known arguments on a field.
  '@graphql-eslint/known-argument-names': 'error',

  // Gotta use directives that are defined by the schema.
  '@graphql-eslint/known-directives': 'error',

  // Make sure that we're using defined fragments.
  '@graphql-eslint/known-fragment-names': 'error',

  // Make sure that we're using defined types.
  '@graphql-eslint/known-type-names': 'error',

  // Anonymous operations can be the only operation.
  '@graphql-eslint/lone-anonymous-operation': 'error',

  // One operation per document; however, the message is super confusing:
  //
  //   "Query "MyQuery" should be in a separate file"
  //
  // …so we have this disabled for now.
  // '@graphql-eslint/lone-executable-definition': ['error', { ignore: ['fragment'] }],
  '@graphql-eslint/lone-executable-definition': 'off',

  // Shouldn't even be declaring schema {} (that's automatic), but just in case…
  '@graphql-eslint/lone-schema-definition': 'error',

  // Something to consider; but let's see what patterns shake out, first.
  '@graphql-eslint/match-document-filename': 'off',

  // HERE BE OPINIONS!
  '@graphql-eslint/naming-convention': [
    'error',
    {
      Argument: { style: 'camelCase' },
      DirectiveDefinition: { style: 'camelCase' },
      EnumValueDefinition: { style: 'UPPER_CASE' },
      FieldDefinition: { style: 'camelCase' },
      FragmentDefinition: { style: 'PascalCase' },
      InputValueDefinition: { style: 'camelCase' },
      OperationDefinition: { style: 'PascalCase' },
      VariableDefinition: { style: 'camelCase' },
      types: { style: 'PascalCase' },
    },
  ],

  // Ensure that all operations have a name.
  '@graphql-eslint/no-anonymous-operations': 'error',

  // Prevent duplicate enum values (and also confusing ones).
  '@graphql-eslint/no-case-insensitive-enum-values-duplicates': 'error',

  // Make sure that we migrate away from deprecated fields.
  '@graphql-eslint/no-deprecated': 'error',

  // Make sure that our selection sets are unique.
  '@graphql-eslint/no-duplicate-fields': 'error',

  // Cyclic fragments …cause problems.
  '@graphql-eslint/no-fragment-cycles': 'error',

  // We prefer """ descriptions """ for types so that it shows up in docs.
  '@graphql-eslint/no-hashtag-description': 'error',

  // Fragments can be helpful for organizing an operation.
  '@graphql-eslint/no-one-place-fragments': 'off',

  // We like all operation types.
  '@graphql-eslint/no-root-type': 'off',

  // Something to consider; but let's see what patterns shake out, first.
  '@graphql-eslint/no-scalar-result-type-on-mutation': 'off',

  // Avoid redundant prefixes in field names; and fit the expectations of apollo
  // client (e.g. the 'id' field).
  '@graphql-eslint/no-typename-prefix': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/no-undefined-variables': 'error',

  // Help catch refactoring errors.
  '@graphql-eslint/no-unreachable-types': RUNNING_IN_IDE ? 'off' : 'error',

  // Sometimes we want to roll things out before they're in use; or provide
  // things for debugging purposes.
  '@graphql-eslint/no-unused-fields': 'off',

  // Help catch refactoring errors.
  '@graphql-eslint/no-unused-fragments': 'error',

  // Help catch refactoring errors.
  '@graphql-eslint/no-unused-variables': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/one-field-subscriptions': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/overlapping-fields-can-be-merged': 'error',

  // Make sure we use fragments on the correct types.
  '@graphql-eslint/possible-fragment-spread': 'error',

  // Make sure our type exstensions are correct.
  '@graphql-eslint/possible-type-extension': 'error',

  // Ensure that we call a field with all of its required arguments.
  '@graphql-eslint/provided-required-arguments': 'error',

  // If we use connections, let's stick to Relay conventions (also helpful for
  // various client side tools).
  '@graphql-eslint/relay-arguments': 'error',

  // If we use connections, let's stick to Relay conventions (also helpful for
  // various client side tools).
  '@graphql-eslint/relay-connection-types': 'error',

  // Something to consider; but let's see what patterns shake out, first.
  '@graphql-eslint/relay-edge-types': 'off',

  // We either have it, or we don't. No need to lint every time.
  '@graphql-eslint/relay-page-info': 'off',

  // We don't need that level of strictness.
  '@graphql-eslint/require-deprecation-date': 'off',

  // It's important to tell consumers what to use instead.
  '@graphql-eslint/require-deprecation-reason': 'error',

  // Something to consider; but let's see what patterns shake out, first.
  '@graphql-eslint/require-description': 'off',

  // Ideally yes, but let's talk about it first.
  '@graphql-eslint/require-field-of-type-query-in-mutation-result': 'off',

  // Ensure that we are ALWAYS selecting an id when it is on a type, so that
  // apollo-client's cache stays stable.
  '@graphql-eslint/require-id-when-available': 'error',

  // @oneOf with a required field doesn't make sense.
  '@graphql-eslint/require-nullable-fields-with-oneof': 'error',

  // Too draconian; use your best judgement.
  '@graphql-eslint/require-type-pattern-with-oneof': 'off',

  // The server would throw an error in this case.
  '@graphql-eslint/scalar-leafs': 'error',

  // Too draconian; but ideally yes.
  '@graphql-eslint/selection-set-depth': 'off',

  // Too draconian; but let's also see how our patterns shake out.
  '@graphql-eslint/strict-id-in-types': 'off',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-argument-names': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-directive-names': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-directive-names-per-location': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-enum-value-names': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-field-definition-names': 'error',

  // Avoid confusion (and also deal with auto-magic fragment lookup by
  // apollo-client).
  //
  // Note that this doesn't refresh well when running inside the IDE; just
  // moving code around can trigger it.
  '@graphql-eslint/unique-fragment-name': RUNNING_IN_IDE ? 'off' : 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-input-field-names': 'error',

  // Ensure that all operations have a unique name.
  //
  // Note that this doesn't refresh well when running inside the IDE; just
  // moving code around can trigger it.
  '@graphql-eslint/unique-operation-name': RUNNING_IN_IDE ? 'off' : 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-operation-types': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-type-names': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/unique-variable-names': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/value-literals-of-correct-type': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/variables-are-input-types': 'error',

  // The server would throw an error in this case.
  '@graphql-eslint/variables-in-allowed-position': 'error',
};
