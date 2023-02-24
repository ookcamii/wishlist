import { ApiProperty } from '@nestjs/swagger';
import { list } from '../../list/schemas/list.schema';

export class CreateCommentDto {
  @ApiProperty({ example: 'ropa' })
  readonly categoria: string;

  @ApiProperty({
    example: 3,
  })
  readonly stars: number;

  @ApiProperty({
    example: 'desearia mucho',
  })
  readonly comment: string;

  @ApiProperty({ example: 'bu' })
  readonly username: list;
}
