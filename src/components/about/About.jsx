import styles from './About.module.css';
import gaspromArena from '../../assets/gaspromArena.jpg';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.info}>
                <div className="container">
                    <div className={styles.about__grid}>
                        {Array.from({length:4}).map((_, index) => {
                            return (
                                <div key={index} className={styles.about__gridItem}>
                                    <h4 className={styles.about__h4}>26</h4>
                                    <h5 className={styles.about__h5}>лет</h5>
                                    <p className={styles.about__p}>на рынке</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className={`text-h2 ${styles.project__h2}`}>Наши самые большие проекты</h2>
                <div className={styles.about__flex}>
                    {Array.from({length:3}).map((_, index) => {
                        return (
                            <div key={index} className={styles.about__flexItem}>
                                <img className={styles.projectImg} src={gaspromArena} alt="gaspromArena"/>
                                <div className={styles.rectangle}></div>
                                <h3 className={`text-h3 ${styles.project__h3}`}>Газпром Арена</h3>
                                <p className={`text-p ${styles.project__p}`}>Мы сделали самую красивую арену в Европе. Это открытие стало
                                    для нас прорывной точкой для разивтия
                                    на следующие десятилетия. Мы очень рады данному еву.</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default About;