import { ProductDto } from 'src/dto/product.dto';
import { ProductEntity } from 'src/models/product.entity';
export declare class MapperProduct {
    static toDto(product: ProductEntity): ProductDto;
    static toDtos(products: ProductEntity[]): ProductDto[];
}
