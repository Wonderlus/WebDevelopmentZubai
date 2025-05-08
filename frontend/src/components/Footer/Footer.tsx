import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <p>Наши контакты</p>
                <div>
                    <a href="https://telegram.org/">Telegram</a>
                    <a href="https://whatsapp.com/">WhatsApp</a>
                    <a href="">Phone Number</a>
                </div>
            </div>
            <div className={styles.quality}>
                <p>Делаем качественно</p>
            </div>
        </footer>
    );
};

export default Footer;
