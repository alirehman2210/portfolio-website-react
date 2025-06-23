module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-key': 'warn'
  },
  ignorePatterns: ['next.config.js', 'postcss.config.js', 'tailwind.config.js'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  }
} 