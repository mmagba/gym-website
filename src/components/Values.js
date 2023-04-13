import './Values.css';
import Image from '../images/values.jpg';
import SectionHead from './SectionsHead';
import { IoDiamondOutline } from 'react-icons/io5';
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
    return (
        <section className='values'>
            <div className='container values__container'>
                <div className='values__left'>
                    <img src={Image} alt='a woman wroking out'></img>
                </div>
                <div className='values__right'>
                    <SectionHead icon={<IoDiamondOutline />} title="Our Values" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed aliquam elit ac purus bibendum, eu pharetra dolor congue.</p>
                    <div className='values__wrapper'>
                        {
                            values.map((value) => (<Card key={value.id} className='values__value'>
                                <span>{value.icon}</span>
                                <h4>{value.title}</h4>
                                <small>{value.desc}</small>
                            </Card>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;

