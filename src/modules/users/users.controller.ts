import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

// 임시 유저 식별 (JWT 붙기 전까지 mock 헤더 사용)
import { UserId } from '@common/decorators/user-id-decorator';

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
  GetTermsHistoryResponseDto,
  UpdateTermsAgreementRequestDto,
} from '@modules/users/dto/terms.dto';
import { CreateUserRequestDto, CreateUserResponseDto } from '@modules/users/dto/user.dto';
import { UsersService } from '@modules/users/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '사용자 생성' })
  @ApiCreatedResponse({ type: CreateUserResponseDto })
  @Post()
  createUser(@Body() dto: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    return this.usersService.createUser(dto);
  }

  @ApiOperation({ summary: '내 정보 조회' })
  @ApiOkResponse({ type: GetMeResponseDto })
  @ApiHeader({
    name: 'x-mock-user-id',
    description: '개발용 사용자 ID (JWT 도입 전 임시)',
    required: false,
    schema: { type: 'string', example: '1' },
  })
  @Get('me')
  getUserInfo(@UserId() userId: bigint): Promise<GetMeResponseDto> {
    return this.usersService.getUserInfo(userId);
  }

  @ApiOperation({ summary: '닉네임 사용 가능 여부 확인(디바운스용)' })
  @ApiOkResponse({ type: CheckNicknameResponseDto })
  @Get('nickname/check')
  checkNickname(@Query() q: CheckNicknameQueryDto): Promise<CheckNicknameResponseDto> {
    return this.usersService.checkNicknameAvailability(q.nickname);
  }

  @ApiOperation({ summary: '내 정보 - 닉네임 수정' })
  @ApiOkResponse({ type: UpdateNicknameResponseDto })
  @ApiHeader({
    name: 'x-mock-user-id',
    description: '개발용 사용자 ID (JWT 도입 전 임시)',
    required: false,
    schema: { type: 'string', example: '1' },
  })
  @Patch('me/nickname')
  updateNickname(
    @UserId() userId: bigint,
    @Body() body: UpdateNicknameRequestDto,
  ): Promise<UpdateNicknameResponseDto> {
    return this.usersService.updateNickname(userId, body);
  }

  @ApiOperation({ summary: '내 정보 - 프로필 이미지 수정/삭제' })
  @ApiOkResponse({ type: UpdateProfileImageResponseDto })
  @ApiHeader({
    name: 'x-mock-user-id',
    description: '개발용 사용자 ID (JWT 도입 전 임시)',
    required: false,
    schema: { type: 'string', example: '1' },
  })
  @Patch('me/profile-image')
  updateProfileImage(
    @UserId() userId: bigint,
    @Body() body: UpdateProfileImageRequestDto,
  ): Promise<UpdateProfileImageResponseDto> {
    return this.usersService.updateProfileImage(userId, body);
  }

  @ApiOperation({ summary: '사용자의 약관 동의 내역 조회' })
  @ApiOkResponse({ type: GetTermsHistoryResponseDto })
  @ApiHeader({
    name: 'x-mock-user-id',
    description: '개발용 사용자 ID (JWT 도입 전 임시)',
    required: false,
    schema: { type: 'string', example: '1' },
  })
  @Get('terms')
  getTermsHistory(@UserId() userId: bigint): Promise<GetTermsHistoryResponseDto> {
    return this.usersService.getTermsHistory(userId);
  }

  @ApiOperation({ summary: '사용자의 약관 동의 내역 수정' })
  @ApiOkResponse({
    schema: { example: { message: '약관 동의 내역이 업데이트되었습니다.' } },
  })
  @ApiHeader({
    name: 'x-mock-user-id',
    description: '개발용 사용자 ID (JWT 도입 전 임시)',
    required: false,
    schema: { type: 'string', example: '1' },
  })
  @Patch('terms')
  updateTermsAgreement(@UserId() userId: bigint, @Body() body: UpdateTermsAgreementRequestDto) {
    return this.usersService.updateTermsAgreement(userId, body);
  }
}
