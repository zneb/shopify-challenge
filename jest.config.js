const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add custom config to be passed to Jest
const customJestConfig = {
  roots: [
    '<rootDir>',
  ],
  modulePaths: [
    '<rootDir>',
  ],
  moduleDirectories: [
    'node_modules',
  ],
};

// createJestConfig is exported this way to ensure that
// next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
