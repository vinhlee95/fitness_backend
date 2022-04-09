module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testTimeout: 10000,
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModule: true
    }
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
}