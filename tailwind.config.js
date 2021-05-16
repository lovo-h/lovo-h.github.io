import AddBaseRootPlugin from './dev/tailwindcss/AddBaseRootPlugin';

module.exports = {
  content: [ './src/**/*.{html,js}' ],
  theme: {
    extend: {}
  },
  plugins: [
    AddBaseRootPlugin,
  ]
};
