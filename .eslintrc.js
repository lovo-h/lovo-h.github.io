module.exports = {
  // Specify environments so ESLint knows what globals are available
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // Additional ESLint plugins
  plugins: [ 'react', 'react-hooks', 'import' ],
  // Use recommended rule sets from ESLint and React
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended'
  ],
  // Parser options tell ESLint how to parse your code
  parserOptions: {
    ecmaVersion: 'latest', // or 2021, 2022, etc.
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // Enable JSX
    }
  },
  // Settings for React version detection
  settings: {
    react: {
      version: 'detect' // Automatically detect the version of React
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.dev.js' // Path to your webpack config
      },
      alias: {
        map: [
          [ 'components', './src/app/components' ],
          [ 'pages', './src/app/pages' ],
          [ 'assets', './src/app/assets' ]
        ]
      },
      extensions: [ '.js' ]
    }
  },
  // Override or add specific rules here
  rules: {
    'quotes': [ 'error', 'single' ],
    'react/prop-types': 'off',
    'space-in-parens': [ 'error', 'always', { exceptions: [ 'empty' ] } ],
  }
};
