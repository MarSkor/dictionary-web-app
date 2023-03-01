import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
    const theme = localStorage.getItem('data-theme');
    if(!theme){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    } else {
        return theme
    }
}

const getFont = () => {
    const font = localStorage.getItem('data-font');
    if(!font){
        document.documentElement.setAttribute('data-font', 'sans-serif')
        localStorage.setItem('data-font', 'sans-serif');
    }
    else {
        return font
    }
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getTheme);
    const [font, setFont] = useState(getFont);

    function toggleTheme(){
        if(theme === 'light'){
            setTheme('dark');
        } else {
            setTheme('light')
        }
    };


    function toggleFont(font){
        if(font === "sans-serif"){
            setFont("sans-serif");
        }
        else if(font === "monospace"){
            setFont("monospace")
        }
        else if(font === "serif"){
            setFont("serif")
        }
        else{
            setFont("sans-serif")
        }
    }

    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem("data-theme", theme);
            document.documentElement.setAttribute("data-theme", theme)
        };

        const refreshFont = () => {
            localStorage.setItem("data-font", font);
            document.documentElement.setAttribute("data-font", font)
        }

        refreshFont();
        refreshTheme();
    }, [theme, font]);

    
    return(
        <ThemeContext.Provider
        value={{
            theme,
            setTheme,
            toggleTheme,
            font,
            setFont,
            toggleFont
          }}
        >
            { children }
        </ThemeContext.Provider>
    )

};

export { ThemeContext, ThemeProvider }