import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return user info message', () => {
    expect(controller.getUserInfo()).toEqual({
      message: '사용자 정보 조회 (GET /users/me)',
    });
  });

  it('should return terms history message', () => {
    expect(controller.getTermsHistory()).toEqual({
      message: '약관 동의 내역 조회 (GET /users/terms)',
    });
  });

  it('should return updated terms agreement message', () => {
    expect(controller.updateTermsAgreement()).toEqual({
      message: '약관 동의 내역 수정 (PATCH /users/terms)',
    });
  });

  it('should return support info message', () => {
    expect(controller.getSupportInfo()).toEqual({
      message: '고객센터 운영 정보 조회 (GET /users/support/info)',
    });
  });
});