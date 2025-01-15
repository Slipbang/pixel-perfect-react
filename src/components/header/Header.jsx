import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__title}>
                    <img src={logo} alt="logo" className={styles.logo} />
                        <button className={styles.burger}>
                            <span className={styles.burger__line}></span>
                            <span className={styles.burger__line}></span>
                            <span className={styles.burger__line}></span>
                        </button>
                </div>

                <h1 className={styles.h1}>Реализуем крупнейшие проекты в России</h1>
                <h4 className={styles.h4}>Стадионы, газопроводы, мосты, дамбы</h4>
            </div>
        </header>
    )
}

export default Header;