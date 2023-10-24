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
    '\\.(css|less|png|jpg|gif|jpeg|webp)$': 'identity-obj-proxy'
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['src/__tests__/', 'node_modules/', '.yarn/']
}
