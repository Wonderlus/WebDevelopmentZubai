import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ProductDto } from 'src/dto/product.dto';
import { MapperProduct } from 'src/mapper/product.mapper';
import { ProductEntity } from 'src/models/product.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(private readonly dataSource: DataSource) {}

  private get manager() {
    return this.dataSource.manager;
  }

  async getProducts() {
    const products = await this.manager.find(ProductEntity);

    return MapperProduct.toDtos(products);
  }

  async createProduct(dto: ProductDto) {
    const productEntity = this.manager.create(ProductEntity, {
      ...dto,
      id: randomUUID(),
    });

    await this.manager.save(productEntity);
  }
}
