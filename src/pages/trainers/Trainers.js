import './Trainers.css';
import { trainers } from '../../data';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import Card from '../../UI/Card';

import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const Trainers = () => {
    return <>
        <Header image={HeaderImage} content='Meet our expert trainers who will guide you towards your fitness journey.' title='Our Trainers' />


        <section className='container'>
            <div className='trainers__container'>
                {
                    trainers.map((trainer) => {
                        return <Card key={trainer.id} className="trainer">
                            <img src={trainer.image} alt='trainer img' />
                            <h3>{trainer.name}</h3>
                            <p>{trainer.job}</p>

                            <div className='trainer__socials'>
                                <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'>
                                    <BsInstagram />
                                </a>
                                <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'>
                                    <AiOutlineTwitter />
                                </a>
                                <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'>
                                    <FaFacebook />
                                </a>
                                <a href='https://linkedin.com' target='_blank' rel='noreferrer noopener'>
                                    <FaLinkedin />
                                </a>
                            </div>


                        </Card>
                    })
                }
            </div>
        </section>
    </>
};

export default Trainers;
