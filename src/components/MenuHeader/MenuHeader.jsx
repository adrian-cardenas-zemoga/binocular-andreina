import React from "react";
import "./MenuHeader.css";

function MenuHeader() {
  return (
    <div className="menu-header">
      <div className="menu-header-elements">
        <a href="#" className="menu-header-logo">
          <img src="logo-binocular.svg" alt="Logo Binocular" />
        </a>
        <nav className="menu-header-nav">
          <ul>
            <li>
              <a href="#">¿Para que?</a>
            </li>
            <li>
              <a href="#">Metricas</a>
            </li>
            <li>
              <a href="#">Soporte</a>
            </li>
            <li>
              <a href="#">Preguntas</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-header-button">
        <button type="submit">Acceder</button>
      </div>
    </div>
  );
}

export default MenuHeader;
