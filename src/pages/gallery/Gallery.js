import './Gallery.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';

const Gallery = () => {
    const images = [];
    const galleryLength = 15;

    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`));
    }

    return <>
        <Header image={HeaderImage} title='Our Gallery' content='Experience Fitness in Motion: Explore Our Gallery of Workout Images and Inspire Your Fitness Journey Today!'></Header>
        <section className='gallery'>
            <div className='container gallery__container'>
                {
                    images.map((image, index) => {
                        return <article key={index}>
                            <img src={image} alt={`gallery pic ${index + 1}`} />
                        </article>
                    })
                }
            </div>
        </section>
    </>
};

export default Gallery;