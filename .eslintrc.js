module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    packageManager: 'yarn',
  },
  plugins: ['react', 'standard', 'prettier'],
  rules: {
    eqeqeq: ['error', 'always'],
    'prefer-const': 2,
    strict: ['error', 'global'],
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-typos': 2,
    'react/no-this-in-sfc': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unsafe': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/prefer-stateless-function': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/require-render-return': 2,
    'react/sort-prop-types': 2,
    'react/void-dom-elements-no-children': 2,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': [
      2,
      {
        allowGlobals: true,
      },
    ],
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-default-props': 2,
    'react/sort-comp': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-uses-vars': 2,
    'no-console': 2,
    'no-template-curly-in-string': 2,
    'key-spacing': 0,
    'no-new-wrappers': 2,
    'no-unused-expressions': 0,
    'no-unused-vars': 2,
    'no-case-declarations': 0,
  },
  globals: {
    APPCONFIG: true,
    SURVEYID: true,
    LANGUAGECODE: true,
    CAPTIONS: true,
    SAVED_REPORTID: true,
  },
}
