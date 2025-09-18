import antfu from '@antfu/eslint-config';
import eslintBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: true,
    formatters: true,
    stylistic: { indent: 2, quotes: 'single', semi: true },
  },
  {
    plugins: {
      'better-tailwindcss': eslintBetterTailwindcss, // website: https://github.com/schoero/eslint-plugin-better-tailwindcss
    },
    rules: {
      ...eslintBetterTailwindcss.configs.recommended.rules,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'source/styles/global.css',
      },
    },
  },
  {
    rules: {
      'no-console': 'off',
      'antfu/if-newline': 'off',
      'style/brace-style': ['error', '1tbs'],
      'style/jsx-first-prop-new-line': ['error', 'never'],
      'style/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
      'style/jsx-quotes': ['error', 'prefer-single'],
      'style/jsx-sort-props': ['error', { shorthandFirst: true, multiline: 'last' }],
      'style/nonblock-statement-body-position': ['error', 'beside'],
      'better-tailwindcss/enforce-consistent-important-position': ['error', { position: 'recommended' }],
      'better-tailwindcss/enforce-consistent-line-wrapping': ['error', { printWidth: 0, preferSingleLine: true }],
    },
  },
);
