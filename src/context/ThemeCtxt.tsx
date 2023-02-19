import React from "react"

export const themes = {
    dark: {
        backgroundColor: "#457b9d",
        color: "#f1faee"
    },
    light: {
        backgroundColor: "#f1faee",
        color: "#457b9d"
    }
}



export const ThemeCtxt = React.createContext(themes);

// $primary: #457b9d;
// $light / secondary: #f1faee;
// $info: #f0df5e;
// $red: #a8dadc;
// $dark: #1d3557;