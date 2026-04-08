import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
   <div className='container p-5 mb-5'>
     <div className='row text-center'>
       
       <img 
         src='/Media/images/images/homeHero.png' 
         alt="Investing dashboard preview" 
       />

       <h1 className='mt-5'>Invest in everything</h1>

       <p>
         Everything you need to invest in stocks, mutual funds, and derivatives.
       </p>

       <button
         className='p-2 btn btn-primary fs-5 mb-5'
         style={{ width: "20%", margin: "0 auto" }}
         onClick={() => navigate("/signup")}   // ✅ FIX
       >
         Signup Now
       </button>

     </div>
   </div>
  );
}

export default Hero;