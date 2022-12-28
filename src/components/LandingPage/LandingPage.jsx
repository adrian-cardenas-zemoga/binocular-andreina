import React from "react";
import "./LandingPage.css";
import MenuHeader from "../MenuHeader/MenuHeader";

function LandingPage() {
  return (
    <div
      className="landing-page"
      style={{ backgroundImage: "url(/landing-background.png)" }}
    >
      <MenuHeader />
      <div className="landing-page-container">
        <h1>El Monitor comercial</h1>
        <h2>que se adapta a ti</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour,
        </p>
        <div className="landing-page-form">
          <input
            type="text"
            className="landing-page-form-input"
            placeholder="nombre@empresa.com"
          />
          <button className="landing-page-form-button">Probar Binocular</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
