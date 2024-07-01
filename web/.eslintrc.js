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
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx', '.mdx'] }],

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
    'react-perf/jsx-no-new-array-as-prop': 'warn',
    'react-perf/jsx-no-new-function-as-prop': 'warn',

    // We prefer function declarations
    'react/function-component-definition': [
      'warn',
      { namedComponents: 'function-declaration', unnamedComponents: 'function-expression' },
      // {
      //   namedComponents: 'arrow-function',
      //   unnamedComponents: 'arrow-function',
      // },
    ],

    // We prefer on/handle named events
    'react/jsx-handler-names': 'warn',

    // We require named functions for inferred `displayName`
    // This is required for memo() and forwardRef() usage
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],

    'react/jsx-one-expression-per-line': 'off',

    // We dont use flow
    'relay/generated-flow-types': 'off',

    // Shorthand types
    '@typescript-eslint/array-type': ['warn', { default: 'array' }],
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    '@typescript-eslint/no-inferrable-types': 'warn',

    // Forbid types
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: true }],
    '@typescript-eslint/no-invalid-void-type': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',

    // Readability
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: false }],
    '@typescript-eslint/no-parameter-properties': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',

    // Correctness
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    '@typescript-eslint/restrict-plus-operands': ['warn', { checkCompoundAssignments: true }],
    '@typescript-eslint/unified-signatures': 'warn',

    // Assertions
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',

    // Comments
    '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-expect-error': 'allow-with-description' }],
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/triple-slash-reference': [
      'warn',
      { path: 'never', types: 'never', lib: 'never' },
    ],

    // Async
    'no-void': 'off',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/promise-function-async': 'warn',

    // APIs
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

    // Hard to migrate
    // Errors for all try/catch blocks and any types from third-parties
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // We prefer React named imports only
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',

    // We prefer sorting imports by groups
    'import/order': [
      'warn',
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
    'jsx-a11y/label-has-associated-control': ['warn', {
      'required': {
        'some': ['nesting', 'id']
      }
    }],
    'jsx-a11y/label-has-for': ['warn', {
      'required': {
        'some': ['nesting', 'id']
      }
    }]
  },
};
