"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperProduct = void 0;
class MapperProduct {
    static toDto(product) {
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            img: product.img,
            price: product.price,
        };
    }
    static toDtos(products) {
        return products.map((product) => {
            return this.toDto({
                ...product,
            });
        });
    }
}
exports.MapperProduct = MapperProduct;
//# sourceMappingURL=product.mapper.js.map