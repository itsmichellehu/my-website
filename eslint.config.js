const js = require("@eslint/js");
const globals = require("globals");
const prettierConfig = require("eslint-config-prettier");

// Correctness only. eslint-config-prettier disables every stylistic rule so
// formatting stays Prettier's job and lint output stays signal.
module.exports = [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".claude/worktrees/**",
      ".claude/workflows/**",
    ],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        // Replaced at build time by webpack DefinePlugin (webpack.common.js).
        process: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    files: ["*.js", "webpack.*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: js.configs.recommended.rules,
  },
  prettierConfig,
];
