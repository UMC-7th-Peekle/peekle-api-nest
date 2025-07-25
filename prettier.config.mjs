// prettier.config.js
/**
 * NestJS 프로젝트용 Prettier 설정 파일
 * - 백엔드 API 서버 개발에 최적화
 * - NestJS 프로젝트 구조를 반영한 import 순서
 */

export default {
  // 들여쓰기 너비 (2칸)
  tabWidth: 2,
  // 들여쓰기 시 탭 문자 사용 (true: 탭, false: 스페이스)
  useTabs: false,
  // 줄 끝에 세미콜론 사용
  semi: true,
  // 자바스크립트(타입스크립트)에서 싱글 쿼트(') 사용
  singleQuote: true,
  // 마지막 요소 뒤에 항상 쉼표(trailing comma) 추가
  trailingComma: 'all',
  // 한 줄 최대 길이(가독성을 위한 줄바꿈 기준)
  printWidth: 100,
  // 객체 리터럴에서 중괄호 사이에 띄어쓰기 허용 여부
  bracketSpacing: true,
  // 화살표 함수의 매개변수 괄호 사용 방식 ("always": 항상 괄호 사용)
  arrowParens: 'always',
  // 줄 끝 형태 (운영체제 따라 자동: 'auto', 강제 LF: 'lf')
  endOfLine: 'auto',

  // import 정렬 규칙(순서 지정)
  // NestJS 백엔드 프로젝트 구조를 반영한 import 순서
  importOrder: [
    // NestJS 프레임워크 관련
    '^@nestjs/(.*)$', // NestJS 코어 모듈들

    // 외부 라이브러리
    '<THIRD_PARTY_MODULES>',

    // 전역 설정 및 유틸리티
    '^@config/(.*)$',
    '^@common/(.*)$',
    '^@utils/(.*)$',
    '^@shared/(.*)$',

    // 데이터베이스 관련
    '^@database/(.*)$',
    '^@entities/(.*)$',
    '^@repositories/(.*)$',

    // 인증 및 보안
    '^@auth/(.*)$',
    '^@guards/(.*)$',
    '^@decorators/(.*)$',

    // 비즈니스 로직 모듈들
    '^@modules/(.*)$',
    '^@services/(.*)$',
    '^@controllers/(.*)$',

    // DTO 및 타입 정의
    '^@dto/(.*)$',
    '^@types/(.*)$',
    '^@interfaces/(.*)$',

    // 미들웨어 및 필터
    '^@middleware/(.*)$',
    '^@filters/(.*)$',
    '^@pipes/(.*)$',

    // 기타 src 하위 경로
    '^@/(.*)$',

    // 마지막에 상대 경로
    '^[./]',
  ],

  // importOrder 관련 parser 플러그인 명시 (decorators-legacy 필수)
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],

  // import 그룹 구분(빈 줄 추가)
  importOrderSeparation: true,
  // import 객체/함수 등 specifier 알파벳 순 정렬
  importOrderSortSpecifiers: true,

  // 플러그인 등록 (NestJS 프로젝트에는 Tailwind CSS 불필요)
  // Tailwind CSS는 프론트엔드 CSS 프레임워크이므로 백엔드 NestJS에서는 제거
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
