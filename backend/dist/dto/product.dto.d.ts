import { IdDto } from './common.dto';
export declare class ProductDto extends IdDto {
    readonly title: string;
    readonly description: string;
    readonly img: string;
    readonly price: number;
}
