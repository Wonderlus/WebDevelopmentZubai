import { ProductDto } from 'src/dto/product.dto';
import { ProductEntity } from 'src/models/product.entity';

export class MapperProduct {
  static toDto(product: ProductEntity): ProductDto {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      img: product.img,
      price: product.price,
    };
  }

  static toDtos(products: ProductEntity[]): ProductDto[] {
    return products.map((product) => {
      return this.toDto({
        ...product,
      });
    });
  }
}
