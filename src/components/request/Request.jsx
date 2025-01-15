import messageIcon from '../../assets/messageIcon.svg';
import styles from './Request.module.css';

const Request = (props) => {
    const {text_h4, text_h5, inlineStyle} = props;
    return (
        <section className={styles.request}>
            <div className="container">
                <div className={styles.request__flex}>
                    <div className={styles.request__flexLeft}>
                        <h4 className={styles.request__h4} style={{...inlineStyle}}>{text_h4}</h4>
                        <h5 className={styles.request__h5}>{text_h5}</h5>
                    </div>
                    <div className={styles.request__flexRight}>
                        <button className={styles.request__button}>
                            <img className={styles.request__icon} src={messageIcon} alt="messageIcon" />
                                Ваш запрос
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Request;