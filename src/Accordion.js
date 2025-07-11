import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {

    const accordionData = [
        { title: "Title 1", content: "Content1 Content1 Content1 Content1 Content1 Content1 Content1 Content1 Content1 Content1 " },
        { title: "Title 2", content: "Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 " },
        { title: "Title 3", content: "Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 Content3 " },
    ];
    return (
        <div>
            <h1>React Accordion</h1>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <AccordionItem title={title} content={content} />
                ))}

            </div>
        </div>
    )
}


const AccordionItem = ({ title, content }) => {
    const [active, setActive] = useState(false);
    return (<>
        <div className="accordion-title" onClick={() => { setActive(!active) }}>
            <div>  {title} </div>
            <div>{active ? "-" : "+"}</div>
        </div>
        {active && <div className="accordion-content">
            {content}
        </div>}
    </>
    )
}


export default Accordion;