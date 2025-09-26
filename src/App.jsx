import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 }); // animation duration 1200ms
  }, []);



  return (
    <>

    <h1>hello</h1>
      
    </>
  )
}

export default App
