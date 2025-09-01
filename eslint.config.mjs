// For NestJS project ESLint configuration
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
// Next.js/React 관련 플러그인들 - NestJS는 백엔드 프레임워크이므로 React 관련 설정 불필요
// import eslintPluginReact from 'eslint-plugin-react';
// import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
// Storybook - NestJS API 서버에서는 스토리북 사용하지 않음
// import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  // 글로벌 ignore 설정 (파일 패턴만 지정)
  {
    ignores: [
      // 빌드 및 배포 관련 폴더
      'node_modules/**',
      'dist/**',
      'build/**',
      'src/generated/**',

      // 테스트 및 문서 폴더
      'coverage/**',

      // NestJS 특정 ignore 추가
      '*.js', // 컴파일된 JavaScript 파일들
    ],
  },
  // ESLint의 기본 권장 설정
  eslint.configs.recommended,
  // TypeScript ESLint의 권장 설정
  tseslint.configs.recommended,
  {
    // CommonJS 파일에 대한 특별 설정
    files: ['**/*.cjs'],
    rules: {
      // require 구문 사용 허용
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  // TypeScript 파일에 대한 설정
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // 사용하지 않는 변수 경고 (_, _로 시작하는 변수는 제외)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      // JS ESLint의 no-unused-vars 규칙 비활성화
      // TypeScript ESLint가 이 규칙을 처리하므로 중복 방지
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // any 타입 사용 허용
    },
  },
  prettierConfig, // 항상 마지막에!
];

export default tseslint.config(eslintConfig);
