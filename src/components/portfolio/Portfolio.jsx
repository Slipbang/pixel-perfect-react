import skyscraper from '../../assets/skyscraper.png';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    return (
        <section className={styles.portfolio}>
            <div className={styles.portfolio__grid}>
                {Array.from({length:8}).map((_,index) => {
                    return (
                        <div key={index} className={styles.portfolio__gridItem}>
                            <img className={styles.portfolio__img} src={skyscraper} alt="portfolioItem" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;