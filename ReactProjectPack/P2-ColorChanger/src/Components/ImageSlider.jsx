
import { useEffect, useState } from "react";
import "./ImageSlider.css";

function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchImages() {
    try {
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();

      setImages(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  function handlePrevious() {
    setCurrSlide(
      currSlide === 0 ? images.length - 1 : currSlide - 1
    );
  }

  function handleNext() {
    setCurrSlide(
      currSlide === images.length - 1 ? 0 : currSlide + 1
    );
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="slider-container">
      <h1>Image Slider</h1>

      <button onClick={handlePrevious}>⬅</button>

      <img
        src={images[currSlide].download_url}
        alt="slider"
        className="slider-image"
      />

      <button onClick={handleNext}>➡</button>
    </div>
  );
}

export default ImageSlider;