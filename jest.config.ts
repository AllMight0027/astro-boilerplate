import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["cypress"],
};

export default config;
