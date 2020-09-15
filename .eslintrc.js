module.exports = {
  parser: "@typescript-eslint/parser",
  env: { node: true },
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "import/prefer-default-export": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["context"] }
    ],
    "linebreak-style": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  parserOptions: {
    project: "./tsconfig.json"
  }
};
