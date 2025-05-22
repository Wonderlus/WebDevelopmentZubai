import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.container}>
            <article className={styles.article}>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li>
                            <button onClick={() => navigate("/")}>
                                Главная страница
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/stuff")}>
                                Страница товаров
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/login")}>
                                Логин
                            </button>
                        </li>
                        <li>
                            <button onClick={() => navigate("/register")}>
                                Регистрация
                            </button>
                        </li>
                    </ul>
                </nav>
            </article>
        </header>
    );
};

export default Header;
