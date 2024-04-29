import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  yaml: false,
  rules: {
    'no-console': 'off',
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
}, {})
