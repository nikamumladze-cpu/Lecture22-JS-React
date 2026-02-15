import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <header className="header">
<a href="/">LOGO</a>      <button onClick={toggleMode} className="theme-btn">
        {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
};

export default Header;
