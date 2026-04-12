
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  primary: string;
  setPrimary: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [primary, setPrimaryState] = useState("#3b82f6");
console.log("skjfkjadsd",theme,primary)
  // dark mode apply
  useEffect(() => {
    // document.documentElement.classList.toggle("dark", theme === "dark");
      if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

      localStorage.setItem("theme", theme); // 👈 ADD THIS
  }, [theme]);

  // load saved color
  useEffect(() => {
    const saved = localStorage.getItem("primary");
    if (saved) {
      setPrimaryState(saved);
      document.documentElement.style.setProperty("--primary", saved);
    }
      const savedTheme = localStorage.getItem("theme") as Theme;
  if (savedTheme) {
    setTheme(savedTheme);
  }

  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const setPrimary = (color: string) => {
    setPrimaryState(color);
    localStorage.setItem("primary", color);
    document.documentElement.style.setProperty("--primary", color);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, primary, setPrimary }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("Use inside provider");
  return ctx;
};