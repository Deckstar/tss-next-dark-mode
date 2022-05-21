module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:import/errors",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort", "import"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-shadow": ["error", { hoist: "never" }],

    "no-console": "warn",

    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",
    "import/no-deprecated": "warn",
    "import/no-duplicates": "error",
    "import/no-unresolved": 0,
    "import/no-anonymous-default-export": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: `./tsconfig.json`,
      },
    },
  },
};
