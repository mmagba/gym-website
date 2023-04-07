import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
                <li>
                    <NavLink to="gallery">Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="plans">Plans</NavLink>
                </li>
                <li>
                    <NavLink to="trainers">Trainers</NavLink>
                </li>
                <li>
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;