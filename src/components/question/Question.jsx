import styles from './Question.module.css';
import {useState} from "react";

const Question = () => {
    const [itemState, setItemState] = useState(['close', 'open', 'close', 'close']);

    const accordionFn = (idx) => {
        setItemState(prevState => {
            prevState = prevState.map(() => 'close');
            prevState[idx] = 'open';

            return prevState
        })
    }

    return (
        <section className={styles.question}>
            <div className="container">
                <h2 className={`text-h2 ${styles.section__h2}`}>Ответы на вопросы</h2>

                <div className={styles.question_items}>
                    {Array.from({length:4}).map((_,index) => {

                        return (
                            <div
                                key={index}
                                className={styles.question_item}
                                data-state={itemState[index]}
                                onClick={() => accordionFn(index)}
                            >
                                <h3 className={`text-h3 ${styles.question_h3}`}>Работаете ли Вы по 249 ФЗ?</h3>
                                <p className={`text-p ${styles.question__p}`}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                                    вэб-дизайне.
                                    Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                                    В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                                    используя Lorem Ipsum для распечатки образцов. </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Question;