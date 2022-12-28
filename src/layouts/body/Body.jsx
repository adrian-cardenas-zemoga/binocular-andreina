import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import PlatformsSection from "../../components/PlatformsSection/PlatformsSection";
import PlansSection from "../../components/PlansSection/PlansSection";

function Body() {
  return (
    <div className="body-container">
      <LandingPage />
      <FeaturesSection />
      <IntroductionSection />
      <AdvantagesSection />
      <PlatformsSection />
      <PlansSection />
    </div>
  );
}

export default Body;
