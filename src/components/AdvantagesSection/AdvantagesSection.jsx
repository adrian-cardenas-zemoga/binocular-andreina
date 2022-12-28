import React from "react";
import Advantage from "../Advantage/Advantage";
import "./AdvantagesSection.css";

function AdvantagesSection() {
  return (
    <div className="advantages-container">
      <div className="advantages-info">
        <h1 className="advantages-info-title">Reporte constante</h1>
        <p className="advantages-info-description">
          Cras accumsan pretium dignissim. Curabitur a orci lorem. Phasellus
          tempor dolor vel odio efficitur ac sollicitudin.
        </p>
        <Advantage
          icon="icon-notification.svg"
          title="Notificaciones"
          text="Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin scelerisque nisi urna. Duis rutrum non risus in imperdiet."
        />
        <Advantage
          icon="icon-feedback.svg"
          title="Feedback para los desarrolladores"
          text="Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin scelerisque nisi urna. Duis rutrum non risus in imperdiet."
        />
        <Advantage
          icon="icon-report.svg"
          title="Reporte de soluciones"
          text="Duis vestibulum elit vel neque pharetra vulputate. Quisque Proin scelerisque nisi urna. Duis rutrum non risus in imperdiet."
        />
      </div>
      <img
        className="advantages-image"
        src="img-report.png"
        alt="Advantages Image"
      />
    </div>
  );
}

export default AdvantagesSection;
