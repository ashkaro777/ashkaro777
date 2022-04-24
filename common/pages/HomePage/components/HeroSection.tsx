import React from "react";

import { ELEMENT_ID } from "common/constants/element";
import { IHeroSectionProps } from "../interfaces";
import { StyledHeading, StyledHeroSection } from "../styles";

const HeroSection: React.FunctionComponent<IHeroSectionProps> = () => {
  return (
    <StyledHeroSection id={ELEMENT_ID.HERO_SECTION}>
      <StyledHeading>Ashish Jahangid</StyledHeading>
    </StyledHeroSection>
  );
};

export default HeroSection;
