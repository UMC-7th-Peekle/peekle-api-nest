import { HttpException, HttpStatus } from '@nestjs/common';

import {
  MAX_BATCH_IMAGES,
  MAX_IMAGE_SIZE_MB,
  MAX_TOTAL_IMAGE_SIZE,
  MAX_TOTAL_IMAGE_SIZE_MB,
  MAX_VIDEO_SIZE_GB,
} from '@modules/aws/configs/aws-upload.config';

export class SingleImageMaximumSizedExceededException extends HttpException {
  constructor() {
    super(
      {
        message: `이미지 1장 최대 ${MAX_IMAGE_SIZE_MB}MB를 초과했습니다.`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AWS_0001',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class TotalImageMaximumSizeExceededException extends HttpException {
  constructor() {
    super(
      {
        message: `이미지 총합이 최대 ${MAX_TOTAL_IMAGE_SIZE_MB}MB를 초과했습니다.`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AWS_0002',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ImageMaximumBatchCountExceededException extends HttpException {
  constructor() {
    super(
      {
        message: `이미지는 한 번에 최대 ${MAX_BATCH_IMAGES}장까지 업로드할 수 있습니다.`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AWS_0003',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class VideoMaximumSizeExceededException extends HttpException {
  constructor() {
    super(
      {
        message: `동영상은 최대 ${MAX_VIDEO_SIZE_GB}GB까지 업로드할 수 있습니다.`, // 로깅이나 클라이언트 분기 처리에 사용할 추가 데이터
        errorCode: 'AWS_0004',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
