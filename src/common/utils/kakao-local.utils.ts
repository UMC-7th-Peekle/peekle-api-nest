import axios, { AxiosError } from 'axios';

export class KakaoLocalUtil {
  // 주소로 좌표 + 지역 전체 변환
  static async getAddressInfo(query: string) {
    const apiKey = process.env.KAKAO_LOCAL_API_KEY;
    const baseUrl = process.env.KAKAO_LOCAL_API_URL;
    if (!apiKey || !baseUrl) return null;

    const url = `${baseUrl}/search/address.json?query=${encodeURIComponent(query)}`;

    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `KakaoAK ${apiKey}` },
      });

      const doc = data?.documents?.[0];
      if (!doc) return null;

      return {
        latitude: parseFloat(doc.y),
        longitude: parseFloat(doc.x),
        region1: doc.road_address?.region_1depth_name ?? doc.address?.region_1depth_name,
        region2: doc.road_address?.region_2depth_name ?? doc.address?.region_2depth_name,
        region3: doc.road_address?.region_3depth_name ?? doc.address?.region_3depth_name,
      };
    } catch (error) {
      const err = error as AxiosError;
      console.error(`[KakaoLocalUtil] 주소 검색 실패: ${query}`, err.response?.data || err.message);
      return null;
    }
  }

  // 좌표로 주소 + 지역 전체 변환
  static async getAddressByCoords(lat: number, lng: number) {
    const apiKey = process.env.KAKAO_LOCAL_API_KEY;
    const baseUrl = process.env.KAKAO_LOCAL_API_URL;
    if (!apiKey || !baseUrl) return null;

    const url = `${baseUrl}/geo/coord2address.json?x=${lng}&y=${lat}`;
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `KakaoAK ${apiKey}` },
      });
      const doc = data?.documents?.[0];
      if (!doc) return null;

      return {
        region1: doc.road_address?.region_1depth_name ?? doc.address?.region_1depth_name,
        region2: doc.road_address?.region_2depth_name ?? doc.address?.region_2depth_name,
        region3: doc.road_address?.region_3depth_name ?? doc.address?.region_3depth_name,
        venueRoadAddress: doc.road_address?.address_name ?? null,
        venueJibunAddress: doc.address?.address_name ?? null,
        venueDetailAddress: doc.road_address?.building_name ?? null,
      };
    } catch (error) {
      const err = error as AxiosError;
      console.error(
        `[KakaoLocalUtil] 좌표→주소 변환 실패: (${lat},${lng})`,
        err.response?.data || err.message,
      );
      return null;
    }
  }
}
