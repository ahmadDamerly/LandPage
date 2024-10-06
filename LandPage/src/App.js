
import { Carousel, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { LandNav } from './Components/LandPage/LandNav';
import LandCarousel from './Components/LandPage/LandCarousel';
import { Section1 } from './Components/LandPage/Section1';
import { Section2 } from './Components/LandPage/Section2';
import { Section3 } from './Components/LandPage/Section3';
import { Section4 } from './Components/LandPage/Section4';
import { Section5 } from './Components/LandPage/Section5';
import { Section6 } from './Components/LandPage/Section6';
import { Section7 } from './Components/LandPage/Section7';
import { Section8 } from './Components/LandPage/Section8';
import { Footer } from './Components/LandPage/Footer';


function App() {
  return (
    <div >
      <LandNav/>
      <LandCarousel/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  );
}


export default App