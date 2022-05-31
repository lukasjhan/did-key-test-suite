module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint-config-digitalbazaar',
    'eslint-config-digitalbazaar/jsdoc',
    'digitalbazaar/module',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
};
