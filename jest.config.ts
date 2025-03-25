import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  testEnvironment: "jsdom",
  resolver: "ts-jest-resolver",
  ...createDefaultPreset(),
};

export default config;
