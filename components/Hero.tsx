
import React from 'react';

interface HeroProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <div
      className="relative bg-cover bg-center h-64 md:h-80 flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
        <p className="mt-2 md:mt-4 max-w-2xl mx-auto text-lg md:text-xl opacity-90">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
