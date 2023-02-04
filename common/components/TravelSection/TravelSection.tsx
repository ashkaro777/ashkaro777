import React from "react";
import styled from "styled-components";

import { ELEMENT_ID } from "common/constants/element";

const StyledTravelSection = styled.div`
  min-height: 100vh;
  background: lime;
`;

const TravelSection: React.FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <StyledTravelSection
      id={ELEMENT_ID.TRAVEL_SECTION}
      className={className}
    ></StyledTravelSection>
  );
};

export default TravelSection;
