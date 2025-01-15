import buildingIcon from '../../assets/buildingIcon.svg';
import styles from './Services.module.css';

const Services = () => {

    return (
        <section className={styles.services}>
            <div className="container">
                <h2 className={`text-h2 ${styles.section__h2}`}>Чем мы занимаемся?</h2>

                <div className={styles.services__grid}>
                    {Array.from({length:6}).map((_, index) => {
                        return (
                            <div key={index} className={styles.services__gridItem}>
                                <img className={styles.services__icon} src={buildingIcon} alt="buildingIcon" />
                                <h4 className={`text-h4 ${styles.services__h4}`}>Строительство офисный зданий</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;