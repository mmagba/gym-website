import { Link } from 'react-router-dom';
import image from '../images/main_header.png';
import './MainHeader.css';

const MainHeader = () => {

    return (
        <header className='main__header'>
            <div className='container main__header-container'>
                <div className='main__header-left'>
                    <h4>#100DaysWorkout</h4>
                    <h1>Join The Legends Of The Fitness World</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/plans" className='btn lg'>Get Started</Link>
                </div>

                <div className='main__header-right'>
                    <div className='main__header-circle'></div>
                    <div className='main__header-image'>
                        <img src={image} alt='Header image featuring a man working out in a gym to promote fitness and healthy lifestyle.'></img>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default MainHeader;