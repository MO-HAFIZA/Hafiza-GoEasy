import React, { useEffect, useState } from "react";

const Bye = () => {
  const [timer, setTimer] = useState(10);
  const [showFireworks, setShowFireworks] = useState(false);
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setShowFireworks(true);
    }
  }, [timer]);
  
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1
        className="text-6xl font-extrabold animate__animated animate__fadeInDown shadow-md mb-8"
        style={{ color: "white" }}
      >
        Goodbye, dear friend!
      </h1>

      <p
        className="text-2xl my-5 animate__animated animate__fadeIn animate__delay-1s shadow-lg"
        style={{ color: "white" }}
      >
        It's hard to see you go, but we know you'll come back soon! 💖
      </p>

      {!showFireworks && (
        <div className="mt-10">
          <h2 className="text-4xl font-bold mb-3">{(timer > 0) ? "Warning! Stay away from your device. It's about to blow up!" : "Just kidding! Enjoy the fireworks! 🎆"}</h2>
          <p className="text-3xl">Explosion in... {timer} seconds! ⏳</p>
        </div>
      )}

      {showFireworks && (
        <div className="fireworks-container w-full h-full absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className={`firework-${index}`} />
          ))}
        </div>
      )}

      <style jsx>{`
        .fireworks-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @keyframes explode {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(3.5);
            opacity: 0;
          }
        }

        ${Array.from({ length: 15 })
          .map((_, index) => {
            const size = Math.random() * 20 + 10; 
            const x = Math.random() * 100; 
            const y = Math.random() * 100; 
            const delay = Math.random() * 2; 
            return `
              .firework-${index} {
                position: absolute;
                top: ${y}%;
                left: ${x}%;
                width: ${size}px;
                height: ${size}px;
                background-color: transparent;
                border-radius: 50%;
                box-shadow: 0 0 20px 5px rgba(255, 69, 0, 0.9), 0 0 50px 10px rgba(255, 140, 0, 0.7);
                animation: explode 1.5s ease-out ${delay}s infinite;
              }
            `;
          })
          .join("\n")}
      `}</style>
    </div>
  );
};

export default Bye;
