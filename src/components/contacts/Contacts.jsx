import point from '../../assets/point.svg';
import phone from '../../assets/phone.svg';
import clock from '../../assets/clock.svg';
import email from '../../assets/email.svg';
import styles from './Contacts.module.css';

const contactsInfo = [
    {
        image: point,
        st_h3: 'Адрес:',
        nd_h3: 'НЕВСКИЙ ПРОСПЕКТ 140,<br/>ОФИС 140-142',
        accent: false,
    },
    {
        image: phone,
        st_h3: 'Телефон:',
        nd_h3: '<a href="tel:8 (812) 111-22-33">8 (812) 111-22-33</a><br/><a href="tel:8 (812) 111-22-33">8 (812) 111-22-33</a>',
        accent: false,
    },
    {
        image: clock,
        st_h3: 'Время работы:',
        nd_h3: 'ПН-СБ<br/>10:00 - 20:00',
        accent: false,
    },
    {
        image: email,
        st_h3: 'e-mail:',
        nd_h3: 'INFO@VIP.RU',
        accent: true,
    },
]

const Contacts = () => {

    return (
        <section className={styles.contacts}>
            <div className="container">
                <h2 className={`text-h2 ${styles.contacts__h2}`}>Контакты</h2>

                <div className={styles.contacts__grid}>

                    {contactsInfo.map((item, index) => {
                        const {image, st_h3, nd_h3, accent} = item;

                        return (
                            <div key={index} className={styles.contacts__gridItem}>
                                <img className={styles.contacts__icon} src={image} alt={image} />
                                <h3 className={`text-h3 ${styles.contacts__h3} ${styles.contacts__h3_gray}`} dangerouslySetInnerHTML={{__html: st_h3}}/>
                                <h3 className={`text-h3 ${styles.contacts__h3} ${accent ? styles.contacts__h3_accent : ''}`} dangerouslySetInnerHTML={{__html: nd_h3}} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Contacts;