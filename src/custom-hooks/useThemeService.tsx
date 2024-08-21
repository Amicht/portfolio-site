import { useState } from 'react'
import { themes } from '../context/ThemeCtxt';

const useThemeService = () => {

    const [theme, setTheme] = useState({dark: themes.light, light:themes.dark});
    const [isChecked, setIsChecked] = useState(false);

    const changeTheme = () => {
        if(isChecked) {
            const newTheme = {dark: themes.light, light:themes.dark};
            setTheme(newTheme)
        }
        else{
            setTheme(themes);
        }
        setIsChecked(!isChecked)
    }
    return {
        changeTheme,
        theme
    }
}

export default useThemeService;