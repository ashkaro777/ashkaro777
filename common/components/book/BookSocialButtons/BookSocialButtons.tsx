import React from "react";
import styled from "styled-components";

import Button from "common/components/common/Button";
import { screenLargerThan, screenSmallerThan } from "common/utils/responsive";

const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  ${screenLargerThan.tablet} {
    gap: 2rem;
  }

  ${screenSmallerThan.tablet} {
    width: 100%;
    justify-content: space-between;
  }
`;

const BookSocialButtons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <StyledButtonsContainer className={className}>
      <Button>Amazon</Button>
      <Button>Flipkart</Button>
      <Button>Pothi</Button>
    </StyledButtonsContainer>
  );
};

export default BookSocialButtons;
