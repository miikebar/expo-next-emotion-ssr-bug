// @generated: @expo/next-adapter@2.1.69
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');

// Without module transpilation we get the following error:
// ...\node_modules\react-native\index.js:13
// import typeof AccessibilityInfo from './Libraries/Components/AccessibilityInfo/AccessibilityInfo';
// ^^^^^^
// SyntaxError: Cannot use import statement outside a module
// ...
// at Object.@emotion/native
const withTM = require('next-transpile-modules')(['@emotion/native'])

module.exports = withTM(withExpo({
  projectRoot: __dirname,
}));
