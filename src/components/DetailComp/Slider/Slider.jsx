import { useState } from "react";
import "./Slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const handleSlideChange = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full__slider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              onClick={() => handleSlideChange("left")}
            />
          </div>
          <div className="image__container">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              className="right__arrow"
              onClick={() => handleSlideChange("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="slider__left">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="slider__right">
        {images.slice(1).map((img, index) => (
          <img src={img} key={index} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
