/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

type ThemProviderProps = {
  children: React.ReactNode;
};
type ThemeType = "dark" | "light";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: () => null,
});

const ThemProvider = ({ children }: ThemProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const theme: ThemeType = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const state = useContext(ThemeContext);
  if (!state) throw new Error("ThemeContext is not available");
  return state;
};

export default ThemProvider;
