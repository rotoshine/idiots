import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/main.jpeg"
          alt="IDIOTS Band"
          layout="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
            이디어츠
          </h1>
          <p className="text-xl md:text-2xl tracking-wider mb-12">
            NEW SINGLE &quot;항해&quot; 발매
          </p>
          <a
            href="https://indistreet.com/albums/596/links?referrer=homepage"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full 
                           transition-colors duration-300 flex items-center mx-auto"
            >
              자세히 보기
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
