import styles from './Footer.module.css';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__flex}>
                    <p className={`text-p ${styles.footer__copyright}`}>&copy; 2019 Строительная компания</p>
                    <p className={`text-p ${styles.footer__brand}`}>Разработано лучшей студей</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;