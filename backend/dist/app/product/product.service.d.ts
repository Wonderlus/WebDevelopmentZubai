import { ProductDto } from 'src/dto/product.dto';
import { DataSource } from 'typeorm';
export declare class ProductService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    private get manager();
    getProducts(): Promise<ProductDto[]>;
    createProduct(dto: ProductDto): Promise<void>;
}
