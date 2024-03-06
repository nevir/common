/**
 * All rules that the ESLint React plugin supports.
 *
 * @see https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
 *
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // We prefer simple flags (e.g. `disabled` over `isDisabled`), which keeps our
  // property names consistent with regular HTML, and a little easier to read as
  // explcit properties when constructing components.
  'react/boolean-prop-naming': [
    'error',
    {
      message: `Prefer simple flag names ('disabled', 'primary') over compound flag names ('isDisabled', 'isPrimary').`,
      rule: '^(?!(is|has)[A-Z])',
    },
  ],

  // Be explicit about the browser-defined behaior of the button. Generally we
  // want type=button vs type=submit.
  //
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
  'react/button-has-type': ['error'],

  // Make sure our defaultProps are correctly defined
  //
  //  …if we ever end up using them (e.g. in classical components).
  'react/default-props-match-prop-types': 'error',

  // A bit too draconian; use your best judgement.
  'react/destructuring-assignment': 'off',

  // If you're defining classical or non-JSX components, please include a valid
  // displayName.
  'react/display-name': 'error',

  // Forbid some built in properties that have overriden equivalents.
  'react/forbid-component-props': [
    'error',
    {
      forbid: [
        // Please use Emotion's css prop instead.
        { message: 'Please use the css prop instead', propName: 'style' },
      ],
    },
  ],

  // Forbid some built in properties that have overriden equivalents.
  'react/forbid-dom-props': [
    'error',
    {
      forbid: [
        // Please use Emotion's css prop instead.
        { message: 'Please use the css prop instead', propName: 'style' },
      ],
    },
  ],

  // Nothing is off limits for now.
  'react/forbid-elements': 'off',

  // Not relevant in a TypeScript world.
  'react/forbid-foreign-prop-types': 'off',

  // Make sure our propTypes are not too generic.
  //
  //  …if we ever end up using them (e.g. in classical components).
  'react/forbid-prop-types': ['error', { forbid: ['any', 'array', 'object'] }],

  // Consistent functional component style.
  'react/function-component-definition': [
    'warn',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],

  // Enforce symmetic naming and usage of the useState hook.
  'react/hook-use-state': ['error', { allowDestructuredState: true }],

  // Security says yup.
  'react/iframe-missing-sandbox': 'error',

  // We prefer the compact form for true props.
  'react/jsx-boolean-value': ['warn', 'never'],

  // No curlies unless they're required. …except when that's confusing (element
  // props).
  'react/jsx-curly-brace-presence': [
    'warn',
    { children: 'never', propElementValues: 'always', props: 'never' },
  ],

  // We prefer the fragment shorthand.
  'react/jsx-fragments': ['warn', 'syntax'],

  // Consistent naming of event handling functions.
  'react/jsx-handler-names': [
    'error',
    {
      checkInlineFunction: true,
      checkLocalVariables: true,
      eventHandlerPrefix: 'on',
      eventHandlerPropPrefix: 'on',
    },
  ],

  // You'd better pass a useful key prop to lists of elements!
  'react/jsx-key': ['error', { checkFragmentShorthand: true, warnOnDuplicates: true }],

  // Use your best judgement.
  'react/jsx-max-depth': 'off',

  // Avoid generating new functions to pass to components on each render; this
  // can be a severe performance impact (especially when many components in the
  // hierarchy are generating new function instances).
  //
  // In general: event handlers should be either static functions, or hidden
  // behind useCallback().
  //
  // However: this rule may become too annoying …let's see how it goes.
  'react/jsx-no-bind': ['error', { ignoreRefs: true }],

  // Don't accidentially inject debugging information into the DOM as HTML
  // comments.
  //
  // Note this can be overridden by
  // {'/* enclosing the comment in single quotes */'}
  'react/jsx-no-comment-textnodes': 'error',

  // We want to be very explicit about when context providers trigger a
  // re-render.
  'react/jsx-no-constructed-context-values': 'off',

  // Catch (some) cases where we might render a value (e.g. a number) used as a
  // truthy condition to render (or not) a component.
  'react/jsx-no-leaked-render': 'error',

  // Superseded by react/jsx-curly-brace-presence. (We're not enforcing i18n
  // strategies for now).
  'react/jsx-no-literals': 'off',

  // Security says nope.
  'react/jsx-no-script-url': 'error',

  // Security says nope.
  'react/jsx-no-target-blank': 'error',

  // Likely refactoring error.
  'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],

  // Superseded by @typescript-eslint/naming-convention.
  'react/jsx-pascal-case': 'off',

  // TypeScript keeps us honest.
  'react/jsx-props-no-spreading': 'off',

  // Too draconian; use your best judgement.
  'react/jsx-sort-props': 'off',

  // Unnecessary with the new JSX transform.
  'react/jsx-uses-react': 'off',

  // Make sure we're correctly batching updates to state.
  'react/no-access-state-in-setstate': 'error',

  // Sometimes this can be desired.
  'react/no-adjacent-inline-elements': 'off',

  // Sometimes we really don't care about having list elements that can be
  // reordered in an efficent way. Use your best judgement.
  'react/no-array-index-key': 'off',

  // Simplifies callbacks in classical components, if/when we use them.
  'react/no-arrow-function-lifecycle': 'warn',

  // Consistent children prop style (use the syntax variant).
  'react/no-children-prop': 'warn',

  // If we're using these, it's already pretty clear that we're doing dangerous
  // things and (hopefully) know what we're doing.
  'react/no-danger': 'off',

  // Using __html / etc and children at the same time is ambiguous.
  'react/no-danger-with-children': 'error',

  // Ensure our classical components aren't triggering unnecessary extra
  // renders.
  'react/no-did-mount-set-state': 'error',

  // Ensure our classical components aren't triggering unnecessary extra
  // renders.
  'react/no-did-update-set-state': 'error',

  // Touching this.state directly in classical components is going to lead to
  // very confusing behavior.
  'react/no-direct-mutation-state': 'error',

  // Little bit of extra type safety.
  'react/no-invalid-html-attribute': 'error',

  // We don't support createReactClass().
  'react/no-is-mounted': 'off',

  // It can be quite helpful to have a few small helper components in the same
  // file.
  'react/no-multi-comp': 'off',

  // Avoid performance pitfalls where non-primitive default values are
  // re-created each render (likely causing re-renders themselves).
  'react/no-object-type-as-default-prop': 'error',

  // PureComponent handles shouldComponentUpdate for you.
  'react/no-redundant-should-component-update': 'error',

  // Component state is great!
  'react/no-set-state': 'off',

  // We use functional components 99% of the time, so let's be consistent and
  // use ref functions everywhere.
  'react/no-string-refs': ['error', { noTemplateLiterals: true }],

  // In the off chance we're creating classical components…
  'react/no-typos': 'error',

  // If you're using them, it's pretty clear that you're doing something
  // advanced and (hopefully) know what you're doing.
  'react/no-unsafe': 'off',

  // Components whose prototype changes on each render lead to a world of hurt
  // and subtle bugs…
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

  // Can be useful when grabbing a ref to a classical component.
  'react/no-unused-class-component-methods': 'off',

  // Some extra type safety on our component props.
  'react/no-unused-prop-types': 'error',

  // Some extra type safety for our classical components.
  'react/no-unused-state': 'error',

  // Ensure our classical components aren't triggering unnecessary extra
  // renders.
  'react/no-will-update-set-state': 'error',

  // If you're creating classical components, prefer the class syntax.
  'react/prefer-es6-class': ['error', 'always'],

  // It can be helpful for helper components to accept more props than they
  // render.
  'react/prefer-exact-props': 'off',

  // Is nice; but too verbose.
  'react/prefer-read-only-props': 'off',

  // Unless you really really need a classical component for lifecycle hooks,
  // please use a functional component.
  'react/prefer-stateless-function': 'error',

  // Unnecessary with the new JSX transform.
  'react/react-in-jsx-scope': 'off',

  // If you're writing a classical component, you'd best believe you're also
  // making sure that you're not excessively rendering.
  'react/require-optimization': 'error',

  // Prefer self-closing components where possible.
  'react/self-closing-comp': 'warn',

  // We don't use classical components enough for this to be worth specifying.
  'react/sort-comp': 'off',

  // Can be helpful to group them in various ways; use your best judgement.
  'react/sort-default-props': 'off',

  // Can be helpful to group them in various ways; use your best judgement.
  'react/sort-prop-types': 'off',

  // We don't use classical components enough for this to be worth specifying.
  'react/static-property-placement': 'off',

  // Unfortunately not yet enforced by TypeScript
  'react/void-dom-elements-no-children': 'error',
};
