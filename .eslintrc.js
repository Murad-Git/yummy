module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
    'prettier',
  ],
  ignorePatterns: '**/*.scss',
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        scss: 'true',
      },
    ],
    quotes: 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // 'no-unused-vars': 'off',
    // 'no-console': 'warn',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 'react/no-unescaped-entities': 'off',

    // 'react/display-name': 'off',
    // 'react/jsx-curly-brace-presence': [
    //   'warn',
    //   { props: 'never', children: 'never' },
    // ],

    // //#region  //*=========== Unused Import ===========
    // '@typescript-eslint/no-unused-vars': 'off',
    // 'unused-imports/no-unused-imports': 'warn',
    // 'unused-imports/no-unused-vars': [
    //   'warn',
    //   {
    //     vars: 'all',
    //     varsIgnorePattern: '^_',
    //     args: 'after-used',
    //     argsIgnorePattern: '^_',
    //   },
    // ],
    // //#endregion  //*======== Unused Import ===========

    // //#region  //*=========== Import Sort ===========
    // 'simple-import-sort/exports': 'warn',
    // 'simple-import-sort/imports': [
    //   'warn',
    //   {
    //     groups: [
    //       // ext library & side effect imports
    //       ['^@?\\w', '^\\u0000'],
    //       // {s}css files
    //       ['^.+\\.s?css$'],
    //       // Lib and hooks
    //       ['^@/lib', '^@/hooks'],
    //       // static data
    //       ['^@/data'],
    //       // components
    //       ['^@/components', '^@/container'],
    //       // zustand store
    //       ['^@/store'],
    //       // Other imports
    //       ['^@/'],
    //       // relative paths up until 3 level
    //       [
    //         '^\\./?$',
    //         '^\\.(?!/?$)',
    //         '^\\.\\./?$',
    //         '^\\.\\.(?!/?$)',
    //         '^\\.\\./\\.\\./?$',
    //         '^\\.\\./\\.\\.(?!/?$)',
    //         '^\\.\\./\\.\\./\\.\\./?$',
    //         '^\\.\\./\\.\\./\\.\\.(?!/?$)',
    //       ],
    //       ['^@/types'],
    //       // other that didnt fit in
    //       ['^'],
    //     ],
    //   },
    // ],
    //#endregion  //*======== Import Sort ===========
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': 'allow-with-description',
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [1],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/quotes': [
          2,
          'backtick',
          {
            avoidEscape: true,
          },
        ],
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
};
