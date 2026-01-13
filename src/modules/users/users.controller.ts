import { Body, Controller, Get, Patch, Query, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

// req.user?.userId로 꺼내오도록 하긴 했는데 다른 파트와의 코드 일관성을 위해 일단 사용하진 않음
// import { UserId } from '@common/decorators/user-id-decorator';

import { Public } from '@modules/auth/decorators/public.decorator';
import { GetMeResponseDto } from '@modules/users/dto/get-me.dto';
import {
  CheckNicknameQueryDto,
  CheckNicknameResponseDto,
  UpdateNicknameRequestDto,
  UpdateNicknameResponseDto,
} from '@modules/users/dto/nickname.dto';
import {
  UpdateProfileImageRequestDto,
  UpdateProfileImageResponseDto,
} from '@modules/users/dto/profile.dto';
import {
  GetAllTermsResponseDto,
  GetTermsHistoryResponseDto,
  UpdateTermsAgreementRequestDto,
} from '@modules/users/dto/terms.dto';
import { UsersService } from '@modules/users/services/users.service';

@ApiTags('User (사용자 관련)')
@Controller({
  version: '1',
  path: 'users',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: '내 정보 조회' })
  @ApiOkResponse({ type: GetMeResponseDto })
  getUserInfo(@Req() req: any): Promise<GetMeResponseDto> {
    const userId = req.user?.userId;
    return this.usersService.getUserInfo(userId);
  }

  @Public()
  @Get('nickname/check')
  @ApiOperation({ summary: '닉네임 사용 가능 여부 확인(디바운스용)' })
  @ApiOkResponse({ type: CheckNicknameResponseDto })
  checkNickname(@Query() q: CheckNicknameQueryDto): Promise<CheckNicknameResponseDto> {
    return this.usersService.checkNicknameAvailability(q.nickname);
  }

  @ApiBearerAuth()
  @Patch('me/nickname')
  @ApiOperation({ summary: '내 정보 - 닉네임 수정' })
  @ApiOkResponse({ type: UpdateNicknameResponseDto })
  updateNickname(
    @Req() req: any,
    @Body() body: UpdateNicknameRequestDto,
  ): Promise<UpdateNicknameResponseDto> {
    const userId = req.user?.userId;
    return this.usersService.updateNickname(userId, body);
  }

  @ApiBearerAuth()
  @Patch('me/profile-image')
  @ApiOperation({ summary: '내 정보 - 프로필 이미지 수정/삭제' })
  @ApiOkResponse({ type: UpdateProfileImageResponseDto })
  updateProfileImage(
    @Req() req: any,
    @Body() body: UpdateProfileImageRequestDto,
  ): Promise<UpdateProfileImageResponseDto> {
    const userId = req.user?.userId;
    return this.usersService.updateProfileImage(userId, body);
  }

  @Public()
  @Get('terms/all')
  @ApiOperation({ summary: '모든 약관 조회 (content 포함)' })
  @ApiOkResponse({ type: GetAllTermsResponseDto })
  getAllTerms(): Promise<GetAllTermsResponseDto> {
    return this.usersService.getAllTerms();
  }

  @ApiBearerAuth()
  @Get('terms')
  @ApiOperation({ summary: '사용자의 약관 동의 내역 조회' })
  @ApiOkResponse({ type: GetTermsHistoryResponseDto })
  getTermsHistory(@Req() req: any): Promise<GetTermsHistoryResponseDto> {
    const userId = req.user?.userId;
    return this.usersService.getTermsHistory(userId);
  }

  @ApiBearerAuth()
  @Patch('terms')
  @ApiOperation({ summary: '사용자의 약관 동의 내역 수정' })
  @ApiOkResponse({
    schema: { example: { message: '약관 동의 내역이 업데이트되었습니다.' } },
  })
  updateTermsAgreement(@Req() req: any, @Body() body: UpdateTermsAgreementRequestDto) {
    const userId = req.user?.userId;
    return this.usersService.updateTermsAgreement(userId, body);
  }
}
