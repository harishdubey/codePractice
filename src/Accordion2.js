// Accordion.js
import React, { useState } from 'react';
import "./Accordion.css";

const Accordion2 = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const accordianData = [
        { title: "Section1", content: "lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 lorem Epsum 1 " },
        { title: "Section2", content: "lorem Epsum 2 lorem Epsum 2 lorem Epsum 2 lorem Epsum 2 lorem Epsum 2 lorem Epsum 2 lorem Epsum 2 " },
        { title: "Section3", content: "lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 lorem Epsum 3 " }
    ]

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="accordion-container">
            <h1>Accordion</h1>
            {
                accordianData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        isActive={activeIndex === index}
                        title={item.title}
                        content={item.content}
                        onClick={handleItemClick}
                    />
                ))
            }
        </div>
    );
};

const AccordionItem = ({ index, isActive, title, content, onClick }) => {
    return (<div className="accordion-item">
        <div className={isActive ? "activeTitle" : "accordion-title"} onClick={() => onClick(index)}>
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">
            {content}
        </div>}
    </div>
    );
}

export default Accordion2;

