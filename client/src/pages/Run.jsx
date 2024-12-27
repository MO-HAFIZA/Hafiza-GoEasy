import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Run = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
  return (
    <div style={{color: "white"}} className="bg-black min-h-screen flex flex-col justify-center items-center text-center py-20">
      
      <h1 style={{color: "white"}} className="text-6xl font-extrabold text-red-600 animate__animated animate__fadeInDown animate__delay-1s">
        You really left? Seriously? 😑
      </h1>
      
      <p style={{color: "white"}} className="text-3xl text-gray-300 my-5 animate__animated animate__fadeIn animate__delay-2s">
        Imagine leaving something as legendary as this. Truly groundbreaking decision. 🤡
      </p>
      
      <p style={{color: "white"}} className="text-xl text-gray-500 mb-5 animate__animated animate__fadeIn animate__delay-3s">
        But hey, you do you. Just know, while you’re out there, we’ll keep thriving... without you. 💅
      </p>
      
      <div style={{color: "white"}} className="mt-10 animate__animated animate__fadeIn animate__delay-4s">
        <img
          src="https://media.tenor.com/s60k2aDG2xQAAAAC/crying-in-the-corner-alone.gif"
          alt="Regretful Crying Meme"
          style={{color: "white"}} className="w-[40%] rounded-xl shadow-2xl transform hover:scale-125 transition-all duration-300"
        />
      </div>
      
      <p style={{color: "white"}} className="text-xl text-gray-300 mt-8 animate__animated animate__fadeIn animate__delay-6s">
        Don’t worry though. We’ll be here… living rent-free in your head. 😜
      </p>
      
      <p style={{color: "white"}} className="text-2xl text-red-500 mt-5 animate__animated animate__fadeIn animate__delay-7s font-bold">
        Pro tip: Next time, think before you abandon greatness. 🧠✨
      </p>
      
      <div style={{color: "white"}} className="mt-10 animate__animated animate__fadeInUp animate__delay-8s">
        <br />
        <Button
        onClick={() => window.history.back()}
        >
          Go Back & Redeem Yourself 🙏
        </Button>
        <br /><br />
      </div>
    </div>
  );
};

export default Run;
