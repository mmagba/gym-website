import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './About.css';

const About = () => {
    return <>
        <Header image={HeaderImage} title={'About Us'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />

        <section className="container about__section right-to-left">
            <img src={StoryImage} alt="" />
            <div>
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod tortor, eu malesuada tellus congue vitae. Ut vel tristique velit. Praesent sollicitudin, ante vitae mollis malesuada, massa sapien dapibus quam, non consectetur felis risus non risus. Nullam vel ultricies dolor. </p>
                <p>Suspendisse eu justo quis lorem sollicitudin malesuada. Donec rutrum lacinia semper. Integer vel neque vitae sapien dictum auctor. Fusce vulputate enim felis, a aliquam erat efficitur ac.</p>
            </div>
        </section>

        <section className="container about__section">
            <div>
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod tortor, eu malesuada tellus congue vitae. Ut vel tristique velit. Praesent sollicitudin, ante vitae mollis malesuada, massa sapien dapibus quam, non consectetur felis risus non risus. Nullam vel ultricies dolor. </p>
                <p>Suspendisse eu justo quis lorem sollicitudin malesuada. Donec rutrum lacinia semper. Integer vel neque vitae sapien dictum auctor. Fusce vulputate enim felis, a aliquam erat efficitur ac.</p>
            </div>
            <img src={VisionImage} alt="" />
        </section>

        <section className="container about__section right-to-left">
            <img src={MissionImage} alt="" />
            <div>
                <h1>Our Mission</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod euismod tortor, eu malesuada tellus congue vitae. Ut vel tristique velit. Praesent sollicitudin, ante vitae mollis malesuada, massa sapien dapibus quam, non consectetur felis risus non risus. Nullam vel ultricies dolor. </p>
                <p>Suspendisse eu justo quis lorem sollicitudin malesuada. Donec rutrum lacinia semper. Integer vel neque vitae sapien dictum auctor. Fusce vulputate enim felis, a aliquam erat efficitur ac.</p>
            </div>
        </section>





    </>
}

export default About;