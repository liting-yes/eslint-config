const localpkg = require('local-pkg')

const hasTailwindcss = localpkg.isPackageExists('tailwindcss')

module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: false,
    },
  },
  ignorePatterns: [
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE',
    'public',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '!.vscode',
    '!.github',
  ],
  extends: ['eslint:recommended','plugin:import/recommended','plugin:unicorn/recommended', hasTailwindcss ? 'plugin:tailwindcss/recommended' : '', 'plugin:jsonc/recommended-with-json', 'plugin:yml/standard', 'plugin:toml/standard', 'plugin:markdown/recommended'],
  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'main',
              'module',
              'files',
              'exports',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: [
              'types',
              'require',
              'import',
            ],
          },
        ],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
    {
      files: ['*.toml'],
      parser: 'toml-eslint-parser',
    },
  ],
  rules: {
    'unicorn/prefer-module': 'warn'
  }
}
