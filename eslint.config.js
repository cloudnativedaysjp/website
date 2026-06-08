import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import astro from 'eslint-plugin-astro'
import importX from 'eslint-plugin-import-x'
import globals from 'globals'

export default [
  {
    ignores: ['**/*.d.ts', '.vscode/**', 'out/**', 'dist/**'],
  },
  {
    // eslintrc 時代は未使用の eslint-disable を報告していなかったため挙動を合わせる
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,astro}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2022,
        astroHTML: true,
      },
    },
    plugins: {
      'import-x': importX,
    },
    rules: {
      'import-x/order': [2, { alphabetize: { order: 'asc' } }],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        allowImportExportEverywhere: true,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx,astro}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        2,
        {
          prefer: 'type-imports',
        },
      ],
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'error',
    },
  },
]
