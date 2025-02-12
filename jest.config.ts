import type { Config } from 'jest';

const config: Config = {
  roots: [ "<rootDir>" ],
  transform: { ".(ts|tsx)": "ts-jest" },
  testRegex: ".*\\.(test|spec)\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    ".*\\.snapshots\\.ts",
    "/dist/"
  ],
  verbose: true,
  coverageProvider: 'v8',
}
 
export default config;
