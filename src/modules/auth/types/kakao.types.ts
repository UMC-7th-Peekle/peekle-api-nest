/**
 * 카카오 프로필 정보
 */
export interface KakaoProfile {
  nickname: string;
  thumbnail_image_url: string;
  profile_image_url: string;
  is_default_image: boolean;
}

/**
 * 카카오 계정 정보
 */
export interface KakaoAccount {
  profile_needs_agreement?: boolean;
  profile_nickname_needs_agreement?: boolean;
  profile_image_needs_agreement?: boolean;
  profile?: KakaoProfile;

  name_needs_agreement?: boolean;
  name?: string;

  email_needs_agreement?: boolean;
  is_email_valid?: boolean;
  is_email_verified?: boolean;
  email?: string;

  age_range_needs_agreement?: boolean;
  age_range?: string; // 예: "20~29"

  birthyear_needs_agreement?: boolean;
  birthyear?: string; // 예: "2002"

  birthday_needs_agreement?: boolean;
  birthday?: string; // 예: "1130" (MMDD 형식)
  birthday_type?: 'SOLAR' | 'LUNAR';

  gender_needs_agreement?: boolean;
  gender?: 'female' | 'male';

  phone_number_needs_agreement?: boolean;
  phone_number?: string; // 예: "+82 010-1234-5678"

  ci_needs_agreement?: boolean;
  ci?: string;
  ci_authenticated_at?: string; // ISO 8601 형식의 Datetime
}

/**
 * 사용자 프로퍼티
 * 앱의 [사용자 프로퍼티]에서 설정한 정보
 */
export interface KakaoUserProperties {
  nickname: string;
  profile_image: string; // URL
  thumbnail_image: string; // URL
  [key: string]: any; // 추가로 설정한 커스텀 프로퍼티
}

/**
 * 카카오 사용자 정보 가져오기 API의 최종 응답 타입
 */
export interface KakaoUserInfoResponse {
  /** 회원번호 */
  id: number;
  /** 서비스에 연결된 시각 (ISO 8601) */
  connected_at: string;
  /** 카카오싱크 간편가입을 통해 동의한 시각 (ISO 8601) */
  synched_at?: string;
  /** 사용자 프로퍼티 */
  properties: KakaoUserProperties;
  /** 카카오계정 정보 */
  kakao_account: KakaoAccount;
}
