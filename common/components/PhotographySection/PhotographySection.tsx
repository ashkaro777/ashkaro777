import React from "react";
import styled from "styled-components";

import { ELEMENT_ID } from "common/constants/element";

const StyledPhotographySection = styled.div`
  min-height: 100vh;
  background: blue;
`;

const PhotographySection: React.FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <StyledPhotographySection
      id={ELEMENT_ID.PHOTOGRAPHY_SECTION}
      className={className}
    ></StyledPhotographySection>
  );
};

export default PhotographySection;
