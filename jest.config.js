module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/tests/unit/**/*.spec.js'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(css|styl|stylus)$': 'jest-transform-stub'
  },
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    '!src/components/**/__swipe_bak*.vue'
  ]
}
