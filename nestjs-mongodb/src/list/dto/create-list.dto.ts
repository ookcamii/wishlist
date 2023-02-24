import { ApiProperty } from '@nestjs/swagger';
export class CreateListDto {
  @ApiProperty({
    example: 'Nest.js: A Progressive Node.js Framework (English Edition)',
  })
  readonly title: string;

  @ApiProperty({ example: 'Ropa' })
  readonly categoria: string;

  @ApiProperty({
    example: 'ropa, faldas tallas pettit',
  })
  readonly description: string;

  @ApiProperty({
    example:
      'https://articulo.mercadolibre.com.co/MCO-1100188448-organizador-de-ducha-repisa-bano-adhesivo-set-2-inoxidable-_JM#position=23&search_layout=grid&type=item&tracking_id=4f522cc8-f026-4f9b-b198-73958b606e0a&c_id=/home/promotions-recommendations/element&c_element_order=2&c_uid=13dc4474-d02f-45ae-84cc-4501db89190d',
  })
  readonly url: string;

  @ApiProperty({ example: 99.0 })
  readonly precio: number;

  @ApiProperty({
    example: 'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
  })
  readonly image_url: string;

  @ApiProperty({ example: ['Ropa', 'faldas'] })
  readonly keywords: string[];
}
