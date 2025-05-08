import styles from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Добро пожаловать на сайт Мебельного Диллера
            </div>
            <div className={styles.description}>
                Здесь вы можете найти лучшие предложения для покупки мебели. Мы
                также принимаем заказы!
            </div>
            <div className={styles.img}>
                <p className={styles.img_title}>
                    Ниже представлены некоторые экземпляры наших работ
                </p>
                <div className={styles.imgs}>
                    <img src="/main/1.jpg" alt="Кровать" />
                    <img src="/main/2.jpg" alt="Диван" />
                    <img src="/main/3.jpg" alt="Дверь" />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
