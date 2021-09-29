module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  //extends: ["standard", "standard-jsx"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "off",
    indent: "off",
    "no-tabs": 0,
    semi: 0,
    quotes: "off",
    "space-before-function-paren": ["error", "never"],
    "spaced-comment": 0,
    "comma-spacing": "off",
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "never", {arraysInObjects: true,objectsInObjects: true}],
    "computed-property-spacing": ["error", "never"],
    "comma-dangle": [2, "always-multiline"],
    "react/prop-types": "off",
  },
};
