import styles from './Reviews.module.css';

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <div className="container">
                <h2 className={`text-h2 ${styles.reviews__h2}`}>Отзывы о работе с нами</h2>

                <div className={styles.reviews__grid}>

                    {Array.from({length:3}).map((_, index) => {
                        return (
                            <div key={index} className={styles.reviews__gridItem}>
                                <div className={styles.reviews__card}>
                                    <p className={styles.reviews__quotes}>“</p>
                                    <p className="text-p-reviews">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                                        вэб-дизайне.
                                        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                                        В то время некий безымянный печатник создал большую коллекцию размеров и форм
                                        шрифтов.</p>
                                </div>

                                <h4 className={`text-h4 ${styles.reviews__h4}`}>Иванов Иван, <span className={styles.reviews__accent}>ООО “Газпром-Арена”</span>
                                </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Reviews;