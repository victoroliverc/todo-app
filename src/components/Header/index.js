import React from "react";
import "./styles.css";

function Header({ onChangeTheme: handleChangeTheme }) {
  return (
    <header>
      <h1 className="logo">TODO</h1>
      <label>
        <input id="theme" type="checkbox" onChange={handleChangeTheme}></input>
        <span className="theme-checkbox"></span>
      </label>
    </header>
  );
}

export default Header;
