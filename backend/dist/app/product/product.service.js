"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const product_mapper_1 = require("../../mapper/product.mapper");
const product_entity_1 = require("../../models/product.entity");
const typeorm_1 = require("typeorm");
let ProductService = class ProductService {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    get manager() {
        return this.dataSource.manager;
    }
    async getProducts() {
        const products = await this.manager.find(product_entity_1.ProductEntity);
        return product_mapper_1.MapperProduct.toDtos(products);
    }
    async createProduct(dto) {
        const productEntity = this.manager.create(product_entity_1.ProductEntity, {
            ...dto,
            id: (0, crypto_1.randomUUID)(),
        });
        await this.manager.save(productEntity);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ProductService);
//# sourceMappingURL=product.service.js.map