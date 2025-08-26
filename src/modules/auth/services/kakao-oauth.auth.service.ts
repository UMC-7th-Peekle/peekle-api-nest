import { Inject, NotFoundException } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';

import axios from 'axios';

import { KakaoOAuthConfig } from '@modules/auth/config/kakao-oauth-config';

interface KakaoUserInfo {
  oauthId: number;
  name: string;
  nickname: string;
  email: string;
  profileImage: string;
}

export class KakaoAuthService {
  constructor(
    private readonly configService: ConfigService,
    @Inject(KakaoOAuthConfig.KEY)
    private readonly kakaoOAuthConfig: ConfigType<typeof KakaoOAuthConfig>,
  ) {}
  // http://localhost:7777/auth/login/kakao

  /**
   * 카카오 OAuth 인증 코드를 사용하여 액세스 토큰을 요청하는 함수.
   */

  getKakaoAccessToken = async (authorizationCode) => {
    console.log(`[getKakaoAccessToken] 인증 코드: ${authorizationCode}`);
    const tokenResponse = await axios.post('https://kauth.kakao.com/oauth/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: this.kakaoOAuthConfig.restApiKey,
        redirect_uri: this.kakaoOAuthConfig.redirectUrl,
        code: authorizationCode,
        client_secret: this.kakaoOAuthConfig.clientSecret,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return tokenResponse.data.access_token;
  };

  /**
   * 카카오 액세스 토큰을 사용하여 사용자 정보를 조회하는 함수.
   * @async
   * @function getKakaoUserInfo
   * @param accessToken - The access token from Kakao.
   */
  getKakaoUserInfo = async (accessToken: string): Promise<KakaoUserInfo> => {
    const userInfoResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        property_keys: [
          'kakao_account.email',
          'kakao_account.profile.nickname',
          'kakao_account.profile.profile_image_url',
        ],
      },
    });

    console.log(
      `[getKakaoUserInfo] 사용자 정보: ${JSON.stringify(userInfoResponse.data, null, 2)}`,
    );

    const { id, properties, kakao_account } = userInfoResponse.data;

    return {
      oauthId: id,
      name: properties.nickname,
      nickname: properties.nickname,
      email: kakao_account.email,
      profileImage: properties.profile_image,
    };
  };

  /**
   * 인증코드가 존재하는지 식별
   */

  checkAuthorizationCode = (authorizationCode: string) => {
    if (!authorizationCode) {
      console.error('[checkAuthorizationCode] 인증 코드가 필요합니다.');
      throw new NotFoundException('인증 코드가 필요합니다.');
    }
    console.log(`[checkAuthorizationCode] 인증 코드: ${authorizationCode}`);
  };

  /**
   * 해당하는 사용자 정보가 있는지 확인
   */
  checkIfUserExists = async () => {
    // TODO: mock data
    const info = {
      userId: 1n,
      name: 'Kakao User',
      nickname: 'kakao_nick',
    };

    // if (!info) {
    //   console.error('[checkIfUserExist] 가입되어 있지 않은 사용자입니다.');
    //   return false;
    // }
    //
    // if (info.status === 'dormant') {
    //   console.error('휴면 사용자가 로그인을 시도했습니다.');
    //   return 'dormant';
    // }
    //
    // if (info.status === 'terminated') {
    //   console.error('탈퇴한 사용자가 7일 이내에 로그인을 시도했습니다.');
    //   return 'terminated';
    // }

    return {
      userId: info.userId,
      name: info.name,
      nickname: info.nickname,
    };
  };
}
