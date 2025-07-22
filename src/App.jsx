import React from 'react'
import  Hero  from "./Hero";
import Navbar from "./Navbar";
import Carousel from './Carousel';


function App() {
  return (
        <div className='main'> 
        <Navbar/>
        <Hero/>
        <h1 className='text-center font-[font-semibold] text-3xl my-10'>WEAR IT LIKE VIRAT</h1>
        <Carousel/>
        </div>
  )
}

export default App