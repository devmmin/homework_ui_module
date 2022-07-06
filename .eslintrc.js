module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    parserOptions: { requireConfigFile: false },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
