import React, {useState} from 'react'


export const useDarkMode = (key) => {
    const[darkMode, setDarkMode] = useState('darkMode')

    return [darkMode, setDarkMode]
}
