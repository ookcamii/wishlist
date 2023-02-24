import { ApiProperty } from '@nestjs/swagger';

export class CreateWishDto {
  @ApiProperty({ example: 'ropa' })
  readonly deseo: string;

  @ApiProperty({ example: 'cumpleaños' })
  readonly tipo: string;

  @ApiProperty({ example: 'personal, gustos' })
  readonly see: string;
}
