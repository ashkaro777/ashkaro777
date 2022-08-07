import React from "react";
import styled from "styled-components";

import Button from "common/components/common/Button";

const StyledButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledParagraph = styled.p`
  max-width: 65ch;
`;

const BookDetails: React.FC = () => {
  return (
    <div>
      <h2>Where you belong</h2>

      <StyledParagraph>
        When Life choose you for something, even the wrong path leads you to the
        right destination
      </StyledParagraph>

      <StyledParagraph>
        A story about dreams, responsibilities, love and friendship.
      </StyledParagraph>

      <StyledParagraph>
        Earnings from the book sales goes to charity. Buy the book and support
        for a good cause.
      </StyledParagraph>

      <StyledButtonsContainer className="mt-5">
        <Button>Amazon</Button>
        <Button>Flipkart</Button>
        <Button>Pothi</Button>
      </StyledButtonsContainer>
    </div>
  );
};

export default BookDetails;
