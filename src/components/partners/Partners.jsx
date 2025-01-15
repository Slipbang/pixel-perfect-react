import partners from '../../assets/partners.png';
import styles from './Partners.module.css';

const Partners = () => {
    return (
        <section className={styles.partners}>
            <div className="container">
                <h2 className={`text-h2 ${styles.partners__h2}`}>Наши партнеры</h2>

                <div className={styles.partners__flex}>

                    {Array.from({length:5}).map((_,index) => {
                        return (
                            <div key={index} className={styles.partners__items}>
                                <img src={partners} alt="partners" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Partners;