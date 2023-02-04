import React from "react";

import HeroSection from "./components/HeroSection";
import ButtonNav from "./components/ButtonNav";
import TravelSection from "common/components/TravelSection";
import PhotographySection from "common/components/PhotographySection";
import BookDetailsSection from "common/components/book/BookDetailsSection";
import { StyledHomePage } from "./styles";

const HomePage: React.FunctionComponent = () => {
  return (
    <StyledHomePage>
      <ButtonNav />
      <HeroSection />
      <BookDetailsSection />
      <PhotographySection />
      {false && <TravelSection />}
    </StyledHomePage>
  );
};

export default HomePage;
