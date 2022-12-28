import React from "react";
import "./PlatformsSection.css";

function PlatformsSection() {
  return (
    <div
      className="platforms-section"
      style={{ backgroundImage: "url(/img-app.png)" }}
    >
      <div className="platforms-section-info">
        <h1 className="platforms-section-title">Disponible en todos lados</h1>
        <p className="platforms-section-description">
          In consequat, quam id sodales hendrerit, eros mi molestie leo an
          lacinia risus neque tristique augue. Proin tempus urna vel congue
          elementum. Vestibulum euismod accumsan.
        </p>
        <div className="platforms-section-buttons">
          <img
            className="platforms-section-button"
            src="appstore.png"
            alt="App Store"
          />
          <img
            className="platforms-section-button"
            src="googleplay.png"
            alt="Google Play"
          />
        </div>
      </div>
    </div>
  );
}

export default PlatformsSection;
