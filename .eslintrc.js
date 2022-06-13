module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "no-debugger": "error",
    "vue/no-setup-props-destructure": "off",
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        printWidth: 100,
        htmlWhitespaceSensitivity: "ignore",
        arrowParens: "avoid",
        jsxSingleQuote: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "vue/multi-word-component-names": "off",
  },
  globals: {},
  ignorePatterns: ["**/node_modules/**"],
};
