import { ApiProperty } from '@nestjs/swagger';

import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export enum UploadDomain {
  EVENTS = 'events',
  COMMUNITY = 'community',
}

export enum UploadKind {
  IMAGE = 'image',
  VIDEO = 'video',
}

export class GetPresignedUrlDto {
  @ApiProperty({ enum: UploadDomain })
  @IsEnum(UploadDomain)
  domain!: UploadDomain;

  @ApiProperty({ enum: UploadKind })
  @IsEnum(UploadKind)
  kind!: UploadKind;

  @ApiProperty({ example: 'image/png' })
  @IsString()
  contentType!: string;

  @ApiProperty({ required: false, description: '파일 크기(byte)' })
  @IsOptional()
  @IsInt()
  @Min(1)
  size?: number;

  @ApiProperty({ required: false, description: '총 업로드 파일 크기(byte)' })
  @IsOptional()
  @Min(1)
  @IsInt()
  totalSize?: number;

  @ApiProperty({ required: false, description: '업로드할 파일 개수' })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(30)
  batchCount?: number;
}
