import React from 'react'
import viratImg from './assets/virat-img.png'

function Hero() {
  return (
    <div className="hero w-full h-screen relative flex justify-center">
            <div className="lft-text absolute top-[50%] left-[2%] -translate-X-[50%] -translate-y-[50%]">
                <h1 className='font-[font-semibold] text-[7vw] leading-none tracking-tight text-white drop-shadow-md'>IT'S NOW</h1>
                    <h1 className='font-[font-semibold] text-[7.1vw] leading-none tracking-tight text-white drop-shadow-md'>OR NEVER!</h1>

                    <p className='text-2xl text-yellow-200 mt-5 font-[font-bina]'>get your hands on the  bestsellers that are <br /> almost sold out .</p>
            </div>
                <div className="hero-img w-[30vw] h-full pt-[10vh]"> 
                  <img className='w-full h-full object-cover' src={viratImg} alt="" />
                </div>
    <div className="rght-text absolute top-[50%] right-[3%] -translate-X-[50%] -translate-y-[50%] display-inline">
                <h1 className='font-[font] text-[5vw] leading-none text-center text-white drop-shadow-md'>FLAT</h1>
                   <div className='flex items-center justify-center'>
                     <h1 className='font-[font-semibold] text-[12vw] leading-none tracking-tight text-white drop-shadow-md text-yellow-300 tracking-tighter' >50%&#42;</h1>
                     <h1 className='-rotate-90 text-[3.5vw] text-yellow-300'>OFF</h1>
                   </div>

                    <p className='text-3xl leading-none tracking-normal text-white text-center font-[font-bina]'>+5%* off on Prepaid</p>
            </div>
              </div>
  )
}

export default Hero