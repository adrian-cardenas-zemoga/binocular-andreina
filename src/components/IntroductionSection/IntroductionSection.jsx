import React from "react";
import "./IntroductionSection.css";

function IntroductionSection() {
  return (
    <div className="introduction-container">
      <img
        className="introduction-icon"
        src="icon-tracing.svg"
        alt="Introduction Icon"
      />
      <div className="introduction-section">
        <img
          className="introduction-image"
          src="img-tracing.png"
          alt="Introduction Image"
        />
        <div className="introduction-info">
          <h1 className="introduction-info-title">
            Monitoreo constante de tus productos
          </h1>
          <p className="introduction-info-description">
            In consequat, quam id sodales hendrerit, eros mi molestie leo an
            lacinia risus neque tristique augue. Proin tempus urna vel congue
            elementum. Vestibulum euismod accumsan.
          </p>
          <ul className="introduction-list">
            <li>
              Lorem ipsum dolor sit amet into consectetur adipiscing elit.
            </li>
            <li>Lorem ipsum dolor sit amet into consectetur.</li>
            <li>Lorem ipsum dolor sit amet into consectetur adipiscing.</li>
          </ul>
          <button type="submit" className="introduction-button">
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
