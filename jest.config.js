// https://github.com/facebook/jest/issues/3094
module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'clover'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    globals: {
      
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    notify: true,
    notifyMode: 'always',
    roots: ['<rootDir>packages'],
    testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
    testPathIgnorePatterns: ["node_modules", "dist"],
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
      "^.+\\.svg$": "<rootDir>/jest/svgTransform.js" ,
      "^.+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    setupFilesAfterEnv: [
      '<rootDir>jest/setupTests.ts'
    ],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '@tech-wizards/(.+)$': '<rootDir>packages/$1/src',
      },
  };
