module.exports = {
  ignorePatterns: ['*.d.ts'],
  extends: [
    "plugin:astro/recommended",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {
    astroHTML: true,
  },
  env: {
    es2022: true
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
      },
    ],
    'import/order': [2, { alphabetize: { order: 'asc' } }],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        'astro/no-set-html-directive': 'error',
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaFeatures: {
          jsx: true
        },
        allowImportExportEverywhere: true
      }
    },
  ],
};
