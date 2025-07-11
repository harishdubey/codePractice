import React from 'react';
const yearArray = [
    {
        Year: "2014",
        name: "test1",
        surname: "surname1",
    },
    {
        Year: "2013",
        name: "test2",
        surname: "surname2"
    },
    {
        Year: "2014",
        name: "test3",
        surname: "surname3"
    },
    {
        Year: "2014",
        name: "test4",
        surname: "surname4"
    },
    {
        Year: "2012",
        name: "test5",
        surname: "surname5"
    },
    {
        Year: "2012",
        name: "test6",
        surname: "surname6"
    },
    {
        Year: "2014",
        name: "test7",
        surname: "surname7"
    },
    {
        Year: "2014",
        name: "test8",
        surname: "surname18"
    },
    {
        Year: "2013",
        name: "test9",
        surname: "surname19"
    },
    {
        Year: "2011",
        name: "test10",
        surname: "surname10"
    },
    {
        Year: "2014",
        name: "test11",
        surname: "surname11"
    },
    {
        Year: "2014",
        name: "test11",
        surname: "surname11"
    }
]

function Year() {
    const outputYearObj =
        yearArray.reduce((r, a) => {
            r[a.Year] = r[a.Year] || [];
            r[a.Year].push(a);
            return r;
        }, Object.create(null)
        );
    console.log(
        "Output Year Object: ", outputYearObj
    );
    return (
        <div>
            <div>Output Year Object
                {Object.keys(outputYearObj).map((year) => (
                    <div key={year}>
                        <h3>{year}</h3>
                        <ul style={{ listStyleType: 'none', display: "inline", padding: 0 }}>
                            {outputYearObj[year].map((item, index) => (
                                <li key={index} style={{ listStyleType: 'none', display: "inline", padding: "0 10px 0 0" }}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Year;