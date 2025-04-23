import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <button onClick={() => navigate("/")}>Главная страница</button>
                <button onClick={() => navigate("/stuff")}>
                    Страница товаров
                </button>
                <button onClick={() => navigate("/login")}>Логин</button>
                <button onClick={() => navigate("/register")}>
                    Регистрация
                </button>
            </nav>
        </header>
    );
};

export default Header;
