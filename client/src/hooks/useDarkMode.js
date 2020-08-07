import React, {useState} from 'react'


export const useDarkMode = (initialValue) => {
    const[darkMode, setDarkMode] = useState(initialValue)

    const toggleMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return [darkMode, toggleMode]
}

