module.exports = {
  root: true,
  ignorePatterns: [
    'src/assets/iconfont/iconfont.js',
    'src/style/iconfont/iconfont.js',
    'src/components/swipe/__swipe_bak*.vue'
  ],
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // Demo views intentionally log emitted values for manual verification.
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-throw-literal': 'off',
    // Existing public component names are part of the Vue 2 API.
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  overrides: [
    {
      files: [
        'tests/unit/**/*.spec.js'
      ],
      env: {
        jest: true
      }
    }
  ]
}
