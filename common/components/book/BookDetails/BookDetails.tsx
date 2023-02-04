import React from "react";
import styled from "styled-components";

import BookSocialButtons from "../BookSocialButtons";

const StyledParagraph = styled.p`
  max-width: 65ch;
`;

const StyledSecondaryParagraph = styled.p`
  max-width: 65ch;
  font-size: 20px;
`;

const StyledReadButton = styled.button`
  background: #0255fd;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 1rem;
  border-radius: 100rem;
`;

const BookDetails: React.FC = () => {
  return (
    <div>
      <h2>Where you belong</h2>

      <StyledParagraph>
        When like chooses you for something even the wrong path leads you to
        right destination
      </StyledParagraph>

      <StyledParagraph className="mb-0">
        A story about dreams respnsibilities, love and friendship
      </StyledParagraph>

      <hr />

      <StyledSecondaryParagraph>
        Earnings from the book sales goes to charity. Buy the book and support
        for a good cause.
      </StyledSecondaryParagraph>

      <BookSocialButtons className="mt-5 d-none d-md-flex" />

      <div className="d-flex justify-content-center mt-5">
        <StyledReadButton>Read pdf</StyledReadButton>
      </div>
    </div>
  );
};

export default BookDetails;
