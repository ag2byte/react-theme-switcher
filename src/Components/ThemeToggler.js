import React from "react";

import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";
const ThemeToggler = (currentTheme) => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <button
      style={{
        padding: "15px 25px",
        backgroundColor: "#6F00ED",
        border: `${currentTheme.border}`,
        color: "#fff",
      }}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      {themeMode === "light" ? "SEE DARK MODE" : "SEE LIGHT MODE"}
    </button>
  );
};
export default ThemeToggler;
