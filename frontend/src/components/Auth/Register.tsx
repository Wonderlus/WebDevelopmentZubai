import { FormEvent, useState } from "react";
import styles from "./Auth.module.scss";
import { register } from "../../api/user.api";

const Register = () => {
    const [userData, setUserData] = useState({
        login: "",
        first: "",
        last: "",
        password: "",
    });

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const res = await register(userData);
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
                    value={userData.first}
                    placeholder="Имя"
                    onChange={(event) => {
                        setUserData({ ...userData, first: event.target.value });
                    }}
                />
                <input
                    value={userData.last}
                    placeholder="Фамилия"
                    onChange={(event) => {
                        setUserData({ ...userData, last: event.target.value });
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
                    Регистрация
                </button>
            </form>
        </div>
    );
};

export default Register;
