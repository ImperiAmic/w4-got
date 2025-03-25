import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
<<<<<<< HEAD
  testEnvironment: "jsdom",
  resolver: "ts-jest-resolver",
=======
>>>>>>> main
  ...createDefaultPreset(),
};

export default config;
