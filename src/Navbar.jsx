import React from 'react'

function Navbar() {
  return (

<nav className="fixed top-0 left-0 w-full z-10 border-b border-white/10 text-white">
        <div className="relative">
          <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-md -z-10"></div>
          <div className="w-full px-10 py-3 flex justify-between items-center relative z-10">

           <div className="logo w-14">
            <img className='w-full h-full object-cover' src="https://wrogn.com/cdn/shop/files/logo_icon_1_bd4a99ba-1c20-43de-81ff-1f5fb0685b8e.svg?v=1736489168&width=75" alt="" />
        </div>
        <div className="links flex items-center gap-7 uppercase font-[font-bold]">
            {["eoss","exclusive", "all Product", "topwear", "bottomwear", "footwear"].map((item, index)=>{
                return(
               <a className='hover:text-yellow-200' key={index} href="">{item}</a>)
                
            })}
        </div>
        <div className="left flex items-center gap-5 ">
          <svg className='cursor-pointer hover:text-yellow-200' width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" id="svgkp" data-testid="kwikpass-icon">
  <path d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z" fill="#FEA203"></path>
  <path id="svgkp-path" fill-rule="evenodd" clip-rule="evenodd" d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z" fill="currentColor" stroke="currentColor"></path>
</svg>
<svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" data-testid="icon-cart-svg-header">
      <path d="M16.3242 8.93066V7.43066C16.3242 6.4361 15.9291 5.48228 15.2259 4.77901C14.5226 4.07575 13.5688 3.68066 12.5742 3.68066C11.5796 3.68066 10.6258 4.07575 9.92255 4.77901C9.21929 5.48228 8.8242 6.4361 8.8242 7.43066V8.93066M20.1802 9.93766L21.4432 20.9377C21.5132 21.6027 20.9932 22.1807 20.3242 22.1807H4.8242C4.66641 22.1808 4.51035 22.1478 4.36615 22.0837C4.22196 22.0197 4.09285 21.926 3.98723 21.8087C3.8816 21.6915 3.80182 21.5534 3.75306 21.4033C3.7043 21.2532 3.68765 21.0946 3.7042 20.9377L4.9682 9.93766C4.99736 9.66122 5.12783 9.40537 5.33445 9.21942C5.54108 9.03348 5.80923 8.93061 6.0872 8.93066H19.0612C19.6372 8.93066 20.1202 9.36566 20.1802 9.93766Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
        </div>



          </div>
        </div>
      </nav>
  )
}

export default Navbar