import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';

import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
