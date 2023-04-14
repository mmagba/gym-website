import './Testimonials.css';
import { testimonials } from '../data';
import SectionHead from './SectionsHead';
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import Card from '../UI/Card';
import { useState } from 'react';

const Testimonials = () => {
    const [index, SetIndex] = useState(0);

    const rightArrowHandler = () => {
        if (index === testimonials.length - 1) {
            SetIndex(0);
        } else {
            SetIndex(prev => prev + 1);
        }
    };

    const leftArrowHandler = () => {
        if (index === 0) {
            SetIndex(testimonials.length - 1);
        } else {
            SetIndex(prev => prev - 1);
        }
    };



    return (
        <section className='testimonials'>
            <div className='testimonials__container container'>
                <SectionHead title='Testimonials' icon={<ImQuotesLeft />} className='testimonials__head' />

                <Card className="testimonial">
                    <div className='testimonial__avatar'>
                        <img src={testimonials[index].avatar} alt=''></img>
                    </div>

                    <p className='testimonial__quote'>
                        {`"${testimonials[index].quote}"`}
                    </p>
                    <h5>{testimonials[index].name}</h5>
                    <small>{testimonials[index].job}</small>
                </Card>

                <div className='testimonials__btn-container'>
                    <button onClick={leftArrowHandler} className='testimonials__btn'><IoIosArrowDropleftCircle /></button>
                    <button onClick={rightArrowHandler} className='testimonials__btn'><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;