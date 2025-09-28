import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import OurLoveStory from './component/OurLoveStory';
import WeddingEvents from './component/WeddingEvents';
import OurMoments from './component/OurMoments';
import JoinCelebration from './component/JoinCelebration';
import Footer from './component/ Footer';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 }); // animation duration 1200ms
  }, []);



  return (
    <>

    <Navbar></Navbar>
    <Hero></Hero>
    <OurLoveStory></OurLoveStory>
    <WeddingEvents></WeddingEvents>
    <OurMoments></OurMoments>
    <JoinCelebration></JoinCelebration>
    <Footer></Footer>
      
    </>
  )
}

export default App;
