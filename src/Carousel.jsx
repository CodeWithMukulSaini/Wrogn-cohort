import React from 'react'
import Cart1 from "./assets/cart1.png";
import Cart2 from "./assets/cart2.png";
import Cart3 from "./assets/cart3.png";

const Carousel = () => {
  return (
   <div className="w-full h-screen flex items-end justify-center bg-[#AC927D]">
    <div className="card relative h-[50%] ">
      <div className="cart-img absolute h-[40vh] -top-[75%] left-0 bg-">
              <img className='w-full h-full object-cover' src={Cart1} alt="" />
      </div>

       <svg
      viewBox="0 0 600 250"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "30vw", height: "auto"  }}
    >
      {/* Glassy Card Shape */}
      <path
        d="M 10 0 H 90 Q 100 0 110 18 Q 115 22 130 22 H 470 Q 485 22 490 18 Q 500 0 510 0 H 590 Q 600 0 600 10 V 240 Q 600 250 590 250 H 10 Q 0 250 0 240 V 10 Q 0 0 10 0 Z"
        fill="rgba(13, 11, 11, 0.4)"
        stroke="rgba(0, 0, 0, 0.4)"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Flex Layout */}
      <foreignObject x="0" y="0" width="600" height="250">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "20px",
            gap:"60px",
            fontFamily: "sans-serif",
            color: "white",
            boxSizing: "border-box",
          
          }}
        >
          {/* Top Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              Nike <br />/ Jordan
            </div>
            <div style={{ fontSize: "32px", fontWeight: "bold" }}>
              $133.<span style={{ opacity: 0.5, fontWeight: "normal" }}>00</span>
            </div>
          </div>

          {/* Bottom Row */}
          <div>
            <button
              style={{
                background: "white",
                color: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                fontWeight: "bold",
                fontFamily: "monospace",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </foreignObject>
    </svg>
    </div>
   </div>
  );
};


export default Carousel