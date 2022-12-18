module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaVersion: 2022,
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'next/core-web-vitals',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        endOfLine: 'lf',
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
    '@next/next/no-img-element': ['off'],
  },
}
