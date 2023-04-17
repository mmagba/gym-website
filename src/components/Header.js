import './Header.css';

const Header = (props) => {
    return (
        <header className='header'>
            
            <div className='header__container'>
                <div className='header__container-bg'>
                    <img src={props.image} alt={props.alt} />
                </div>
                <div className='header__content'>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </div>
            </div>

        </header>
    )
};


export default Header;