import React from 'react';
import { useState } from "react";
import "../slide/Slide.scss";
import BtnSlice from "./BtnSlice"
import DataSlice from "./dataSlide";


const Slide = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DataSlice.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === DataSlice.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(DataSlice.length)
    }
  }

  const moveDot = (i) => {
    setSlideIndex(i)
  }
  return (

    <div className="container-slider">
      {DataSlice.map((obj, i) => {
        return (

          <div key={obj.id}
            className={slideIndex === i + 1 ? "slide active-anim" : "slide"}>

            <img src={process.env.PUBLIC_URL + `/dataImage/img${i + 1}.jpg`} />
          </div>
        )
      })
      }
      <BtnSlice moveSlide={nextSlide} direction={"next"} />
      <BtnSlice moveSlide={prevSlide} direction={"prev"} />


      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, i) => (
          <div
            onClick={() => moveDot(i + 1)}  
            className={slideIndex === i + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>

  );
}
export default Slide;
