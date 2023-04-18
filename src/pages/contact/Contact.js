import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import './Contact.css'

const Contact = () => {
    return <>
        <Header title='Get In Touch' image={HeaderImage} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <section className='container contact__container'>
            <a href='https://google.com' target='_blank' rel='noreferrer noopener'>
                <MdEmail />
            </a>
            <a href='https://google.com' target='_blank' rel='noreferrer noopener'>
                <BsMessenger />
            </a>
            <a href='https://google.com' target='_blank' rel='noreferrer noopener'>
                <IoLogoWhatsapp />
            </a>
        </section>
    </>
};

export default Contact;