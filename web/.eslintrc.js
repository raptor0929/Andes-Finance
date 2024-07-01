module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['react-perf', 'relay', '@typescript-eslint', 'import'],
  extends: [
    'airbnb-typescript/base',
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'plugin:relay/strict',
    'next/core-web-vitals',
    "prettier"
  ],
  rules: {
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx', '.mdx'] }],

    // We utilize prop spreading
    'react/jsx-props-no-spreading': 'off',

    // We utilize class properties
    'react/state-in-constructor': 'off',

    // Dont use prop types since were using TypeScript
    'react/default-props-match-prop-types': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'off',

    // Performance: Avoid unnecessary renders
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',

    // We prefer function declarations
    'react/function-component-definition': [
      'off',
      { namedComponents: 'function-declaration', unnamedComponents: 'function-expression' },
      // {
      //   namedComponents: 'arrow-function',
      //   unnamedComponents: 'arrow-function',
      // },
    ],

    // We prefer on/handle named events
    'react/jsx-handler-names': 'off',

    // We require named functions for inferred `displayName`
    // This is required for memo() and forwardRef() usage
    'prefer-arrow-callback': ['off', { allowNamedFunctions: true }],

    'react/jsx-one-expression-per-line': 'off',

    // We dont use flow
    'relay/generated-flow-types': 'off',

    // Shorthand types
    '@typescript-eslint/array-type': ['off', { default: 'array' }],
    '@typescript-eslint/consistent-indexed-object-style': ['off', 'record'],
    '@typescript-eslint/consistent-type-definitions': ['off', 'type'],
    '@typescript-eslint/method-signature-style': ['off', 'property'],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    // Forbid types
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': ['off', { fixToUnknown: true }],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',

    // Readability
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/no-empty-interface': ['off', { allowSingleExtends: false }],
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    // Correctness
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/restrict-plus-operands': ['off', { checkCompoundAssignments: true }],
    '@typescript-eslint/unified-signatures': 'off',

    // Assertions
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/prefer-as-const': 'off',

    // Comments
    '@typescript-eslint/ban-ts-comment': ['off', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'off',
      { path: 'never', types: 'never', lib: 'never' },
    ],

    // Async
    'no-void': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/promise-function-async': 'off',

    // APIs
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    // Hard to migrate
    // Errors for all try/catch blocks and any types from third-parties
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // We prefer React named imports only
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/heading-has-content': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/extensions': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-no-constructed-context-values': 'off',

    // We prefer sorting imports by groups
    'import/order': [
      'off',
      {
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"]
      }
    ],

    // We prefer labels to be associated with inputs
    'jsx-a11y/label-has-associated-control': ['off', {
      'required': {
        'some': ['nesting', 'id']
      }
    }],
    'jsx-a11y/label-has-for': ['off', {
      'required': {
        'some': ['nesting', 'id']
      }
    }]
  },
};
