import React from "react";

export const themes = {
    light: {
        background: "#efa534",
        color:"#000"
    },
    dark :{
        color:"#fff",
        background: "#107c51"
    }
}



export const ThemeContext =  React.createContext({
    themes:themes.light,
    switchTheme:() => {}
});

