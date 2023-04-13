import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './FAQ.css';
import { useState } from 'react';

const FAQ = (props) => {

    const [answerIsShowed, setAnswerIsShowed] = useState(false);


    return <article onClick={() => setAnswerIsShowed(prev => !prev)} className='faq'>
        <div>
            <h4>{props.question}</h4>
            <button className='faq__icon'>
                {answerIsShowed ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </button>
        </div>
        {answerIsShowed && <p>{props.answer}</p>}
    </article>
};

export default FAQ;