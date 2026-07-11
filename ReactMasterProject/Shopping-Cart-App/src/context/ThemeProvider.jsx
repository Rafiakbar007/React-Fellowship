

import {ThemeContext} from "./ThemeContext"
import { useState } from "react"

function ThemeProvider({children}) {

    const [darkMode, setDarkMode] = useState(false)

     function toggleTheme() {
        setDarkMode(!darkMode);
    }


    return(

        <div>
            <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode,
                toggleTheme,
            }}
            >

                {children}


            </ThemeContext.Provider>

        </div>
    )
}

export default ThemeProvider