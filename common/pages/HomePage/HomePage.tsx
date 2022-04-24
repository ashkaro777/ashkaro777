import React from "react";

import HeroSection from "./components/HeroSection";
import ButtonNav from "./components/ButtonNav";
import BookDetailsSection from "common/components/BookDetailsSection";
import TravelSection from "common/components/TravelSection";
import PhotographySection from "common/components/PhotographySection";
import { StyledHomePage } from "./styles";

const HomePage: React.FunctionComponent = () => {
  return (
    <StyledHomePage>
      <ButtonNav />

      <HeroSection />
      <BookDetailsSection />
      <TravelSection />
      <PhotographySection />
    </StyledHomePage>
  );
};

export default HomePage;
