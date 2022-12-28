import React from "react";
import Feature from "../Feature/Feature";
import "./FeaturesSection.css";

function FeaturesSection() {
  return (
    <div className="features-section">
      <h1 className="features-title">Adaptable a ti</h1>
      <div className="features-cards">
        <Feature
          icon="icon-design.svg"
          title="Diseño Amigable"
          description="Lorem ipsum dolor sit amet into consectetur adipiscing elit, sed do eiusmod tempor incid."
        />
        <Feature
          icon="icon-edit.svg"
          title="Editable"
          description="Lorem ipsum dolor sit amet into consectetur adipiscing elit, sed do eiusmod tempor incid."
        />
        <Feature
          icon="icon-security.svg"
          title="Seguro"
          description="Lorem ipsum dolor sit amet into consectetur adipiscing elit, sed do eiusmod tempor incid."
        />
      </div>
    </div>
  );
}

export default FeaturesSection;
