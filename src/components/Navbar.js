import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [mobileNavbarIsShowing, setMobileNavbarIsShowing] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavbarIsShowing(prev => !prev);
    };

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo'>
                    <img onClick={() => setMobileNavbarIsShowing(false)} src={Logo} alt="Nav Logo" />
                </Link>
                <ul className={`nav__links ${mobileNavbarIsShowing ? 'show__nav' : 'hide__nav'}`}>
                    <li>
                        <NavLink onClick={toggleMobileNav} className={({ isActive }) => isActive ? 'active-nav' : ''} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMobileNav} className={({ isActive }) => isActive ? 'active-nav' : ''} to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMobileNav} className={({ isActive }) => isActive ? 'active-nav' : ''} to="gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMobileNav} className={({ isActive }) => isActive ? 'active-nav' : ''} to="plans">Plans</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMobileNav} className={({ isActive }) => isActive ? 'active-nav' : ''} to="trainers">Trainers</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMobileNav} className={({ isActive }) => isActive ? 'active-nav' : ''} to="contact">Contact</NavLink>
                    </li>
                </ul>

                <button onClick={toggleMobileNav} className='nav__toggle-btn'>
                    {mobileNavbarIsShowing ? <MdOutlineClose /> : <GoThreeBars />}
                </button>


            </div>
        </nav>
    )
};

export default Navbar;