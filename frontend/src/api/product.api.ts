import { client } from "./api";

export const getProducts = async () => {
    const result = await client({
        method: "GET",
        url: "/product",
    });

    return result.data;
};
