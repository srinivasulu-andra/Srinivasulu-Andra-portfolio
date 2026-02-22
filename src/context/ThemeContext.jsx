import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}