import { useEffect, useState } from "react";
import styles from "./StuffPage.module.scss";
import { getProducts } from "../../api/product.api";
import { Product } from "../../dto/Product.interface";
const StuffPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getProducts();
                setProducts(res);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    return (
        <div className={styles.container}>
            <thead>
                <h2 className={styles.title}>Наш ассортимент товаров</h2>
            </thead>
            <tbody className={styles.items}>
                {products.map((item) => (
                    <tr className={styles.item} key={item.id}>
                        <td>
                            <img
                                className={styles.img}
                                src={`products/${item.img}`}
                            />
                        </td>
                        <td>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                        </td>
                        <td>
                            <p className={styles.itemDescription}>
                                {item.description}
                            </p>
                        </td>
                        <td>
                            <p className={styles.itemPrice}>
                                {item.price} рублей
                            </p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
};

export default StuffPage;
