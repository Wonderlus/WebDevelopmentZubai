import { client } from "./api";

export const register = async (data: any) => {
    const result = await client({
        method: "POST",
        url: "/user/register",
        data,
    });

    return result.data;
};

export const login = async (data: any) => {
    const result = await client({
        method: "POST",
        url: "/user/login",
        data,
    });

    return result.data;
};
