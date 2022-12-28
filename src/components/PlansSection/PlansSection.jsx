import React from "react";
import Plans from "../Plans/Plans";
import "./PlansSection.css";

function PlansSection() {
  return (
    <div className="plans-section">
      <h1 className="plans-section-title">Planes</h1>
      <p className="plans-section-description">
        In consequat, quam id sodales hendrerit, eros mi molestie leo an lacinia
        risus neque tristique augue. Proin tempus urna vel congue.
      </p>
      <div className="plans-cards">
        <div className="plans-cards-list">
          <Plans
            title="Plan A"
            description="Lorem ipsum dolor"
            list={[
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
            ]}
          ></Plans>
          <Plans
            title="Plan B"
            description="Lorem ipsum dolor"
            list={[
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
            ]}
            active={true}
          ></Plans>
          <Plans
            title="Plan C"
            description="Lorem ipsum dolor"
            list={[
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
              "Lorem ipsum dolor",
            ]}
          ></Plans>
        </div>
        <div className="plans-contact">
          <h1 className="plans-contact-title">Contactanos</h1>
          <p className="plans-contact-description">
            Comuníquese con nuestro equipo de ventas y solicite una prueba.
          </p>
          <input
            className="plans-contact-input"
            type="text"
            placeholder="nombre@empresa.com"
          />
          <button className="plans-contact-button">Probar Binocular</button>
        </div>
      </div>
    </div>
  );
}

export default PlansSection;
