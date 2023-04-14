import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';



const Footer = () => {

    return (
        <footer>
            <div className='container footer__container'>
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='footer logo' />
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec nulla est. Etiam dapibus quam. </p>
                    <div className='footer__socials'>
                        <a href='https://linkedin.com' target='_blank' rel='noreferrer noopener'>
                            <FaLinkedin />
                        </a>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'>
                            <FaFacebook />
                        </a>
                        <a href='https://twitter.com' target='_blank' rel='noreferrer noopener'>
                            <AiOutlineTwitter />
                        </a>
                        <a href='https://instagram.com' target='_blank' rel='noreferrer noopener'>
                            <AiFillInstagram />
                        </a>
                    </div>
                </article>

                <article>
                    <h4>PermiaLinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/contact'>Contact</Link>
                </article>

                <article>
                    <h4>Insights</h4>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Case Studies</Link>
                    <Link to='/'>Events</Link>
                    <Link to='/'>Communities</Link>
                    <Link to='/'>FAQs</Link>
                </article>

                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/'>Support</Link>
                </article>
            </div>
        </footer>
    );
};

export default Footer;