import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return <section className='container not-found'>
        <div className='not-found__wrapper'>
            <h1>Page Not Found</h1>
            <Link to='/' className='btn' >Home</Link>
        </div>
    </section>
};

export default NotFound;