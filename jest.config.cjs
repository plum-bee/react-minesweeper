module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(m?j)sx?$': '@swc/jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.yarn/'],
  moduleFileExtensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    uuid: require.resolve('uuid'),
    '\\.(css|less|png|jpg|gif|jpeg|webp)$':
      '<rootDir>/test/__ mocks __/fileMock.js'
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['src/__tests__/', 'node_modules/', '.yarn/']
}
