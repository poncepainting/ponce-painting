import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // Define files to ignore
    ignores: [
      // Build output directories
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',

      // Package manager directories
      'node_modules/**',
      '.pnp/**',
      '.pnp.js',

      // Cache directories
      '.turbo/**',
      '.vercel/**',
      '.cache/**',

      // Generated files
      'next-env.d.ts',
      'public/sitemap*.xml',
      'public/robots.txt',

      // Config files
      'next.config.mjs',
      'postcss.config.js',
      'tailwind.config.js',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/no-anonymous-default-export': 'warn',
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

export default eslintConfig;
