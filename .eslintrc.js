module.exports = {
  env: {
    'cypress/globals': true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['views', './src/views'],
          ['assets', './src/assets'],
          ['mocks', './src/mocks'],
          ['graphql', './src/graphql'],
          ['components', './src/components'],
          ['storage', './src/storage'],
          ['common', './src/common'],
          ['__mocks__', './src/__mocks__'],
        ],
        extensions: ['.js', '.tsx', '.json'],
      },
    },
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'cypress'],
  rules: {
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'function-paren-newline': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'react/jsx-one-expression-per-line': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
