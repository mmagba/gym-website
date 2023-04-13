import './FAQs.css';
import { faqs } from '../data';
import FAQ from './FAQ';
import { FaQuestion } from 'react-icons/fa';
import SectionHead from './SectionsHead';

const FAQs = () => {
    return (
        <section className='faqs'>
            <div className='container faqs__container'>
                <SectionHead title='FAQs' icon={<FaQuestion />} />
                <div className='faqs__wrapper'>
                    {
                        faqs.map((faq) => <FAQ key={faq.id} question={faq.question} answer={faq.answer} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FAQs;