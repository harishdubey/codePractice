import React, { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
const ContextCheck = () => {
    const [theme, setTheme] = useState("light");
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Current Theme {theme}</h1>
                <button onClick={changeTheme}>
                    Toggle
                </button>
                <ThemeDisplay />
            </div>
        </ThemeContext.Provider>
    )
}

export default ContextCheck;

const ThemeDisplay = () => {
    const theme = useContext(ThemeContext);
    return (
        <h2>Theme from Context {theme}</h2>
    )
}