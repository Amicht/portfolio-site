import React from "react"

export const themes = {
    dark: {
        backgroundColor: "#FFFFFF",
        color: "#160559"
    },
    light: {
        backgroundColor: "#160559",
        color: "#FFFFFF"
    }
}



export const ThemeCtxt = React.createContext(themes);

// $primary: #457b9d;
// $light / secondary: #f1faee;
// $info: #f0df5e;
// $red: #a8dadc;
// $dark: #1d3557;