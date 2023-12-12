"use client"

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

/** Next.js is using server side rendering by default, but we're trying to use browser 
 * local storage, but in our server there is no browser, during the transition, it will
 * cause some problems, so we need to check the typeof window.
  */
const getFromLocalStorage = () => {
    if (typeof window !== "undefined" ) {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme ] = useState(() => {
        return getFromLocalStorage();
    });
    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
}