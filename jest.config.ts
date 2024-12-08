import type { Config } from 'jest';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const createJestConfig = nextJest({
  // next.config.js 및 .env 파일을 로드할 Next.js 앱의 경로
  dir: './',
});

const customJestConfig: Config = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/', // 루트 디렉토리 기준 경로 설정
  }),
  collectCoverage: false
};

module.exports = createJestConfig(customJestConfig);
