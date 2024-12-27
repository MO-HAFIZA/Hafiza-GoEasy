import React, { useEffect } from 'react';
import ana from "../assets/انا اتغيرت عشانك.jpg";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const GoodBaye = () => {
    const navigate = useNavigate(); 
    const runAway = () => {
      navigate("/runaway"); 
    };
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
  return (
    
    <>
    <div className="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen flex flex-col justify-center items-center text-center py-20">
      <br />
      <h1 className="text-6xl font-extrabold text-red-500 animate__animated animate__fadeInDown animate__delay-1s">
        Oh, you’re leaving? Finally! 🙄
      </h1>
      
      <p className="text-3xl text-white my-5 animate__animated animate__fadeIn animate__delay-2s">
        Couldn’t handle the awesomeness here, huh? Or did you think the grass is greener somewhere else? Spoiler alert: It’s not. 🌱
      </p>
      
      <p className="text-xl text-gray-400 mb-5 animate__animated animate__fadeIn animate__delay-3s">
        Don’t let the door hit you on the way out. Actually, never mind, let it. Maybe it’ll knock some sense into you. 💀
      </p>
      
      <div className="animate__animated animate__fadeIn animate__delay-4s">
        <Button onClick={runAway} >
          Yeah, run away! 🤡
        </Button>
      </div>
      <br />
      <div className="mt-10 animate__animated animate__fadeIn animate__delay-5s">
        <img
          src={ana}
          alt="Disappointment Meme"
          className="w-[50%] rounded-xl shadow-2xl transform hover:scale-125 transition-all duration-300"
        />
      </div>

      <p className="text-xl text-white mt-8 animate__animated animate__fadeIn animate__delay-6s">
        You’ll be crawling back soon. Trust me. We’re like that last piece of pizza you said you didn’t want but can’t stop thinking about. 🍕
      </p>
      
      <p className="text-xl text-red-500 mt-5 animate__animated animate__fadeIn animate__delay-7s">
        <span className="font-bold">PS:</span> The internet won’t miss you, but we might… for entertainment value. 😏
      </p>
    </div>
    </>
  );
};

export default GoodBaye;
