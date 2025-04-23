import { FormEvent, useState } from "react";
import { login } from "../../api/user.api";
import styles from "./Auth.module.scss";

const Login = () => {
    const [userData, setUserData] = useState({
        login: "",
        password: "",
    });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const res = await login(userData);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <form>
                <input
                    value={userData.login}
                    placeholder="Логин"
                    onChange={(event) => {
                        setUserData({ ...userData, login: event.target.value });
                    }}
                />
                <input
                    value={userData.password}
                    placeholder="Пароль"
                    onChange={(event) => {
                        setUserData({
                            ...userData,
                            password: event.target.value,
                        });
                    }}
                />

                <button
                    onClick={(event) => {
                        handleSubmit(event);
                    }}
                >
                    Логин
                </button>
            </form>
        </div>
    );
};

export default Login;
