import React, { useEffect, useState } from "react";
import First from "./assets/First.jpg";
import Second from "./assets/Second.jpg";
import Third from "./assets/Third.jpg";
import "./imageSlider.css";

const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const MyCollection = [
        {
            label: "First Picture",
            imgPath: First,
        },
        {
            label: "Second Picture",
            imgPath: Second,
        },
        {
            label: "Third Picture",
            imgPath: Third,
        },
    ];
    const sliderLength = MyCollection.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === sliderLength ? 0 : activeIndex + 1)
        }, 2000)
        return () => clearInterval(interval)
    }, [activeIndex])

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={MyCollection} />
            <Arrows
                prevSlide={() => setActiveIndex(activeIndex < 1 ? sliderLength : activeIndex - 1)}
                nextSlide={() => setActiveIndex(activeIndex === sliderLength ? 0 : activeIndex + 1)}
            />
            <Dots
                activeIndex={activeIndex}
                sliderImage={MyCollection}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default ImageSlider;

const SliderContent = ({ activeIndex, sliderImage }) => {
    return (
        <>
            {sliderImage.map((item, index) => (
                <div className={activeIndex === index ? "slides active" : "inactive"}>
                    <img src={item.imgPath} alt={item.label} className="slide-image" />
                    <h2 className="slide-title">{item.label}</h2>
                </div>
            ))}
        </>
    )
};

const Arrows = ({ prevSlide, nextSlide }) => {
    return (<div className="arrows">
        <span className="prev" onClick={prevSlide}> Prev</span>
        <span className="next" onClick={nextSlide}>Next </span>
    </div>)
}

const Dots = ({ activeIndex, sliderImage, onClick }) => {
    return (<div className="all-dots">
        {sliderImage.map((item, index) => (
            <span key={item.label} className={activeIndex === index ? "dot active-dot" : "dot"}
                onClick={() => onClick(index)}
            >{index + 1}</span>
        ))}
    </div>
    )
}