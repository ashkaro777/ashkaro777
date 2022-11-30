import React from "react";
import styled from "styled-components";

import { ELEMENT_ID } from "common/constants/element";
import { IHeroSectionProps } from "../interfaces";
import { StyledHeading, StyledHeroSection } from "../styles";

const StypedBackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroSection: React.FunctionComponent<IHeroSectionProps> = () => {
  return (
    <StyledHeroSection id={ELEMENT_ID.HERO_SECTION}>
      <StyledHeading>Ashish Jangid</StyledHeading>
      <StypedBackgroundVideo
        src={"./assets/videos/dance-grains.mp4"}
        autoPlay
        loop
        muted
      />
    </StyledHeroSection>
  );
};

export default HeroSection;
