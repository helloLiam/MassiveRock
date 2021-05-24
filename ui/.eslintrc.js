module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
    ],
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/parsers': {
      // 使用 TypeScript parser
      '@typescript-eslint/parser': ['.tsx', '.ts'],
    },
    'import/resolver': {
      // 默认使用根目录 tsconfig.json
      typescript: {
        // 从 <roo/>@types 读取类型定义
        alwaysTryTypes: true,
      },
      // 使用指定路径 tsconfig.json， <root>/path/to/folder/tsconfig.json
      // typescript: {
      //   directory: './path/to/folder',
      // },
      // // monorepos 这类多 tsconfig.json
      // // 可以用 glob 这类匹配模式
      // typescript: {
      //   directory: './packages/*/tsconfig.json',
      // },
      // // 或者数组
      // typescript: {
      //   directory: [
      //     './packages/module-a/tsconfig.json',
      //     './packages/module-b/tsconfig.json',
      //   ],
      // },
      // 也可以混合使用
      // typescript: {
      //   directory: [
      //     './packages/*/tsconfig.json',
      //     './other-packages/*/tsconfig.json',
      //   ],
      // },
    },
  },
};
