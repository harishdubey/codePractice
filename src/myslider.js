import React, { useEffect, useState } from "react";
import First from "./assets/First.jpg";
import Second from "./assets/Second.jpg";
import Third from "./assets/Third.jpg";
import "./imageSlider.css";

const MyImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderImages = [
        {
            label: "title 1",
            imgPath: First
        }, {
            label: "title 2",
            imgPath: Second
        }, {
            label: "title 3",
            imgPath: Third
        },
    ]
    const len = sliderImages.length - 1;
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }, 2000)
        return () => clearInterval(interval)
    }, [activeIndex])

    return (
        <div className="slider-container">
            <SliderImages activeIndex={activeIndex} sliderImages={sliderImages} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                sliderImages={sliderImages}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default MyImageSlider;



const SliderImages = ({ activeIndex, sliderImages }) => {
    return (
        <div>
            {sliderImages.map((item, index) => {
                return (
                    <div key={index} className={activeIndex === index ? "slides active" : "inactive"}>
                        <h2 className="slide-title"> {item.label}</h2>
                        <img src={item.imgPath} className="slide-image" />
                    </div>
                )
            })}
        </div>
    )
}

const Arrows = ({ prevSlide, nextSlide }) => {
    return (<div className="arrows">
        <div className="prev" onClick={prevSlide}>Prev</div>
        <div className="next" onClick={nextSlide}>Next</div>
    </div>
    )
}

const Dots = ({ activeIndex, sliderImages, onClick }) => {
    return (
        <div className="all-dots">{sliderImages.map((item, index) => (
            <span key={item.label} className={activeIndex === index ? "dot active-dot" : "dot"}
                onClick={() => onClick(index)}
            >
                {index + 1}
            </span>
        ))
        }
        </div >
    )
}