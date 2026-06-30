import { useState } from "react";

import Area1 from "../assets/Area1.png";
import Area2 from "../assets/Area2.png";
import Area3 from "../assets/Area3.png";

function Hero() {
  const images = [Area1, Area2, Area3];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + images.length) % images.length
    );
  };

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Pakistan
        </h1>

        <p className="text-lg md:text-2xl mb-6">
          Discover the beauty of the north
        </p>

        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Explore Tours
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 rounded-full text-xl hover:bg-white"
      >
        
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width="24"
    height="24"
    fill="#000"
  >
    <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
  </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 rounded-full text-xl hover:bg-white"
      >
        
      <svg

className="rotate-180"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 640 640"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z"/>
 </svg>
   
      </button>
    </section>
  );
}

export default Hero;