"use client"

import React,{createContext, useContext,useEffect,useState} from 'react'
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light');

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme){
            setTheme(savedTheme);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('theme',theme);
    },[theme])

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider