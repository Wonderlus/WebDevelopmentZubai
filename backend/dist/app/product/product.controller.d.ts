import { ProductService } from './product.service';
import { ProductDto } from 'src/dto/product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<ProductDto[]>;
    createProduct(dto: ProductDto): Promise<void>;
}
