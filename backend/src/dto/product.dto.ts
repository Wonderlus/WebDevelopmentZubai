import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IdDto } from './common.dto';

export class ProductDto extends IdDto {
  @ApiProperty({ type: String })
  @Type(() => String)
  readonly title: string;

  @ApiProperty({ type: String })
  @Type(() => String)
  readonly description: string;

  @ApiProperty({ type: String })
  @Type(() => String)
  readonly img: string;

  @ApiProperty({ type: Number })
  @Type(() => Number)
  readonly price: number;
}
